import { Request, Response, NextFunction } from 'express'
import { LRUCache } from 'lru-cache'

interface CachedResponse {
  status: number
  body: unknown
  headers: Record<string, string>
  timestamp: number
}

const cache = new LRUCache<string, CachedResponse>({
  max: 10_000,
  ttl: 24 * 60 * 60 * 1000, // 24 hours
})

const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

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

  const cached = cache.get(key)
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

  res.json = function (body: unknown) {
    cache.set(key, {
      status: res.statusCode,
      body,
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
      timestamp: Date.now(),
    })
    return originalJson(body)
  } as any

  next()
}

// Export for testing
export function clearIdempotencyCache() {
  cache.clear()
}

export function getIdempotencyCacheSize(): number {
  return cache.size
}
