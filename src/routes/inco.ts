import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'
import { betaEndpoint, getBetaWarning } from '../middleware/beta.js'
import {
  encryptValue,
  computeOnCiphertexts,
  decryptResult,
  getSupportedSchemes,
  getSupportedOperations,
} from '../services/inco-provider.js'

const incoBeta = betaEndpoint('Inco FHE uses a mock provider. Real Inco network integration coming soon.')

const router = Router()

// ─── Schemas ────────────────────────────────────────────────────────────────

const hexString = z.string().regex(/^0x[0-9a-fA-F]+$/, '0x-prefixed hex string')
const computationIdPattern = z.string().regex(/^inc_[0-9a-fA-F]{64}$/, 'Inco computation ID (inc_ + 64 hex chars)')

const encryptSchema = z.object({
  plaintext: z.union([z.number(), z.string()]),
  scheme: z.enum(['fhew', 'tfhe']),
  label: z.string().optional(),
})

const computeSchema = z.object({
  operation: z.enum(['add', 'mul', 'not', 'compare_eq', 'compare_lt']),
  ciphertexts: z.array(hexString).min(1).max(3),
  scheme: z.enum(['fhew', 'tfhe']).default('tfhe'),
})

const decryptSchema = z.object({
  computationId: computationIdPattern,
})

// ─── POST /inco/encrypt ─────────────────────────────────────────────────────

router.post(
  '/inco/encrypt',
  incoBeta,
  validateRequest({ body: encryptSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { plaintext, scheme, label } = req.body

      const result = encryptValue({ plaintext, scheme, label })

      res.json({
        success: true,
        beta: true,
        warning: getBetaWarning(req),
        data: {
          ...result,
          supportedSchemes: getSupportedSchemes(),
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

// ─── POST /inco/compute ─────────────────────────────────────────────────────

router.post(
  '/inco/compute',
  incoBeta,
  idempotency,
  validateRequest({ body: computeSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { operation, ciphertexts, scheme } = req.body

      const result = computeOnCiphertexts({ operation, ciphertexts, scheme })

      res.json({
        success: true,
        beta: true,
        warning: getBetaWarning(req),
        data: {
          ...result,
          supportedOperations: getSupportedOperations(),
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

// ─── POST /inco/decrypt ─────────────────────────────────────────────────────

router.post(
  '/inco/decrypt',
  incoBeta,
  validateRequest({ body: decryptSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { computationId } = req.body
      const result = decryptResult(computationId)

      res.json({
        success: true,
        beta: true,
        warning: getBetaWarning(req),
        data: result,
      })
    } catch (err) {
      next(err)
    }
  }
)

export default router
