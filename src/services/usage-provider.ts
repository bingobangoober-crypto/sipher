import { LRUCache } from 'lru-cache'
import { redisIncr, redisGet, redisExpire, isRedisConnected } from './redis.js'
import type { ApiKeyTier, OperationCategory, DailyQuotas } from '../types/api-key.js'
import { DAILY_QUOTAS } from '../types/api-key.js'
import { logger } from '../logger.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface UsageEntry {
  count: number
  date: string // YYYY-MM-DD
}

export interface DailyUsageResult {
  date: string
  tier: ApiKeyTier
  total: number
  quotaTotal: number
  categories: Record<string, { count: number; quota: number }>
}

// ─── In-Memory Fallback (LRU) ──────────────────────────────────────────────

const usageCache = new LRUCache<string, number>({
  max: 50_000,
  ttl: 24 * 60 * 60 * 1000, // 24h
})

// ─── Helpers ────────────────────────────────────────────────────────────────

function todayUTC(): string {
  return new Date().toISOString().slice(0, 10)
}

function secondsUntilMidnightUTC(): number {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setUTCDate(midnight.getUTCDate() + 1)
  midnight.setUTCHours(0, 0, 0, 0)
  return Math.ceil((midnight.getTime() - now.getTime()) / 1000)
}

function redisKey(apiKey: string, category: string, date: string): string {
  return `usage:${apiKey}:${category}:${date}`
}

function memKey(apiKey: string, category: string, date: string): string {
  return `${apiKey}:${category}:${date}`
}

function totalKey(apiKey: string, date: string): string {
  return `${apiKey}:__total__:${date}`
}

// ─── Core Operations ────────────────────────────────────────────────────────

export async function trackUsage(
  apiKey: string,
  category: OperationCategory,
): Promise<void> {
  const date = todayUTC()

  if (isRedisConnected()) {
    try {
      const catKey = redisKey(apiKey, category, date)
      const totalRedisKey = redisKey(apiKey, '__total__', date)
      const ttl = secondsUntilMidnightUTC()

      await redisIncr(catKey)
      await redisExpire(catKey, ttl)
      await redisIncr(totalRedisKey)
      await redisExpire(totalRedisKey, ttl)
      return
    } catch (err) {
      logger.warn({ err }, 'Redis usage tracking failed, falling back to memory')
    }
  }

  // In-memory fallback
  const catMem = memKey(apiKey, category, date)
  const totalMem = totalKey(apiKey, date)
  usageCache.set(catMem, (usageCache.get(catMem) ?? 0) + 1)
  usageCache.set(totalMem, (usageCache.get(totalMem) ?? 0) + 1)
}

export async function getUsage(
  apiKey: string,
  category: OperationCategory,
): Promise<UsageEntry> {
  const date = todayUTC()

  if (isRedisConnected()) {
    try {
      const val = await redisGet(redisKey(apiKey, category, date))
      return { count: val ? parseInt(val, 10) : 0, date }
    } catch {
      // fallthrough to memory
    }
  }

  const count = usageCache.get(memKey(apiKey, category, date)) ?? 0
  return { count, date }
}

export async function checkQuota(
  apiKey: string,
  category: OperationCategory,
  tier: ApiKeyTier,
): Promise<{ allowed: boolean; current: number; limit: number; resetAt: string }> {
  const date = todayUTC()
  const quotas: DailyQuotas = DAILY_QUOTAS[tier]

  // Check total daily usage
  let totalCount = 0
  let categoryCount = 0

  if (isRedisConnected()) {
    try {
      const totalVal = await redisGet(redisKey(apiKey, '__total__', date))
      const catVal = await redisGet(redisKey(apiKey, category, date))
      totalCount = totalVal ? parseInt(totalVal, 10) : 0
      categoryCount = catVal ? parseInt(catVal, 10) : 0
    } catch {
      // fallthrough
      totalCount = usageCache.get(totalKey(apiKey, date)) ?? 0
      categoryCount = usageCache.get(memKey(apiKey, category, date)) ?? 0
    }
  } else {
    totalCount = usageCache.get(totalKey(apiKey, date)) ?? 0
    categoryCount = usageCache.get(memKey(apiKey, category, date)) ?? 0
  }

  // Check both total and per-category limits
  const totalExceeded = totalCount >= quotas.totalPerDay
  const categoryExceeded = categoryCount >= quotas.perCategoryPerDay

  const midnight = new Date()
  midnight.setUTCDate(midnight.getUTCDate() + 1)
  midnight.setUTCHours(0, 0, 0, 0)

  if (totalExceeded) {
    return {
      allowed: false,
      current: totalCount,
      limit: quotas.totalPerDay,
      resetAt: midnight.toISOString(),
    }
  }

  if (categoryExceeded) {
    return {
      allowed: false,
      current: categoryCount,
      limit: quotas.perCategoryPerDay,
      resetAt: midnight.toISOString(),
    }
  }

  return {
    allowed: true,
    current: totalCount,
    limit: quotas.totalPerDay,
    resetAt: midnight.toISOString(),
  }
}

const ALL_CATEGORIES: OperationCategory[] = [
  'stealth', 'commitment', 'transfer', 'scan', 'viewing_key',
  'proof', 'privacy', 'compute', 'swap', 'governance',
  'compliance', 'session', 'jito',
]

export async function getDailyUsage(
  apiKey: string,
  tier: ApiKeyTier,
): Promise<DailyUsageResult> {
  const date = todayUTC()
  const quotas = DAILY_QUOTAS[tier]

  const categories: Record<string, { count: number; quota: number }> = {}
  let total = 0

  for (const cat of ALL_CATEGORIES) {
    const { count } = await getUsage(apiKey, cat)
    categories[cat] = { count, quota: quotas.perCategoryPerDay }
    total += count
  }

  return {
    date,
    tier,
    total,
    quotaTotal: quotas.totalPerDay,
    categories,
  }
}

// ─── Reset (for tests) ─────────────────────────────────────────────────────

export function resetUsageProvider(): void {
  usageCache.clear()
}
