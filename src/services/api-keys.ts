import { randomBytes, timingSafeEqual } from 'crypto'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import type { ApiKeyConfig, ApiKeyTier, ApiKeyUsage, TierLimits } from '../types/api-key.js'
import { TIER_LIMITS } from '../types/api-key.js'
import {
  isRedisConnected,
  redisIncr,
  redisExpire,
  redisGet,
  redisTtl,
} from './redis.js'

const DATA_DIR = process.env.DATA_DIR || join(process.cwd(), 'data')
const KEYS_FILE = join(DATA_DIR, 'api-keys.json')
const IS_TEST = process.env.NODE_ENV === 'test'

interface KeyStore {
  keys: Record<string, ApiKeyConfig>
  usage: Record<string, ApiKeyUsage>
}

let store: KeyStore = { keys: {}, usage: {} }
let initialized = false

function ensureDataDir(): void {
  if (IS_TEST) return // Don't create dirs in test mode
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
}

function loadStore(): void {
  if (IS_TEST) return // Don't load from file in test mode
  if (existsSync(KEYS_FILE)) {
    try {
      const data = readFileSync(KEYS_FILE, 'utf-8')
      store = JSON.parse(data)
    } catch {
      store = { keys: {}, usage: {} }
    }
  }
}

function saveStore(): void {
  if (IS_TEST) return // Don't save to file in test mode
  ensureDataDir()
  writeFileSync(KEYS_FILE, JSON.stringify(store, null, 2))
}

export function initApiKeyService(): void {
  if (initialized) return
  loadStore()
  initialized = true
}

export function generateKeyId(): string {
  return randomBytes(8).toString('hex')
}

export function generateApiKey(tier: ApiKeyTier): string {
  const prefix = tier === 'enterprise' ? 'sk_ent_' : tier === 'pro' ? 'sk_pro_' : 'sk_free_'
  return prefix + randomBytes(24).toString('hex')
}

function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  try {
    return timingSafeEqual(Buffer.from(a), Buffer.from(b))
  } catch {
    return false
  }
}

export function createApiKey(
  tier: ApiKeyTier,
  name: string,
  options?: { expiresAt?: string; metadata?: Record<string, unknown> }
): ApiKeyConfig {
  initApiKeyService()

  const id = generateKeyId()
  const key = generateApiKey(tier)
  const config: ApiKeyConfig = {
    id,
    key,
    tier,
    name,
    createdAt: new Date().toISOString(),
    expiresAt: options?.expiresAt,
    metadata: options?.metadata,
  }

  store.keys[id] = config
  saveStore()

  return config
}

export function getApiKeyById(id: string): ApiKeyConfig | null {
  initApiKeyService()
  return store.keys[id] || null
}

export function validateApiKey(key: string): ApiKeyConfig | null {
  initApiKeyService()

  for (const config of Object.values(store.keys)) {
    if (safeCompare(config.key, key)) {
      // Check if revoked
      if (config.revokedAt) return null

      // Check if expired
      if (config.expiresAt && new Date(config.expiresAt) < new Date()) {
        return null
      }

      return config
    }
  }

  return null
}

export function revokeApiKey(id: string): boolean {
  initApiKeyService()

  const config = store.keys[id]
  if (!config) return false

  config.revokedAt = new Date().toISOString()
  saveStore()

  return true
}

export function listApiKeys(): ApiKeyConfig[] {
  initApiKeyService()
  return Object.values(store.keys).map(k => ({
    ...k,
    key: k.key.slice(0, 12) + '...' + k.key.slice(-4), // Mask key
  }))
}

export function getTierLimits(tier: ApiKeyTier): TierLimits {
  return TIER_LIMITS[tier]
}

// Usage tracking — Redis with in-memory fallback
const usageCache = new Map<string, { count: number; windowStart: number }>()
const RATE_LIMIT_WINDOW_SECONDS = 3600 // 1 hour

function getRedisKey(keyId: string): string {
  return `sipher:ratelimit:${keyId}`
}

// Track usage — async for Redis, sync fallback for in-memory
export async function trackUsageAsync(keyId: string): Promise<void> {
  if (isRedisConnected()) {
    const redisKey = getRedisKey(keyId)
    const count = await redisIncr(redisKey)
    if (count === 1) {
      // First request in window, set expiry
      await redisExpire(redisKey, RATE_LIMIT_WINDOW_SECONDS)
    }
    return
  }

  // Fallback to in-memory
  trackUsage(keyId)
}

// Sync version for backwards compatibility
export function trackUsage(keyId: string): void {
  const now = Date.now()
  const hourMs = 60 * 60 * 1000

  let usage = usageCache.get(keyId)

  if (!usage || now - usage.windowStart > hourMs) {
    usage = { count: 0, windowStart: now }
  }

  usage.count++
  usageCache.set(keyId, usage)

  // Fire-and-forget Redis update if connected
  if (isRedisConnected()) {
    trackUsageAsync(keyId).catch(() => {})
  }
}

export function getUsage(keyId: string): { count: number; windowStart: number } | null {
  return usageCache.get(keyId) || null
}

// Async version for Redis
export async function getUsageAsync(keyId: string): Promise<{ count: number; ttl: number } | null> {
  if (isRedisConnected()) {
    const redisKey = getRedisKey(keyId)
    const [countStr, ttl] = await Promise.all([
      redisGet(redisKey),
      redisTtl(redisKey),
    ])
    if (countStr) {
      return { count: parseInt(countStr, 10), ttl }
    }
  }
  return null
}

export async function isRateLimitedAsync(keyId: string, tier: ApiKeyTier): Promise<boolean> {
  const limits = getTierLimits(tier)

  if (isRedisConnected()) {
    const redisKey = getRedisKey(keyId)
    const countStr = await redisGet(redisKey)
    if (!countStr) return false
    return parseInt(countStr, 10) >= limits.requestsPerHour
  }

  // Fallback to in-memory
  return isRateLimited(keyId, tier)
}

// Sync version for backwards compatibility
export function isRateLimited(keyId: string, tier: ApiKeyTier): boolean {
  const usage = usageCache.get(keyId)
  if (!usage) return false

  const limits = getTierLimits(tier)
  const now = Date.now()
  const hourMs = 60 * 60 * 1000

  // Window expired, not limited
  if (now - usage.windowStart > hourMs) return false

  return usage.count >= limits.requestsPerHour
}

export async function getRemainingRequestsAsync(keyId: string, tier: ApiKeyTier): Promise<number> {
  const limits = getTierLimits(tier)

  if (isRedisConnected()) {
    const redisKey = getRedisKey(keyId)
    const countStr = await redisGet(redisKey)
    if (!countStr) return limits.requestsPerHour
    const count = parseInt(countStr, 10)
    return Math.max(0, limits.requestsPerHour - count)
  }

  // Fallback to in-memory
  return getRemainingRequests(keyId, tier)
}

// Sync version for backwards compatibility
export function getRemainingRequests(keyId: string, tier: ApiKeyTier): number {
  const usage = usageCache.get(keyId)
  const limits = getTierLimits(tier)

  if (!usage) return limits.requestsPerHour

  const now = Date.now()
  const hourMs = 60 * 60 * 1000

  if (now - usage.windowStart > hourMs) return limits.requestsPerHour

  return Math.max(0, limits.requestsPerHour - usage.count)
}

// Check if endpoint is allowed for tier
export function isEndpointAllowed(tier: ApiKeyTier, path: string): boolean {
  const limits = getTierLimits(tier)

  if (limits.allowedEndpoints === '*') return true

  return limits.allowedEndpoints.some(pattern => {
    if (pattern.endsWith('/*')) {
      const prefix = pattern.slice(0, -1)
      return path.startsWith(prefix)
    }
    return path === pattern
  })
}

export function updateApiKeyMetadata(id: string, metadata: Record<string, unknown>): boolean {
  initApiKeyService()
  const config = store.keys[id]
  if (!config) return false
  config.metadata = { ...config.metadata, ...metadata }
  saveStore()
  return true
}

// Reset for testing
export function resetApiKeyService(): void {
  store = { keys: {}, usage: {} }
  usageCache.clear()
  initialized = false
}
