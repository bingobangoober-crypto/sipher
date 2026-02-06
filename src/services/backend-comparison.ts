import { LRUCache } from 'lru-cache'
import { getBackendRegistry } from './backend-registry.js'
import { FIVE_MINUTES_MS } from '../constants.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export type OperationType = 'stealth_privacy' | 'encrypted_compute' | 'compliance_audit'

export interface ComparisonParams {
  operation: OperationType
  chain?: string
  amount?: string
  prioritize?: 'cost' | 'speed' | 'privacy'
}

export interface BackendComparison {
  backend: string
  type: string
  available: boolean
  costLamports: number
  costSOL: string
  latencyMs: number
  latencyCategory: 'fast' | 'medium' | 'slow'
  privacyLevel: string
  capabilities: string[]
  score: number
  recommended: boolean
}

export interface ComparisonRecommendation {
  best_overall: string
  best_value: string
  fastest: string
  most_private: string
  reasoning: string
}

export interface ComparisonResult {
  operation: OperationType
  chain: string
  comparisons: BackendComparison[]
  recommendation: ComparisonRecommendation
}

// ─── Cache ──────────────────────────────────────────────────────────────────

const comparisonCache = new LRUCache<string, ComparisonResult>({
  max: 100,
  ttl: FIVE_MINUTES_MS,
})

function cacheKey(params: ComparisonParams): string {
  return `${params.operation}:${params.chain ?? 'solana'}:${params.prioritize ?? 'default'}`
}

// ─── Scoring ────────────────────────────────────────────────────────────────

function scoreCost(costLamports: number): number {
  if (costLamports === 0) return 100
  if (costLamports <= 3000) return 70
  if (costLamports <= 5000) return 50
  if (costLamports <= 10000) return 25
  return 0
}

function scoreLatency(latencyMs: number): number {
  if (latencyMs < 500) return 100
  if (latencyMs <= 2000) return 75
  if (latencyMs <= 5000) return 50
  return 25
}

function scorePrivacy(capabilities: Record<string, unknown>): number {
  let score = 0
  if (capabilities.hiddenAmount) score += 25
  if (capabilities.hiddenRecipient) score += 25
  if (capabilities.hiddenSender) score += 25
  if (capabilities.hiddenCompute) score += 25
  if (capabilities.complianceSupport) score += 25
  return Math.min(score, 100)
}

export function scoreBackend(
  costLamports: number,
  latencyMs: number,
  capabilities: Record<string, unknown>,
  prioritize?: 'cost' | 'speed' | 'privacy',
): number {
  const costScore = scoreCost(costLamports)
  const latencyScore = scoreLatency(latencyMs)
  const privacyScore = scorePrivacy(capabilities)

  let wCost = 0.4
  let wLatency = 0.3
  let wPrivacy = 0.3

  if (prioritize === 'cost') { wCost = 0.6; wLatency = 0.2; wPrivacy = 0.2 }
  else if (prioritize === 'speed') { wCost = 0.2; wLatency = 0.6; wPrivacy = 0.2 }
  else if (prioritize === 'privacy') { wCost = 0.2; wLatency = 0.2; wPrivacy = 0.6 }

  return Math.round(costScore * wCost + latencyScore * wLatency + privacyScore * wPrivacy)
}

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getPrivacyLevel(capabilities: Record<string, unknown>): string {
  const hidden = [
    capabilities.hiddenAmount && 'hidden amounts',
    capabilities.hiddenRecipient && 'hidden recipients',
    capabilities.hiddenSender && 'hidden senders',
    capabilities.hiddenCompute && 'hidden compute',
  ].filter(Boolean)

  if (hidden.length === 0) return 'basic'
  if (hidden.length >= 3) return 'maximum'
  if (hidden.length >= 2) return 'high'
  return 'moderate'
}

function getLatencyCategory(ms: number): 'fast' | 'medium' | 'slow' {
  if (ms < 500) return 'fast'
  if (ms <= 3000) return 'medium'
  return 'slow'
}

function getCapabilityList(capabilities: Record<string, unknown>): string[] {
  return Object.entries(capabilities)
    .filter(([, v]) => v === true)
    .map(([k]) => k)
}

export function isBackendSuitableForOperation(
  capabilities: Record<string, unknown>,
  operation: OperationType,
): boolean {
  switch (operation) {
    case 'stealth_privacy':
      return Boolean(capabilities.hiddenAmount || capabilities.hiddenRecipient || capabilities.hiddenSender)
    case 'encrypted_compute':
      return Boolean(capabilities.hiddenCompute)
    case 'compliance_audit':
      return Boolean(capabilities.complianceSupport)
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────

export async function compareBackends(params: ComparisonParams): Promise<ComparisonResult> {
  const chain = params.chain ?? 'solana'
  const key = cacheKey(params)

  const cached = comparisonCache.get(key)
  if (cached) return cached

  const registry = getBackendRegistry()
  const entries = registry.getAllEntries()

  const comparisons: BackendComparison[] = []

  for (const entry of entries) {
    const { backend, enabled } = entry
    const capabilities = backend.getCapabilities() as unknown as Record<string, unknown>
    const suitable = isBackendSuitableForOperation(capabilities, params.operation)

    let available = false
    let costLamports = 0
    let latencyMs = 0

    if (enabled && suitable) {
      try {
        const availability = await backend.checkAvailability({
          chain: chain as any,
          sender: 'probe',
          recipient: 'probe',
          mint: null,
          amount: 1000000n,
          decimals: 9,
        })
        available = availability.available
        costLamports = availability.estimatedCost !== undefined
          ? Number(availability.estimatedCost)
          : 0
        latencyMs = availability.estimatedTime ?? 0
      } catch {
        available = false
      }
    }

    const score = available
      ? scoreBackend(costLamports, latencyMs, capabilities, params.prioritize)
      : 0

    comparisons.push({
      backend: backend.name,
      type: backend.type,
      available,
      costLamports,
      costSOL: (costLamports / 1e9).toFixed(9),
      latencyMs,
      latencyCategory: getLatencyCategory(latencyMs),
      privacyLevel: getPrivacyLevel(capabilities),
      capabilities: getCapabilityList(capabilities),
      score,
      recommended: false,
    })
  }

  // Sort by score descending
  comparisons.sort((a, b) => b.score - a.score)

  // Mark the top-scored as recommended
  if (comparisons.length > 0 && comparisons[0].score > 0) {
    comparisons[0].recommended = true
  }

  // Build recommendations from available backends only
  const available = comparisons.filter(c => c.available)
  const bestOverall = available[0]?.backend ?? 'none'
  const bestValue = [...available].sort((a, b) => a.costLamports - b.costLamports)[0]?.backend ?? 'none'
  const fastest = [...available].sort((a, b) => a.latencyMs - b.latencyMs)[0]?.backend ?? 'none'
  const mostPrivate = [...available].sort((a, b) => {
    return scorePrivacy(getCapabilitiesForBackend(b.backend)) - scorePrivacy(getCapabilitiesForBackend(a.backend))
  })[0]?.backend ?? 'none'

  const recommendation: ComparisonRecommendation = {
    best_overall: bestOverall,
    best_value: bestValue,
    fastest,
    most_private: mostPrivate,
    reasoning: `For ${params.operation} on ${chain}, ${bestOverall} provides the best overall balance of cost, speed, and privacy.`,
  }

  const result: ComparisonResult = {
    operation: params.operation,
    chain,
    comparisons,
    recommendation,
  }

  comparisonCache.set(key, result)
  return result
}

function getCapabilitiesForBackend(name: string): Record<string, unknown> {
  const registry = getBackendRegistry()
  const backend = registry.get(name)
  if (!backend) return {}
  return backend.getCapabilities() as unknown as Record<string, unknown>
}

// ─── Utility ────────────────────────────────────────────────────────────────

export function clearComparisonCache(): void {
  comparisonCache.clear()
}
