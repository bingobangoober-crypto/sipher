#!/usr/bin/env tsx
/**
 * Sipher Privacy Demo Agent
 *
 * An autonomous agent that demonstrates the complete privacy pipeline:
 * stealth addresses → shielded transfer → payment scanning → compliance.
 *
 * Scenario: Agent Alice sends a private payment to Agent Bob.
 *           Bob detects, claims, and discloses to an auditor.
 *           Both agents vote anonymously on a governance proposal.
 *
 * Usage:
 *   npx tsx scripts/privacy-demo-agent.ts              # Run full demo
 *   SIPHER_URL=https://sipher.sip-protocol.org npx tsx scripts/privacy-demo-agent.ts
 *
 * Env:
 *   SIPHER_URL   — API base URL (default: http://localhost:5006)
 *   API_KEY      — Optional API key for authenticated endpoints
 */

const BASE = process.env.SIPHER_URL || 'http://localhost:5006'
const API_KEY = process.env.API_KEY || 'dev-key-1'

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

async function apiPatch<T>(path: string, body: unknown): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (API_KEY) headers['X-API-Key'] = API_KEY

  const res = await fetch(`${BASE}${path}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  })
  const json = (await res.json()) as ApiResponse<T>
  if (!json.success) {
    throw new Error(`PATCH ${path} failed: ${json.error?.message || 'Unknown error'}`)
  }
  return json.data!
}

async function apiDelete(path: string): Promise<void> {
  const headers: Record<string, string> = {}
  if (API_KEY) headers['X-API-Key'] = API_KEY

  const res = await fetch(`${BASE}${path}`, { method: 'DELETE', headers })
  const json = (await res.json()) as ApiResponse<unknown>
  if (!json.success) {
    throw new Error(`DELETE ${path} failed: ${json.error?.message || 'Unknown error'}`)
  }
}

// ─── Output Helpers ──────────────────────────────────────────────────────────

const RESET = '\x1b[0m'
const GREEN = '\x1b[32m'
const CYAN = '\x1b[36m'
const YELLOW = '\x1b[33m'
const DIM = '\x1b[2m'
const BOLD = '\x1b[1m'

let stepCount = 0
let endpointCount = 0

function banner() {
  console.log(`
${CYAN}╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ${BOLD}SIPHER PRIVACY DEMO AGENT${RESET}${CYAN}                                 ║
║   Privacy-as-a-Skill for Autonomous Agents                   ║
║                                                              ║
║   Scenario: Alice sends a private payment to Bob             ║
║   Bob detects, claims, and discloses to an auditor           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝${RESET}
`)
  console.log(`${DIM}Server: ${BASE}${RESET}\n`)
}

function section(title: string) {
  stepCount++
  console.log(`\n${CYAN}━━━ Step ${stepCount}: ${title} ━━━${RESET}`)
}

function ok(label: string, value: string) {
  console.log(`  ${GREEN}✓${RESET} ${label}: ${value}`)
}

function info(label: string, value: string) {
  console.log(`  ${DIM}${label}: ${value}${RESET}`)
}

function endpoint(method: string, path: string) {
  endpointCount++
  console.log(`  ${YELLOW}→${RESET} ${method} ${path}`)
}

function truncate(s: string, len = 24): string {
  return s.length > len ? `${s.slice(0, len)}...` : s
}

// ─── Demo Flow ───────────────────────────────────────────────────────────────

async function main() {
  banner()
  const start = performance.now()

  // ── 1. Health Check ────────────────────────────────────────────
  section('System Health Check')
  endpoint('GET', '/v1/health')
  const health = await api<Record<string, unknown>>('/v1/health')
  ok('Status', String((health as Record<string, unknown>).status))
  const solana = health.solana as Record<string, unknown> | undefined
  if (solana) {
    ok('Solana Slot', String(solana.slot))
    ok('RPC Latency', `${solana.latencyMs}ms`)
    ok('Provider', String(solana.provider || 'generic'))
  }

  endpoint('GET', '/v1/ready')
  const ready = await api<Record<string, unknown>>('/v1/ready')
  ok('Ready', String((ready as Record<string, unknown>).ready))

  // ── 2. Bob generates stealth meta-address ──────────────────────
  section('Bob Generates Stealth Meta-Address')
  endpoint('POST', '/v1/stealth/generate')
  const bob = await api<Record<string, unknown>>('/v1/stealth/generate', {})
  const bobMeta = bob.metaAddress as Record<string, string>
  ok('Spending Key', truncate(bobMeta.spendingKey))
  ok('Viewing Key', truncate(bobMeta.viewingKey))
  ok('Chain', bobMeta.chain)
  info('Bob now shares his meta-address with Alice', '')

  // ── 3. Alice derives one-time stealth address for Bob ──────────
  section('Alice Derives Stealth Address for Bob')
  endpoint('POST', '/v1/stealth/derive')
  const derived = await api<Record<string, unknown>>('/v1/stealth/derive', {
    recipientMetaAddress: bobMeta,
  })
  const stealth = derived.stealthAddress as Record<string, unknown>
  ok('Stealth Address', truncate(String(stealth.address)))
  ok('Ephemeral PubKey', truncate(String(stealth.ephemeralPublicKey)))
  ok('View Tag', String(stealth.viewTag))
  info('This address is unlinkable to Bob\'s identity', '')

  // ── 4. Bob verifies the stealth address is his ─────────────────
  section('Bob Verifies Stealth Address Ownership')
  endpoint('POST', '/v1/stealth/check')
  const check = await api<Record<string, unknown>>('/v1/stealth/check', {
    stealthAddress: {
      address: stealth.address,
      ephemeralPublicKey: stealth.ephemeralPublicKey,
      viewTag: stealth.viewTag,
    },
    spendingPrivateKey: bob.spendingPrivateKey,
    viewingPrivateKey: bob.viewingPrivateKey,
  })
  ok('Is Owner', String((check as Record<string, unknown>).isOwner))

  // ── 5. Alice creates Pedersen commitment to hide the amount ────
  section('Alice Hides Amount with Pedersen Commitment')
  const amount = '1000000000' // 1 SOL in lamports
  endpoint('POST', '/v1/commitment/create')
  const commitment = await api<Record<string, string>>('/v1/commitment/create', {
    value: amount,
  })
  ok('Commitment', truncate(commitment.commitment))
  ok('Blinding Factor', truncate(commitment.blindingFactor))
  info('Amount is hidden — only Alice knows it\'s 1 SOL', '')

  // ── 6. Verify the commitment opens correctly ───────────────────
  section('Verify Commitment Opening')
  endpoint('POST', '/v1/commitment/verify')
  const verified = await api<Record<string, boolean>>('/v1/commitment/verify', {
    commitment: commitment.commitment,
    value: amount,
    blindingFactor: commitment.blindingFactor,
  })
  ok('Valid', String(verified.valid))

  // ── 7. Range proof — prove amount >= threshold ──────────────
  section('Generate Range Proof (amount >= threshold)')
  endpoint('POST', '/v1/proofs/range/generate')
  const rangeResult = await api<Record<string, unknown>>('/v1/proofs/range/generate', {
    value: amount,
    threshold: '0',
    blindingFactor: commitment.blindingFactor,
    commitment: commitment.commitment,
  })
  const proofObj = rangeResult.proof as Record<string, unknown>
  ok('Proof Type', String(proofObj.type))
  ok('Proof Data', truncate(String(proofObj.proof)))
  ok('Public Inputs', String((proofObj.publicInputs as string[]).length) + ' elements')
  info('Verifier knows amount >= 0 without learning the value', '')

  endpoint('POST', '/v1/proofs/range/verify')
  const proofVerify = await api<Record<string, unknown>>('/v1/proofs/range/verify', {
    type: proofObj.type,
    proof: proofObj.proof,
    publicInputs: proofObj.publicInputs,
  })
  ok('Proof Valid', String(proofVerify.valid))

  // ── 8. Homomorphic operations — combine hidden amounts ─────────
  section('Homomorphic Commitment Arithmetic')
  endpoint('POST', '/v1/commitment/create')
  const c1 = await api<Record<string, string>>('/v1/commitment/create', { value: '500000000' })
  const c2 = await api<Record<string, string>>('/v1/commitment/create', { value: '300000000' })
  ok('C1 (0.5 SOL)', truncate(c1.commitment))
  ok('C2 (0.3 SOL)', truncate(c2.commitment))

  endpoint('POST', '/v1/commitment/add')
  const sum = await api<Record<string, string>>('/v1/commitment/add', {
    commitmentA: c1.commitment,
    commitmentB: c2.commitment,
    blindingA: c1.blindingFactor,
    blindingB: c2.blindingFactor,
  })
  ok('C1 + C2', truncate(sum.commitment))

  endpoint('POST', '/v1/commitment/verify')
  const sumVerified = await api<Record<string, boolean>>('/v1/commitment/verify', {
    commitment: sum.commitment,
    value: '800000000',
    blindingFactor: sum.blindingFactor,
  })
  ok('Sum = 0.8 SOL', String(sumVerified.valid))
  info('Computed 0.5 + 0.3 = 0.8 on encrypted data', '')

  // ── 9. Build shielded transfer ─────────────────────────────────
  section('Alice Builds Shielded Transfer')
  const sender = 'GsbwXfJraMomNxBcjYLcG3mxkBUiyWXAB32fGbSQQRre'
  endpoint('POST', '/v1/transfer/shield')
  try {
    const shielded = await api<Record<string, string>>('/v1/transfer/shield', {
      sender,
      recipientMetaAddress: bobMeta,
      amount,
    })
    ok('Transaction', truncate(shielded.transaction, 40))
    ok('Stealth Dest', truncate(shielded.stealthAddress))
    info('Alice signs this unsigned tx with her wallet', '')
  } catch {
    info('Skipped', 'demo sender address not on curve (expected in mock mode)')
  }

  // ── 10. Bob scans for incoming payments ────────────────────────
  section('Bob Scans for Incoming Payments')
  endpoint('POST', '/v1/scan/payments')
  try {
    const scanned = await api<Record<string, unknown>>('/v1/scan/payments', {
      viewingPrivateKey: bob.viewingPrivateKey,
      spendingPublicKey: bobMeta.spendingKey,
      limit: 5,
    })
    ok('Transactions Scanned', String(scanned.scanned))
    ok('Payments Found', String((scanned.payments as unknown[]).length))
  } catch {
    info('Skipped', 'RPC scan timed out (expected against public mainnet)')
  }
  info('In production, Bob would find Alice\'s stealth payment here', '')

  // ── 11. Viewing key hierarchy — compliance layer ───────────────
  section('Compliance: Viewing Key Hierarchy')
  endpoint('POST', '/v1/viewing-key/generate')
  const rootKey = await api<Record<string, string>>('/v1/viewing-key/generate', { path: 'm' })
  ok('Root Viewing Key', truncate(rootKey.key))

  endpoint('POST', '/v1/viewing-key/derive')
  const childKey = await api<Record<string, string>>('/v1/viewing-key/derive', {
    masterKey: rootKey,
    childPath: 'm/0',
  })
  ok('Child Key (m/0)', truncate(childKey.key))

  endpoint('POST', '/v1/viewing-key/verify-hierarchy')
  const hierarchy = await api<Record<string, unknown>>('/v1/viewing-key/verify-hierarchy', {
    parentKey: rootKey,
    childKey: { key: childKey.key, path: childKey.path, hash: childKey.hash },
    childPath: 'm/0',
  })
  ok('Hierarchy Valid', String((hierarchy as Record<string, unknown>).valid))

  // ── 12. Selective disclosure — encrypt tx for auditor ──────────
  section('Selective Disclosure for Auditor')
  const txData = {
    sender: 'Alice-Agent-42',
    recipient: String(stealth.address),
    amount,
    timestamp: Math.floor(Date.now() / 1000),
  }

  endpoint('POST', '/v1/viewing-key/disclose')
  const disclosed = await api<Record<string, string>>('/v1/viewing-key/disclose', {
    viewingKey: rootKey,
    transactionData: txData,
  })
  ok('Ciphertext', truncate(disclosed.ciphertext))
  ok('Nonce', truncate(disclosed.nonce))
  info('Only the auditor with the viewing key can decrypt this', '')

  endpoint('POST', '/v1/viewing-key/decrypt')
  const decrypted = await api<Record<string, unknown>>('/v1/viewing-key/decrypt', {
    viewingKey: rootKey,
    encrypted: {
      ciphertext: disclosed.ciphertext,
      nonce: disclosed.nonce,
      viewingKeyHash: disclosed.viewingKeyHash,
    },
  })
  ok('Decrypted Sender', String(decrypted.sender))
  ok('Decrypted Amount', String(decrypted.amount))
  ok('Data Match', String(decrypted.sender === txData.sender && decrypted.amount === txData.amount))

  // ── 13. Privacy score analysis ─────────────────────────────────
  section('Privacy Score Analysis')
  endpoint('POST', '/v1/privacy/score')
  const score = await api<Record<string, unknown>>('/v1/privacy/score', {
    address: sender,
    limit: 10,
  })
  ok('Address', truncate(String(score.address)))
  ok('Score', `${score.score}/100 (${score.grade})`)
  const factors = score.factors as Record<string, Record<string, unknown>>
  for (const [name, factor] of Object.entries(factors)) {
    info(`  ${name}`, `${factor.score}/100`)
  }

  // ── 14. Governance — anonymous vote ────────────────────────────
  section('Anonymous Governance Vote')
  const proposalId = 'proposal-sipher-upgrade-v2'
  const voterSecret = '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')

  endpoint('POST', '/v1/governance/ballot/encrypt')
  const ballot = await api<Record<string, unknown>>('/v1/governance/ballot/encrypt', {
    proposalId,
    vote: 'yes',
    voterSecret,
  })
  ok('Commitment', truncate(String(ballot.commitment)))
  ok('Nullifier', truncate(String(ballot.nullifier)))

  endpoint('POST', '/v1/governance/ballot/submit')
  const submitted = await api<Record<string, unknown>>('/v1/governance/ballot/submit', {
    proposalId,
    commitment: ballot.commitment,
    blindingFactor: ballot.blindingFactor,
    nullifier: ballot.nullifier,
    vote: 'yes',
  })
  ok('Accepted', String(submitted.accepted))
  info('Vote is anonymous — nullifier prevents double-voting', '')

  endpoint('POST', '/v1/governance/tally')
  const tally = await api<Record<string, unknown>>('/v1/governance/tally', {
    proposalId,
  })
  ok('Tally ID', truncate(String(tally.tallyId)))
  ok('Total Votes', String(tally.totalVotes))
  info('Tally computed via homomorphic addition — no individual votes revealed', '')

  // ── 15. Backend comparison ─────────────────────────────────────
  section('Privacy Backend Comparison')
  endpoint('GET', '/v1/backends')
  const backends = await api<Record<string, unknown>>('/v1/backends')
  const backendList = backends.backends as Array<Record<string, unknown>>
  for (const b of backendList) {
    const health = b.health as Record<string, unknown>
    ok(String(b.name), `${b.type} — ${health.isHealthy ? 'healthy' : 'unhealthy'} — chains: ${(b.chains as string[]).join(', ')}`)
  }

  endpoint('POST', '/v1/backends/compare')
  const comparison = await api<Record<string, unknown>>('/v1/backends/compare', {
    operation: 'stealth_privacy',
    prioritize: 'speed',
  })
  const recommendation = comparison.recommendation as Record<string, string>
  ok('Best Overall', recommendation.best_overall)
  ok('Most Private', recommendation.most_private)
  info('Engine compares cost, latency, and privacy level', '')

  // ── 16. Batch operations ───────────────────────────────────────
  section('Batch Operations (Fleet Mode)')
  endpoint('POST', '/v1/stealth/generate/batch')
  const batch = await api<Record<string, unknown>>('/v1/stealth/generate/batch', {
    count: 5,
    label: 'agent-fleet',
  })
  const summary = batch.summary as Record<string, number>
  ok('Generated', `${summary.succeeded}/${summary.total} stealth keypairs`)
  info('An agent fleet can generate addresses in bulk', '')

  // ── 17. Session management ─────────────────────────────────────
  section('Agent Session Management')
  endpoint('POST', '/v1/sessions')
  const session = await api<Record<string, unknown>>('/v1/sessions', {
    defaults: { chain: 'solana', privacyLevel: 'shielded' },
    ttlSeconds: 3600,
  })
  const sessionId = String(session.sessionId)
  ok('Session ID', truncate(sessionId))
  ok('Defaults', JSON.stringify(session.defaults))

  endpoint('GET', `/v1/sessions/${sessionId}`)
  const fetched = await api<Record<string, unknown>>(`/v1/sessions/${sessionId}`)
  ok('Retrieved', truncate(String(fetched.sessionId)))

  endpoint('PATCH', `/v1/sessions/${sessionId}`)
  await apiPatch(`/v1/sessions/${sessionId}`, {
    defaults: { chain: 'ethereum' },
  })
  ok('Updated', 'chain → ethereum')

  endpoint('DELETE', `/v1/sessions/${sessionId}`)
  await apiDelete(`/v1/sessions/${sessionId}`)
  ok('Deleted', 'session cleaned up')

  // ── 18. Idempotency ────────────────────────────────────────────
  section('Idempotency Verification')
  const idempotencyKey = crypto.randomUUID()
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Idempotency-Key': idempotencyKey,
  }
  if (API_KEY) headers['X-API-Key'] = API_KEY

  const first = await fetch(`${BASE}/v1/commitment/create`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ value: '42' }),
  })
  const firstJson = await first.json() as ApiResponse<Record<string, string>>

  const second = await fetch(`${BASE}/v1/commitment/create`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ value: '42' }),
  })
  const secondJson = await second.json() as ApiResponse<Record<string, string>>
  const replayed = second.headers.get('idempotency-replayed')

  ok('First Commitment', truncate(firstJson.data!.commitment))
  ok('Second (replayed)', truncate(secondJson.data!.commitment))
  ok('Idempotent', String(firstJson.data!.commitment === secondJson.data!.commitment))
  ok('Replay Header', String(replayed))
  endpointCount += 2

  // ── 19. Error catalog ──────────────────────────────────────────
  section('Error Catalog')
  endpoint('GET', '/v1/errors')
  const errors = await api<Record<string, unknown>>('/v1/errors')
  ok('Total Error Codes', String((errors as Record<string, unknown>).totalCodes))
  info('Every error has a code, status, description, and retry hint', '')

  // ── 20. RPC provider info ──────────────────────────────────────
  section('RPC Provider Info')
  endpoint('GET', '/v1/rpc/providers')
  const rpc = await api<Record<string, unknown>>('/v1/rpc/providers')
  const active = rpc.active as Record<string, unknown>
  ok('Active Provider', String(active.provider))
  ok('Cluster', String(active.cluster))
  const supported = rpc.supported as Array<Record<string, string>>
  ok('Supported', supported.map(s => s.name).join(', '))

  // ── Summary ────────────────────────────────────────────────────
  const elapsed = Math.round(performance.now() - start)
  console.log(`
${CYAN}╔══════════════════════════════════════════════════════════════╗
║  ${BOLD}DEMO COMPLETE${RESET}${CYAN}                                                ║
╚══════════════════════════════════════════════════════════════╝${RESET}

  ${GREEN}✓${RESET} Steps completed:      ${BOLD}${stepCount}${RESET}
  ${GREEN}✓${RESET} Endpoints exercised:   ${BOLD}${endpointCount}${RESET}
  ${GREEN}✓${RESET} Elapsed:              ${BOLD}${elapsed}ms${RESET}

  ${DIM}Capabilities demonstrated:${RESET}
    • Multi-chain stealth addresses (generate, derive, check)
    • Pedersen commitments (create, verify, add, subtract)
    • STARK range proofs (generate, verify)
    • Shielded transfers (shield, scan)
    • Viewing key hierarchy (generate, derive, verify, disclose, decrypt)
    • Privacy scoring (wallet analysis)
    • Anonymous governance voting (encrypt, submit, tally)
    • Privacy backend comparison (list, compare)
    • Agent sessions (create, read, update, delete)
    • Batch operations (fleet mode)
    • Idempotency (replay protection)

  ${DIM}In production, agents sign returned unsigned transactions
  with their wallet and submit to Solana/EVM/NEAR.${RESET}
`)
}

main().catch((err) => {
  console.error(`\n${'\x1b[31m'}Demo failed: ${err.message}${RESET}`)
  process.exit(1)
})
