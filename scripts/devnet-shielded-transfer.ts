#!/usr/bin/env tsx
/**
 * Devnet Shielded Transfer Demo
 *
 * Executes a REAL on-chain shielded transfer on Solana devnet:
 * 1. Loads a funded devnet keypair
 * 2. Generates stealth meta-address (Bob)
 * 3. Builds unsigned shielded transfer via Sipher API
 * 4. Signs client-side and submits to devnet
 * 5. Confirms on-chain
 * 6. Scans for incoming payment (Bob's perspective)
 * 7. Prints summary with Solscan link
 *
 * Env:
 *   DEVNET_KEYPAIR_PATH — funded devnet keypair (default: ~/.config/solana/id.json)
 *   SIPHER_URL          — API base (default: http://localhost:5006)
 *   API_KEY             — auth key (default: dev-key-1)
 *   DEVNET_RPC_URL      — devnet RPC (default: https://api.devnet.solana.com)
 *
 * Prerequisites:
 *   1. Funded devnet keypair (solana airdrop 1 --url devnet)
 *   2. Server running on devnet: SOLANA_RPC_URL=https://api.devnet.solana.com pnpm dev
 *
 * Usage:
 *   pnpm devnet-demo
 *   SIPHER_URL=https://sipher.sip-protocol.org pnpm devnet-demo
 */

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { homedir } from 'os'
import {
  Connection,
  Keypair,
  Transaction,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js'

// ─── Configuration ───────────────────────────────────────────────────────────

const BASE = process.env.SIPHER_URL || 'http://localhost:5006'
const API_KEY = process.env.API_KEY || 'dev-key-1'
const DEVNET_RPC = process.env.DEVNET_RPC_URL || 'https://api.devnet.solana.com'
const KEYPAIR_PATH = process.env.DEVNET_KEYPAIR_PATH
  || resolve(homedir(), '.config/solana/id.json')

const TRANSFER_AMOUNT = 10_000_000 // 0.01 SOL in lamports
const MIN_BALANCE = 20_000_000     // 0.02 SOL minimum (covers transfer + fees)
const MAX_RETRIES = 3

// ─── Colors ──────────────────────────────────────────────────────────────────

const RESET = '\x1b[0m'
const BOLD = '\x1b[1m'
const DIM = '\x1b[2m'
const GREEN = '\x1b[32m'
const RED = '\x1b[31m'
const CYAN = '\x1b[36m'
const YELLOW = '\x1b[33m'
const MAGENTA = '\x1b[35m'

// ─── Output Helpers ──────────────────────────────────────────────────────────

let stepCount = 0
let endpointCount = 0

function banner() {
  console.log(`
${MAGENTA}╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ${BOLD}SIPHER DEVNET SHIELDED TRANSFER${RESET}${MAGENTA}                         ║
║   Real on-chain privacy — stealth addresses on Solana        ║
║                                                              ║
║   Alice sends 0.01 SOL to Bob's stealth address              ║
║   Bob detects the payment using only his viewing key         ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝${RESET}
`)
  console.log(`${DIM}Server: ${BASE}${RESET}`)
  console.log(`${DIM}RPC:    ${DEVNET_RPC}${RESET}\n`)
}

function step(title: string) {
  stepCount++
  console.log(`\n${CYAN}━━━ Step ${stepCount}/7: ${title} ━━━${RESET}`)
}

function ok(label: string, value: string) {
  console.log(`  ${GREEN}✓${RESET} ${label}: ${value}`)
}

function info(label: string, value: string) {
  console.log(`  ${DIM}${label}: ${value}${RESET}`)
}

function warn(message: string) {
  console.log(`  ${YELLOW}⚠${RESET} ${message}`)
}

function fail(message: string) {
  console.log(`  ${RED}✗${RESET} ${message}`)
}

function endpoint(method: string, path: string) {
  endpointCount++
  console.log(`  ${YELLOW}→${RESET} ${method} ${path}`)
}

function truncate(s: string, len = 20): string {
  return s.length > len ? `${s.slice(0, len)}...` : s
}

// ─── API Client ──────────────────────────────────────────────────────────────

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: { code: string; message: string }
}

async function api<T>(path: string, body?: unknown): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (API_KEY) headers['X-API-Key'] = API_KEY

  const res = await fetch(`${BASE}${path}`, {
    method: body !== undefined ? 'POST' : 'GET',
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const json = (await res.json()) as ApiResponse<T>
  if (!json.success) {
    throw new Error(`${path} failed: ${json.error?.message || 'Unknown error'} (${json.error?.code})`)
  }
  return json.data!
}

// ─── Keypair Loader ──────────────────────────────────────────────────────────

function loadKeypair(path: string): Keypair {
  try {
    const raw = readFileSync(path, 'utf-8')
    const secretKey = new Uint8Array(JSON.parse(raw))
    return Keypair.fromSecretKey(secretKey)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error(`\n${RED}Failed to load keypair from ${path}${RESET}`)
    console.error(`${DIM}${msg}${RESET}\n`)
    console.error(`To create a devnet keypair:`)
    console.error(`  ${CYAN}solana-keygen new --outfile ~/.config/solana/id.json${RESET}`)
    console.error(`  ${CYAN}solana airdrop 1 --url devnet${RESET}\n`)
    console.error(`Or set DEVNET_KEYPAIR_PATH to your keypair file.`)
    process.exit(1)
  }
}

// ─── Main Flow ───────────────────────────────────────────────────────────────

async function main() {
  banner()
  const start = performance.now()

  // ══════════════════════════════════════════════════════════════════════════
  // Step 1: Setup — load keypair, check balance, health check
  // ══════════════════════════════════════════════════════════════════════════
  step('Setup & Validation')

  const keypair = loadKeypair(KEYPAIR_PATH)
  ok('Keypair loaded', keypair.publicKey.toBase58())
  info('Keypair path', KEYPAIR_PATH)

  const connection = new Connection(DEVNET_RPC, 'confirmed')
  const balance = await connection.getBalance(keypair.publicKey)
  const balanceSol = balance / LAMPORTS_PER_SOL

  ok('Balance', `${balanceSol} SOL`)

  if (balance < MIN_BALANCE) {
    fail(`Insufficient balance: need ${MIN_BALANCE / LAMPORTS_PER_SOL} SOL, have ${balanceSol} SOL`)
    console.error(`\n  Airdrop devnet SOL:`)
    console.error(`  ${CYAN}solana airdrop 1 ${keypair.publicKey.toBase58()} --url devnet${RESET}\n`)
    process.exit(1)
  }

  // Health check the API server
  endpoint('GET', '/v1/health')
  try {
    const health = await api<Record<string, unknown>>('/v1/health')
    ok('Server health', String(health.status))
    if (health.solana && typeof health.solana === 'object') {
      const sol = health.solana as Record<string, unknown>
      info('RPC latency', `${sol.latencyMs ?? 'N/A'}ms`)
      info('Cluster', String(sol.cluster ?? 'unknown'))
    }
  } catch {
    fail(`Cannot reach server at ${BASE}`)
    console.error(`\n  Start the server on devnet:`)
    console.error(`  ${CYAN}SOLANA_RPC_URL=${DEVNET_RPC} pnpm dev${RESET}\n`)
    process.exit(1)
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Step 2: Generate Bob's stealth meta-address
  // ══════════════════════════════════════════════════════════════════════════
  step('Generate Bob\'s Stealth Meta-Address')

  endpoint('POST', '/v1/stealth/generate')
  const bobKeys = await api<{
    metaAddress: {
      spendingKey: string
      viewingKey: string
      chain: string
    }
    spendingPrivateKey: string
    viewingPrivateKey: string
  }>('/v1/stealth/generate', {})

  ok('Spending key', truncate(bobKeys.metaAddress.spendingKey))
  ok('Viewing key', truncate(bobKeys.metaAddress.viewingKey))
  info('Chain', bobKeys.metaAddress.chain)
  info('Privacy model', 'Stealth meta-address (DKSAP)')

  // ══════════════════════════════════════════════════════════════════════════
  // Step 3: Build shielded transfer (Alice → Bob's stealth address)
  // ══════════════════════════════════════════════════════════════════════════
  step('Build Shielded Transfer')

  endpoint('POST', '/v1/transfer/shield')
  const shield = await api<{
    transaction: string
    stealthAddress: string
    ephemeralPublicKey: string
    viewTag: number
    commitment: string
    blindingFactor: string
    viewingKeyHash: string
    sharedSecret: string
    programId: string
    noteId: string | null
    instructionType: 'anchor' | 'system'
    encryptedAmount?: string
  }>('/v1/transfer/shield', {
    sender: keypair.publicKey.toBase58(),
    recipientMetaAddress: {
      spendingKey: bobKeys.metaAddress.spendingKey,
      viewingKey: bobKeys.metaAddress.viewingKey,
      chain: 'solana',
    },
    amount: String(TRANSFER_AMOUNT),
    forceSystem: true,
  })

  ok('Stealth address', shield.stealthAddress)
  ok('Instruction type', shield.instructionType)
  ok('Pedersen commitment', truncate(shield.commitment))
  info('Ephemeral pubkey', truncate(shield.ephemeralPublicKey))
  info('View tag', String(shield.viewTag))
  if (shield.noteId) {
    info('Transfer record PDA', shield.noteId)
  }
  info('Transaction size', `${shield.transaction.length} bytes (base64)`)

  // ══════════════════════════════════════════════════════════════════════════
  // Step 4: Sign & submit transaction to devnet
  // ══════════════════════════════════════════════════════════════════════════
  step('Sign & Submit to Devnet')

  const txBuffer = Buffer.from(shield.transaction, 'base64')
  const tx = Transaction.from(txBuffer)

  // Re-fetch a fresh blockhash for client-side signing
  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash('confirmed')
  tx.recentBlockhash = blockhash
  tx.lastValidBlockHeight = lastValidBlockHeight
  tx.feePayer = keypair.publicKey

  tx.sign(keypair)
  ok('Transaction signed', `${tx.signatures.length} signature(s)`)

  let txSignature = ''
  let confirmBlockhash = blockhash
  let confirmBlockHeight = lastValidBlockHeight

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      info('Attempt', `${attempt}/${MAX_RETRIES}`)

      txSignature = await connection.sendRawTransaction(tx.serialize(), {
        skipPreflight: false,
        preflightCommitment: 'confirmed',
      })

      ok('Sent', truncate(txSignature, 44))

      await connection.confirmTransaction(
        { signature: txSignature, blockhash: confirmBlockhash, lastValidBlockHeight: confirmBlockHeight },
        'confirmed',
      )

      ok('Confirmed on-chain', 'success')
      break
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      if (attempt === MAX_RETRIES) {
        fail(`Transaction failed after ${MAX_RETRIES} attempts: ${msg}`)
        console.error(`\n  This may happen if:`)
        console.error(`  - The server's RPC is not pointed at devnet`)
        console.error(`  - The blockhash expired (network congestion)`)
        console.error(`  - The Anchor program is not deployed on devnet\n`)
        process.exit(1)
      }
      warn(`Attempt ${attempt} failed: ${msg.slice(0, 80)}`)

      // Re-fetch blockhash for retry
      const fresh = await connection.getLatestBlockhash('confirmed')
      tx.recentBlockhash = fresh.blockhash
      tx.lastValidBlockHeight = fresh.lastValidBlockHeight
      confirmBlockhash = fresh.blockhash
      confirmBlockHeight = fresh.lastValidBlockHeight
      tx.sign(keypair)
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Step 5: Confirm on-chain
  // ══════════════════════════════════════════════════════════════════════════
  step('Confirm On-Chain')

  if (!txSignature) {
    fail('No transaction signature available')
    process.exit(1)
  }

  const txInfo = await connection.getTransaction(txSignature, {
    commitment: 'confirmed',
    maxSupportedTransactionVersion: 0,
  })

  if (txInfo) {
    ok('Confirmed', `slot ${txInfo.slot}`)
    ok('Fee', `${(txInfo.meta?.fee ?? 0) / LAMPORTS_PER_SOL} SOL`)

    if (txInfo.meta?.err) {
      fail(`Transaction error: ${JSON.stringify(txInfo.meta.err)}`)
    } else {
      ok('Status', 'Success')
    }
  } else {
    warn('Transaction info not yet available (may still be confirming)')
  }

  const solscanUrl = `https://solscan.io/tx/${txSignature}?cluster=devnet`
  console.log(`\n  ${MAGENTA}${BOLD}Solscan:${RESET} ${solscanUrl}`)

  // Check post-transfer balance
  const postBalance = await connection.getBalance(keypair.publicKey)
  info('Remaining balance', `${postBalance / LAMPORTS_PER_SOL} SOL`)

  // ══════════════════════════════════════════════════════════════════════════
  // Step 6: Bob scans for incoming payment
  // ══════════════════════════════════════════════════════════════════════════
  step('Bob Scans for Payments')

  endpoint('POST', '/v1/scan/payments')
  try {
    const scan = await api<{
      payments: Array<{
        stealthAddress: string
        ephemeralPublicKey: string
        txSignature: string
        slot: number
      }>
      scanned: number
    }>('/v1/scan/payments', {
      viewingPrivateKey: bobKeys.viewingPrivateKey,
      spendingPublicKey: bobKeys.metaAddress.spendingKey,
      limit: 20,
    })

    ok('Transactions scanned', String(scan.scanned))

    if (scan.payments.length > 0) {
      ok('Payments found', String(scan.payments.length))
      for (const payment of scan.payments) {
        info('  Stealth addr', truncate(payment.stealthAddress))
        info('  Tx signature', truncate(payment.txSignature, 44))
      }
    } else {
      warn('No payments detected via memo scanning')
      info('Note', 'Memo-based scanning requires SIP announcements in the transaction')
      info('Stealth addr', shield.stealthAddress)
      info('The transfer itself', `confirmed at ${solscanUrl}`)
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    warn(`Scan returned error: ${msg.slice(0, 80)}`)
    info('Note', 'Payment scanning searches for SIP memo announcements on-chain')
    info('The transfer itself', `confirmed at ${solscanUrl}`)
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Step 7: Summary
  // ══════════════════════════════════════════════════════════════════════════
  step('Summary')

  const elapsed = ((performance.now() - start) / 1000).toFixed(1)
  const fee = txInfo?.meta?.fee ?? 5000

  console.log(`
${GREEN}╔══════════════════════════════════════════════════════════════╗
║  ${BOLD}DEVNET SHIELDED TRANSFER COMPLETE${RESET}${GREEN}                          ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Amount:         ${TRANSFER_AMOUNT / LAMPORTS_PER_SOL} SOL (${TRANSFER_AMOUNT.toLocaleString()} lamports)${' '.repeat(17)}║
║  Tx fee:         ${(fee / LAMPORTS_PER_SOL).toFixed(6)} SOL${' '.repeat(32)}║
║  Time:           ${elapsed}s${' '.repeat(Math.max(0, 42 - elapsed.length))}║
║  Endpoints:      ${endpointCount} API calls${' '.repeat(Math.max(0, 37 - String(endpointCount).length))}║
║                                                              ║
║  ${BOLD}Privacy Properties:${RESET}${GREEN}                                         ║
║  • Stealth address: one-time, unlinkable to Bob              ║
║  • Pedersen commitment: amount hidden cryptographically      ║
║  • Ephemeral key: sender unlinkable (no address reuse)       ║
║  • View tag: efficient scanning without full decryption      ║
║                                                              ║
║  ${BOLD}Solscan:${RESET}${GREEN}                                                    ║
║  ${RESET}${solscanUrl}${GREEN}
║                                                              ║
╚══════════════════════════════════════════════════════════════╝${RESET}
`)
}

main().catch((err) => {
  console.error(`\n${RED}${BOLD}Fatal error:${RESET} ${err.message}`)
  if (err.stack) {
    console.error(`${DIM}${err.stack}${RESET}`)
  }
  process.exit(1)
})
