import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'
import { betaEndpoint, getBetaWarning } from '../middleware/beta.js'
import { ErrorCode } from '../errors/codes.js'
import { submitBundle, getBundleStatus, isJitoLive } from '../services/jito-provider.js'

const jitoBeta = betaEndpoint(
  isJitoLive()
    ? 'Connected to Jito Block Engine. Bundle landing is best-effort.'
    : 'Jito Gas Abstraction uses a mock block engine. Set JITO_BLOCK_ENGINE_URL to enable real bundles.'
)

const router = Router()

// ─── Schemas ────────────────────────────────────────────────────────────────

const relaySchema = z.object({
  transactions: z.array(z.string().min(1)).min(1).max(5),
  tipLamports: z.string().regex(/^[1-9]\d*$/, 'Positive integer string').default('10000'),
  gasSponsorship: z.boolean().default(false),
})

// ─── POST /jito/relay ───────────────────────────────────────────────────────

router.post(
  '/jito/relay',
  jitoBeta,
  idempotency,
  validateRequest({ body: relaySchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { transactions, tipLamports, gasSponsorship } = req.body

      // Tip minimum: 1000 lamports
      if (parseInt(tipLamports, 10) < 1000) {
        res.status(400).json({
          success: false,
          error: {
            code: ErrorCode.JITO_INVALID_TRANSACTION,
            message: 'Tip must be at least 1000 lamports',
          },
        })
        return
      }

      // Gas sponsorship requires enterprise tier
      if (gasSponsorship && req.apiKeyTier !== 'enterprise') {
        res.status(403).json({
          success: false,
          error: {
            code: ErrorCode.TIER_ACCESS_DENIED,
            message: 'Gas sponsorship requires enterprise tier. Current: ' + (req.apiKeyTier ?? 'unknown') + '.',
          },
        })
        return
      }

      const result = await submitBundle({ transactions, tipLamports, gasSponsorship })

      res.json({
        success: true,
        beta: true,
        warning: getBetaWarning(req),
        data: result,
      })
    } catch (err) {
      next(err)
    }
  },
)

// ─── GET /jito/bundle/:id ───────────────────────────────────────────────────

router.get(
  '/jito/bundle/:id',
  jitoBeta,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string

      // Validate format
      if (!/^jito_[0-9a-fA-F]{64}$/.test(id)) {
        res.status(400).json({
          success: false,
          error: {
            code: ErrorCode.JITO_INVALID_TRANSACTION,
            message: 'Invalid bundle ID format. Expected jito_ + 64 hex characters.',
          },
        })
        return
      }

      const result = await getBundleStatus(id)

      if (!result) {
        res.status(404).json({
          success: false,
          error: {
            code: ErrorCode.JITO_BUNDLE_NOT_FOUND,
            message: `Bundle not found: ${id}`,
          },
        })
        return
      }

      res.json({
        success: true,
        beta: true,
        warning: getBetaWarning(req),
        data: result,
      })
    } catch (err) {
      next(err)
    }
  },
)

export default router
