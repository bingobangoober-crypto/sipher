import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'
import { betaEndpoint, getBetaWarning } from '../middleware/beta.js'
import {
  encryptBallot,
  submitBallot,
  tallyVotes,
  getTally,
} from '../services/governance-provider.js'

const governanceBeta = betaEndpoint('Governance privacy uses mock tallying. Real ZK tally verification coming soon.')

const router = Router()

// ─── Schemas ────────────────────────────────────────────────────────────────

const hexString = z.string().regex(/^0x[0-9a-fA-F]+$/, '0x-prefixed hex string')
const tallyIdPattern = z.string().regex(/^tly_[0-9a-fA-F]{64}$/, 'Tally ID (tly_ + 64 hex chars)')

const encryptBallotSchema = z.object({
  proposalId: z.string().min(1).max(128),
  vote: z.enum(['yes', 'no', 'abstain']),
  voterSecret: hexString,
  stealthAddress: z.string().optional(),
})

const submitBallotSchema = z.object({
  proposalId: z.string().min(1).max(128),
  commitment: hexString,
  blindingFactor: hexString,
  nullifier: hexString,
  vote: z.enum(['yes', 'no', 'abstain']),
  stealthAddress: z.string().optional(),
})

const tallySchema = z.object({
  proposalId: z.string().min(1).max(128),
})

// ─── POST /governance/ballot/encrypt ────────────────────────────────────────

router.post(
  '/governance/ballot/encrypt',
  governanceBeta,
  validateRequest({ body: encryptBallotSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = encryptBallot(req.body)

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

// ─── POST /governance/ballot/submit ─────────────────────────────────────────

router.post(
  '/governance/ballot/submit',
  governanceBeta,
  idempotency,
  validateRequest({ body: submitBallotSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = submitBallot(req.body)

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

// ─── POST /governance/tally ─────────────────────────────────────────────────

router.post(
  '/governance/tally',
  governanceBeta,
  idempotency,
  validateRequest({ body: tallySchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = tallyVotes(req.body)

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

// ─── GET /governance/tally/:id ──────────────────────────────────────────────

router.get(
  '/governance/tally/:id',
  governanceBeta,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string
      const parsed = tallyIdPattern.safeParse(id)
      if (!parsed.success) {
        res.status(400).json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid tally ID format. Expected tly_ + 64 hex chars.',
          },
        })
        return
      }

      const tally = getTally(id)
      if (!tally) {
        res.status(404).json({
          success: false,
          error: {
            code: 'GOVERNANCE_TALLY_NOT_FOUND',
            message: `Tally not found: ${id}`,
          },
        })
        return
      }

      res.json({
        success: true,
        beta: true,
        warning: getBetaWarning(req),
        data: tally,
      })
    } catch (err) {
      next(err)
    }
  }
)

export default router
