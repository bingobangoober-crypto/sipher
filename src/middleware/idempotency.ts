import { Request, Response, NextFunction } from 'express'
import { LRUCache } from 'lru-cache'
import {
  isRedisConnected,
  redisGet,
  redisSet,
} from '../services/redis.js'
import { CACHE_MAX_LARGE, ONE_DAY_MS, ONE_DAY_SECONDS } from '../constants.js'

interface CachedResponse {
  status: number
  body: unknown
  headers: Record<string, string>
  timestamp: number
}

// In-memory fallback cache
const memoryCache = new LRUCache<string, CachedResponse>({
  max: CACHE_MAX_LARGE,
  ttl: ONE_DAY_MS,
})

const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const REDIS_KEY_PREFIX = 'sipher:idempotency:'
const REDIS_TTL_SECONDS = ONE_DAY_SECONDS

function getRedisKey(key: string): string {
  return `${REDIS_KEY_PREFIX}${key}`
}

async function getCachedResponse(key: string): Promise<CachedResponse | null> {
  // Try Redis first
  if (isRedisConnected()) {
    const redisKey = getRedisKey(key)
    const data = await redisGet(redisKey)
    if (data) {
      try {
        return JSON.parse(data) as CachedResponse
      } catch {
        // Invalid JSON, ignore
      }
    }
  }

  // Fallback to memory cache
  return memoryCache.get(key) || null
}

async function setCachedResponse(key: string, response: CachedResponse): Promise<void> {
  // Try Redis first
  if (isRedisConnected()) {
    const redisKey = getRedisKey(key)
    await redisSet(redisKey, JSON.stringify(response), REDIS_TTL_SECONDS)
  }

  // Always update memory cache as fallback
  memoryCache.set(key, response)
}

export function idempotency(req: Request, res: Response, next: NextFunction) {
  const key = req.headers['idempotency-key']

  if (!key || typeof key !== 'string') {
    return next()
  }

  if (!UUID_V4_REGEX.test(key)) {
    res.status(400).json({
      success: false,
      error: {
        code: 'INVALID_IDEMPOTENCY_KEY',
        message: 'Idempotency-Key must be a valid UUID v4',
      },
    })
    return
  }

  // Check cache asynchronously
  getCachedResponse(key)
    .then((cached) => {
      if (cached) {
        res.set('Idempotency-Replayed', 'true')
        for (const [h, v] of Object.entries(cached.headers)) {
          res.set(h, v)
        }
        res.status(cached.status).json(cached.body)
        return
      }

      // Intercept the response to cache it
      const originalJson = res.json.bind(res)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- overriding Express res.json signature
      ;(res as any).json = function (body: unknown) {
        const response: CachedResponse = {
          status: res.statusCode,
          body,
          headers: {
            'content-type': 'application/json; charset=utf-8',
          },
          timestamp: Date.now(),
        }

        // Cache asynchronously (fire-and-forget)
        setCachedResponse(key, response).catch(() => {})

        return originalJson(body)
      }

      next()
    })
    .catch(() => {
      // On error, proceed without idempotency
      next()
    })
}

// Export for testing
export function clearIdempotencyCache() {
  memoryCache.clear()
}

export function getIdempotencyCacheSize(): number {
  return memoryCache.size
}
