import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { hexToBytes } from '@noble/hashes/utils'
import type { HexString } from '@sip-protocol/types'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'
import { getProofProvider } from '../services/proof-provider.js'
import { ErrorCode } from '../errors/codes.js'

const router = Router()

// ─── Shared Schema Helpers ──────────────────────────────────────────────────

const hex32 = z.string().regex(/^0x[0-9a-fA-F]{64}$/, '0x-prefixed 32-byte hex string')
const hexString = z.string().regex(/^0x[0-9a-fA-F]+$/, '0x-prefixed hex string')
const positiveIntString = z.string().regex(/^[1-9]\d*$/, 'Positive integer string')
const nonNegativeIntString = z.string().regex(/^[0-9]+$/, 'Non-negative integer string')

// ─── Generate Schemas ───────────────────────────────────────────────────────

const fundingGenerateSchema = z.object({
  balance: nonNegativeIntString,
  minimumRequired: nonNegativeIntString,
  blindingFactor: hex32,
  assetId: z.string().min(1),
  userAddress: z.string().min(1),
  ownershipSignature: hexString,
})

const validityGenerateSchema = z.object({
  intentHash: hex32,
  senderAddress: z.string().min(1),
  senderBlinding: hex32,
  senderSecret: hex32,
  authorizationSignature: hexString,
  nonce: hex32,
  timestamp: z.number().int().nonnegative(),
  expiry: z.number().int().positive(),
})

const fulfillmentGenerateSchema = z.object({
  intentHash: hex32,
  outputAmount: nonNegativeIntString,
  outputBlinding: hex32,
  minOutputAmount: nonNegativeIntString,
  recipientStealth: hex32,
  solverId: z.string().min(1),
  solverSecret: hex32,
  oracleAttestation: z.object({
    recipient: hex32,
    amount: nonNegativeIntString,
    txHash: hex32,
    blockNumber: nonNegativeIntString,
    signature: hexString,
  }),
  fulfillmentTime: z.number().int().nonnegative(),
  expiry: z.number().int().positive(),
})

// ─── Verify Schemas ─────────────────────────────────────────────────────────

const fundingVerifySchema = z.object({
  type: z.literal('funding'),
  proof: hexString,
  publicInputs: z.array(hexString),
})

const validityVerifySchema = z.object({
  type: z.literal('validity'),
  proof: hexString,
  publicInputs: z.array(hexString),
})

const fulfillmentVerifySchema = z.object({
  type: z.literal('fulfillment'),
  proof: hexString,
  publicInputs: z.array(hexString),
})

// ─── Helpers ────────────────────────────────────────────────────────────────

function toBytes(hex: string): Uint8Array {
  return hexToBytes(hex.slice(2))
}

// ─── Funding Proof ──────────────────────────────────────────────────────────

router.post(
  '/proofs/funding/generate',
  idempotency,
  validateRequest({ body: fundingGenerateSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provider = await getProofProvider()
      const { balance, minimumRequired, blindingFactor, assetId, userAddress, ownershipSignature } = req.body

      const result = await provider.generateFundingProof({
        balance: BigInt(balance),
        minimumRequired: BigInt(minimumRequired),
        blindingFactor: toBytes(blindingFactor),
        assetId,
        userAddress,
        ownershipSignature: toBytes(ownershipSignature),
      })

      res.json({
        success: true,
        data: {
          proof: result.proof,
          publicInputs: result.publicInputs,
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

router.post(
  '/proofs/funding/verify',
  validateRequest({ body: fundingVerifySchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provider = await getProofProvider()
      const { type, proof, publicInputs } = req.body

      const valid = await provider.verifyProof({
        type,
        proof: proof as HexString,
        publicInputs: publicInputs as HexString[],
      })

      res.json({
        success: true,
        data: { valid },
      })
    } catch (err) {
      next(err)
    }
  }
)

// ─── Validity Proof ─────────────────────────────────────────────────────────

router.post(
  '/proofs/validity/generate',
  idempotency,
  validateRequest({ body: validityGenerateSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provider = await getProofProvider()
      const { intentHash, senderAddress, senderBlinding, senderSecret, authorizationSignature, nonce, timestamp, expiry } = req.body

      const result = await provider.generateValidityProof({
        intentHash: intentHash as HexString,
        senderAddress,
        senderBlinding: toBytes(senderBlinding),
        senderSecret: toBytes(senderSecret),
        authorizationSignature: toBytes(authorizationSignature),
        nonce: toBytes(nonce),
        timestamp,
        expiry,
      })

      res.json({
        success: true,
        data: {
          proof: result.proof,
          publicInputs: result.publicInputs,
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

router.post(
  '/proofs/validity/verify',
  validateRequest({ body: validityVerifySchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provider = await getProofProvider()
      const { type, proof, publicInputs } = req.body

      const valid = await provider.verifyProof({
        type,
        proof: proof as HexString,
        publicInputs: publicInputs as HexString[],
      })

      res.json({
        success: true,
        data: { valid },
      })
    } catch (err) {
      next(err)
    }
  }
)

// ─── Fulfillment Proof ──────────────────────────────────────────────────────

router.post(
  '/proofs/fulfillment/generate',
  idempotency,
  validateRequest({ body: fulfillmentGenerateSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provider = await getProofProvider()
      const { intentHash, outputAmount, outputBlinding, minOutputAmount, recipientStealth, solverId, solverSecret, oracleAttestation, fulfillmentTime, expiry } = req.body

      const result = await provider.generateFulfillmentProof({
        intentHash: intentHash as HexString,
        outputAmount: BigInt(outputAmount),
        outputBlinding: toBytes(outputBlinding),
        minOutputAmount: BigInt(minOutputAmount),
        recipientStealth: recipientStealth as HexString,
        solverId,
        solverSecret: toBytes(solverSecret),
        oracleAttestation: {
          recipient: oracleAttestation.recipient as HexString,
          amount: BigInt(oracleAttestation.amount),
          txHash: oracleAttestation.txHash as HexString,
          blockNumber: BigInt(oracleAttestation.blockNumber),
          signature: toBytes(oracleAttestation.signature),
        },
        fulfillmentTime,
        expiry,
      })

      res.json({
        success: true,
        data: {
          proof: result.proof,
          publicInputs: result.publicInputs,
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

router.post(
  '/proofs/fulfillment/verify',
  validateRequest({ body: fulfillmentVerifySchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provider = await getProofProvider()
      const { type, proof, publicInputs } = req.body

      const valid = await provider.verifyProof({
        type,
        proof: proof as HexString,
        publicInputs: publicInputs as HexString[],
      })

      res.json({
        success: true,
        data: { valid },
      })
    } catch (err) {
      next(err)
    }
  }
)

export default router
