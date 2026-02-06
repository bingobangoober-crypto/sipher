import { keccak_256 } from '@noble/hashes/sha3'
import { bytesToHex } from '@noble/hashes/utils'
import { LRUCache } from 'lru-cache'
import { CACHE_MAX_DEFAULT, TWO_HOURS_MS } from '../constants.js'

// ─── Constants ──────────────────────────────────────────────────────────────

const DOMAIN_TAG = new TextEncoder().encode('SIPHER-JITO-BUNDLE')

/** Real Jito mainnet tip accounts */
export const JITO_TIP_ACCOUNTS = [
  '96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5',
  'HFqU5x63VTqvQss8hp11i4bVqkfRtQ7NmXwkiY294pay',
  'Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY',
  'ADaUMid9yfUytqMBgopwjb2DTLSLmWbTAq4hmMr1MczX',
  'DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh',
  'ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt',
  'DttWaMuVvTiduZRnguLF7jNxTgiMBZ1hyAumKUiL2KRL',
  '3AVi9Tg9Uo68tJfuvoKvqKNWKkC5wPdSSdeBnizKZ6jT',
]

// ─── Types ──────────────────────────────────────────────────────────────────

export type BundleStatus = 'submitted' | 'bundled' | 'confirming' | 'confirmed'

export interface BundleEntry {
  id: string
  transactions: string[]
  tipAccount: string
  tipLamports: string
  gasSponsored: boolean
  submittedAt: number
  precomputedSignature: string
  precomputedSlot: number
}

export interface SubmitBundleParams {
  transactions: string[]
  tipLamports?: string
  gasSponsorship?: boolean
}

export interface SubmitBundleResult {
  bundleId: string
  status: BundleStatus
  tipAccount: string
  tipLamports: string
  gasSponsored: boolean
  slot: number
  signature: string
  estimatedConfirmation: number
}

export interface BundleStatusResult {
  bundleId: string
  status: BundleStatus
  progress: number
  slot: number
  signature: string
  confirmedAt?: number
}

// ─── Cache ──────────────────────────────────────────────────────────────────

const bundleCache = new LRUCache<string, BundleEntry>({
  max: CACHE_MAX_DEFAULT,
  ttl: TWO_HOURS_MS,
})

// ─── State Machine Thresholds (ms) ─────────────────────────────────────────

const STATUS_THRESHOLDS = {
  submitted: 0,
  bundled: 500,
  confirming: 1500,
  confirmed: 3000,
}

function getStatus(elapsed: number): { status: BundleStatus; progress: number } {
  if (elapsed >= STATUS_THRESHOLDS.confirmed) return { status: 'confirmed', progress: 100 }
  if (elapsed >= STATUS_THRESHOLDS.confirming) return { status: 'confirming', progress: 66 }
  if (elapsed >= STATUS_THRESHOLDS.bundled) return { status: 'bundled', progress: 33 }
  return { status: 'submitted', progress: 0 }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function domainHash(label: string, data: string): string {
  const payload = new TextEncoder().encode(label + data)
  const input = new Uint8Array(DOMAIN_TAG.length + payload.length)
  input.set(DOMAIN_TAG)
  input.set(payload, DOMAIN_TAG.length)
  return bytesToHex(keccak_256(input))
}

export function getRandomTipAccount(): string {
  return JITO_TIP_ACCOUNTS[Math.floor(Math.random() * JITO_TIP_ACCOUNTS.length)]
}

export function getTipAccounts(): string[] {
  return [...JITO_TIP_ACCOUNTS]
}

// ─── Submit Bundle ──────────────────────────────────────────────────────────

export function submitBundle(params: SubmitBundleParams): SubmitBundleResult {
  const { transactions, tipLamports = '10000', gasSponsorship = false } = params

  const now = Date.now()
  const bundleId = 'jito_' + domainHash('BUNDLE', transactions.join('') + now.toString())
  const tipAccount = getRandomTipAccount()
  const signature = domainHash('SIG', bundleId)
  const slotHash = domainHash('SLOT', bundleId)
  const slot = 280_000_000 + parseInt(slotHash.slice(0, 8), 16) % 1_000_000

  const entry: BundleEntry = {
    id: bundleId,
    transactions,
    tipAccount,
    tipLamports,
    gasSponsored: gasSponsorship,
    submittedAt: now,
    precomputedSignature: signature,
    precomputedSlot: slot,
  }
  bundleCache.set(bundleId, entry)

  return {
    bundleId,
    status: 'submitted',
    tipAccount,
    tipLamports,
    gasSponsored: gasSponsorship,
    slot,
    signature,
    estimatedConfirmation: now + STATUS_THRESHOLDS.confirmed,
  }
}

// ─── Get Bundle Status ──────────────────────────────────────────────────────

export function getBundleStatus(id: string): BundleStatusResult | null {
  const entry = bundleCache.get(id)
  if (!entry) return null

  const elapsed = Date.now() - entry.submittedAt
  const { status, progress } = getStatus(elapsed)

  const result: BundleStatusResult = {
    bundleId: entry.id,
    status,
    progress,
    slot: entry.precomputedSlot,
    signature: entry.precomputedSignature,
  }

  if (status === 'confirmed') {
    result.confirmedAt = entry.submittedAt + STATUS_THRESHOLDS.confirmed
  }

  return result
}

// ─── Utility ────────────────────────────────────────────────────────────────

export function resetJitoProvider(): void {
  bundleCache.clear()
}

/** Test helper: override submittedAt to control state machine */
export function _setBundleTimestamp(id: string, ts: number): void {
  const entry = bundleCache.get(id)
  if (entry) {
    entry.submittedAt = ts
    bundleCache.set(id, entry)
  }
}
