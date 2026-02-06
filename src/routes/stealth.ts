import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import {
  generateStealthMetaAddress,
  generateStealthAddress,
  checkStealthAddress,
  isEd25519Chain,
} from '@sip-protocol/sdk'
import type { StealthMetaAddress, HexString, ChainId } from '@sip-protocol/types'
import { validateRequest } from '../middleware/validation.js'

const router = Router()

// ─── Supported Chains ────────────────────────────────────────────────────────

// SDK-supported chains (matches @sip-protocol/sdk VALID_CHAIN_IDS)
// Ed25519 chains: 32-byte keys (64 hex chars)
// Secp256k1 chains: 33-byte compressed keys (66 hex chars)
const SUPPORTED_CHAINS = [
  'solana', 'near', 'aptos', 'sui',  // ed25519
  'ethereum', 'polygon', 'arbitrum', 'optimism', 'base',  // secp256k1 EVM
  'bitcoin', 'zcash',  // secp256k1 Bitcoin-like
  'cosmos', 'osmosis', 'injective', 'celestia', 'sei', 'dydx',  // secp256k1 Cosmos
] as const

// ─── Schemas ────────────────────────────────────────────────────────────────

// Hex validation
// - ed25519: 32-byte keys (64 hex chars) for Solana, NEAR, Aptos, Sui
// - secp256k1: 33-byte compressed keys (66 hex chars) for EVM, Cosmos, Bitcoin
const hexString32 = z.string().regex(/^0x[0-9a-fA-F]{64}$/, 'Must be 0x-prefixed 32-byte hex (ed25519)')
const hexStringAny = z.string().regex(/^0x[0-9a-fA-F]{64,66}$/, 'Must be 0x-prefixed 32-byte (ed25519) or 33-byte (secp256k1) hex')

const BATCH_MAX = 100

const chainEnum = z.enum(SUPPORTED_CHAINS)

const generateSchema = z.object({
  chain: chainEnum.default('solana'),
  label: z.string().optional(),
})

const batchGenerateSchema = z.object({
  chain: chainEnum.default('solana'),
  count: z.number().int().min(1).max(BATCH_MAX),
  label: z.string().optional(),
})

const deriveSchema = z.object({
  recipientMetaAddress: z.object({
    spendingKey: hexStringAny,
    viewingKey: hexStringAny,
    chain: chainEnum,
    label: z.string().optional(),
  }),
})

const checkSchema = z.object({
  stealthAddress: z.object({
    address: hexStringAny,
    ephemeralPublicKey: hexStringAny,
    viewTag: z.number().int().min(0).max(255),
  }),
  spendingPrivateKey: hexString32,  // Private keys are always 32 bytes
  viewingPrivateKey: hexString32,
  chain: chainEnum.default('solana'),
})

// ─── Routes ─────────────────────────────────────────────────────────────────

router.post(
  '/stealth/generate',
  validateRequest({ body: generateSchema }),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { chain, label } = req.body

      const result = generateStealthMetaAddress(chain as ChainId, label)

      res.json({
        success: true,
        data: {
          metaAddress: result.metaAddress,
          spendingPrivateKey: result.spendingPrivateKey,
          viewingPrivateKey: result.viewingPrivateKey,
          chain,
          curve: isEd25519Chain(chain) ? 'ed25519' : 'secp256k1',
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

router.post(
  '/stealth/derive',
  validateRequest({ body: deriveSchema }),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { recipientMetaAddress } = req.body

      const meta: StealthMetaAddress = {
        spendingKey: recipientMetaAddress.spendingKey as HexString,
        viewingKey: recipientMetaAddress.viewingKey as HexString,
        chain: recipientMetaAddress.chain as ChainId,
        label: recipientMetaAddress.label,
      }

      const result = generateStealthAddress(meta)

      res.json({
        success: true,
        data: {
          stealthAddress: result.stealthAddress,
          sharedSecret: result.sharedSecret,
          chain: recipientMetaAddress.chain,
          curve: isEd25519Chain(recipientMetaAddress.chain) ? 'ed25519' : 'secp256k1',
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

router.post(
  '/stealth/check',
  validateRequest({ body: checkSchema }),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { stealthAddress, spendingPrivateKey, viewingPrivateKey, chain } = req.body

      // Auto-detects curve from address length (64 hex = ed25519, 66 hex = secp256k1)
      const isOwner = checkStealthAddress(
        {
          address: stealthAddress.address as HexString,
          ephemeralPublicKey: stealthAddress.ephemeralPublicKey as HexString,
          viewTag: stealthAddress.viewTag,
        },
        spendingPrivateKey as HexString,
        viewingPrivateKey as HexString
      )

      // Detect curve from address length
      const addressHexLen = stealthAddress.address.slice(2).length
      const detectedCurve = addressHexLen === 64 ? 'ed25519' : 'secp256k1'

      res.json({
        success: true,
        data: {
          isOwner,
          chain,
          curve: detectedCurve,
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

// ─── Batch ──────────────────────────────────────────────────────────────────

router.post(
  '/stealth/generate/batch',
  validateRequest({ body: batchGenerateSchema }),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { chain, count, label } = req.body

      const results: Array<{
        index: number
        success: boolean
        data?: { metaAddress: unknown; spendingPrivateKey: unknown; viewingPrivateKey: unknown }
        error?: string
      }> = []

      for (let i = 0; i < count; i++) {
        try {
          const result = generateStealthMetaAddress(chain as ChainId, label)
          results.push({
            index: i,
            success: true,
            data: {
              metaAddress: result.metaAddress,
              spendingPrivateKey: result.spendingPrivateKey,
              viewingPrivateKey: result.viewingPrivateKey,
            },
          })
        } catch (err: unknown) {
          results.push({
            index: i,
            success: false,
            error: err instanceof Error ? err.message : 'Generation failed',
          })
        }
      }

      const succeeded = results.filter(r => r.success).length
      const failed = results.filter(r => !r.success).length

      res.json({
        success: true,
        data: {
          results,
          summary: { total: count, succeeded, failed },
          chain,
          curve: isEd25519Chain(chain) ? 'ed25519' : 'secp256k1',
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

export default router
