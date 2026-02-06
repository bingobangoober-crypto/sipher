import { Request, Response, NextFunction } from 'express'
import type { ApiKeyTier } from '../types/api-key.js'

/**
 * Middleware factory: restricts endpoint access to specific API key tiers.
 * Usage: requireTier('enterprise') or requireTier('pro', 'enterprise')
 */
export function requireTier(...allowed: ApiKeyTier[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const tier = req.apiKeyTier
    if (tier && allowed.includes(tier)) return next()

    res.status(403).json({
      success: false,
      error: {
        code: 'TIER_ACCESS_DENIED',
        message: `This endpoint requires ${allowed.join(' or ')} tier. Current: ${tier ?? 'unknown'}.`,
      },
    })
  }
}
