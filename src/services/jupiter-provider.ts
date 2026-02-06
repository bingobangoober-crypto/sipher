import { keccak_256 } from '@noble/hashes/sha3'
import { bytesToHex } from '@noble/hashes/utils'
import { LRUCache } from 'lru-cache'

// ─── Constants ──────────────────────────────────────────────────────────────

const DOMAIN_TAG = new TextEncoder().encode('SIPHER-JUPITER-DEX')

export const SUPPORTED_TOKENS: Record<string, { symbol: string; name: string; decimals: number }> = {
  So11111111111111111111111111111111111111112: { symbol: 'SOL', name: 'Wrapped SOL', decimals: 9 },
  EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: { symbol: 'USDC', name: 'USD Coin', decimals: 6 },
  Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: { symbol: 'USDT', name: 'Tether USD', decimals: 6 },
  mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So: { symbol: 'mSOL', name: 'Marinade Staked SOL', decimals: 9 },
  J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn: { symbol: 'JitoSOL', name: 'Jito Staked SOL', decimals: 9 },
}

// ─── Types ──────────────────────────────────────────────────────────────────

export interface QuoteParams {
  inputMint: string
  outputMint: string
  amount: string       // lamports / smallest unit
  slippageBps?: number // default 50 (0.5%)
}

export interface QuoteEntry {
  quoteId: string
  inputMint: string
  outputMint: string
  inAmount: string
  outAmount: string
  outAmountMin: string
  priceImpactPct: string
  slippageBps: number
  expiresAt: number
}

export interface SwapTransactionParams {
  quoteId: string
  userPublicKey: string
  destinationAddress: string
}

export interface SwapTransactionResult {
  swapTransaction: string // base64
  quoteId: string
  computeUnitPrice: number
  priorityFee: number
}

// ─── Cache ──────────────────────────────────────────────────────────────────

const quoteCache = new LRUCache<string, QuoteEntry>({
  max: 1000,
  ttl: 30 * 1000, // 30s — quotes expire fast
})

// ─── Helpers ────────────────────────────────────────────────────────────────

function hashWithTag(label: string, data: string): Uint8Array {
  const payload = new TextEncoder().encode(label + data)
  const input = new Uint8Array(DOMAIN_TAG.length + payload.length)
  input.set(DOMAIN_TAG)
  input.set(payload, DOMAIN_TAG.length)
  return keccak_256(input)
}

// ─── Get Quote ──────────────────────────────────────────────────────────────

export function getQuote(params: QuoteParams): QuoteEntry {
  const { inputMint, outputMint, amount, slippageBps = 50 } = params

  // Validate tokens
  if (!SUPPORTED_TOKENS[inputMint]) {
    const err = new Error(`Unsupported input token: ${inputMint}. Supported: ${Object.keys(SUPPORTED_TOKENS).join(', ')}`)
    err.name = 'JupiterQuoteError'
    throw err
  }
  if (!SUPPORTED_TOKENS[outputMint]) {
    const err = new Error(`Unsupported output token: ${outputMint}. Supported: ${Object.keys(SUPPORTED_TOKENS).join(', ')}`)
    err.name = 'JupiterQuoteError'
    throw err
  }
  if (inputMint === outputMint) {
    const err = new Error('Input and output mints must be different')
    err.name = 'JupiterQuoteError'
    throw err
  }

  // Deterministic quote ID
  const now = Date.now()
  const quoteId = 'jup_' + bytesToHex(hashWithTag('QUOTE', inputMint + outputMint + amount + now.toString()))

  // Deterministic output amount via hash-seeded ratio
  const ratioHash = hashWithTag('RATIO', inputMint + outputMint + amount)
  // Use first 4 bytes as a ratio factor: 0.90 – 1.10 range
  const ratioSeed = (ratioHash[0]! << 8 | ratioHash[1]!) / 65535
  const ratioMultiplier = 0.90 + ratioSeed * 0.20 // 0.90 to 1.10

  // Adjust for decimal differences
  const inDecimals = SUPPORTED_TOKENS[inputMint]!.decimals
  const outDecimals = SUPPORTED_TOKENS[outputMint]!.decimals
  const decimalAdjustment = 10 ** (outDecimals - inDecimals)

  const inAmountBig = BigInt(amount)
  const rawOutAmount = Number(inAmountBig) * ratioMultiplier * decimalAdjustment
  const outAmount = BigInt(Math.max(1, Math.floor(rawOutAmount)))

  // Price impact from hash
  const impactSeed = (ratioHash[2]! & 0xFF) / 255
  const priceImpactPct = (impactSeed * 0.5).toFixed(4) // 0-0.5% impact

  // Slippage-adjusted minimum
  const outAmountMin = outAmount - (outAmount * BigInt(slippageBps) / 10000n)

  const entry: QuoteEntry = {
    quoteId,
    inputMint,
    outputMint,
    inAmount: amount,
    outAmount: outAmount.toString(),
    outAmountMin: outAmountMin.toString(),
    priceImpactPct,
    slippageBps,
    expiresAt: now + 30_000,
  }

  quoteCache.set(quoteId, entry)
  return entry
}

// ─── Build Swap Transaction ─────────────────────────────────────────────────

export function buildSwapTransaction(params: SwapTransactionParams): SwapTransactionResult {
  const { quoteId, userPublicKey, destinationAddress } = params

  const quote = quoteCache.get(quoteId)
  if (!quote) {
    const err = new Error(`Quote not found or expired: ${quoteId}`)
    err.name = 'JupiterSwapError'
    throw err
  }

  // Deterministic base64 transaction
  const txHash = hashWithTag('SWAP-TX', quoteId + userPublicKey + destinationAddress)
  const swapTransaction = Buffer.from(txHash).toString('base64')

  // Deterministic compute unit price and priority fee
  const feeHash = hashWithTag('FEE', quoteId)
  const computeUnitPrice = 1000 + (feeHash[0]! << 8 | feeHash[1]!) % 9000 // 1000-10000
  const priorityFee = 5000 + (feeHash[2]! << 8 | feeHash[3]!) % 45000      // 5000-50000

  return {
    swapTransaction,
    quoteId,
    computeUnitPrice,
    priorityFee,
  }
}

// ─── Utility ────────────────────────────────────────────────────────────────

export function getSupportedTokens(): typeof SUPPORTED_TOKENS {
  return SUPPORTED_TOKENS
}

export function isTokenSupported(mint: string): boolean {
  return mint in SUPPORTED_TOKENS
}

export function resetJupiterProvider(): void {
  quoteCache.clear()
}
