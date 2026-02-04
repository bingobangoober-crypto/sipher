import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import {
  generateViewingKey,
  encryptForViewing,
  decryptWithViewing,
} from '@sip-protocol/sdk'
import type { ViewingKey, TransactionData } from '@sip-protocol/sdk'
import type { EncryptedTransaction } from '@sip-protocol/types'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'

const router = Router()

// ─── Schemas ────────────────────────────────────────────────────────────────

const generateSchema = z.object({
  path: z.string().default('m/0'),
  label: z.string().optional(),
})

const discloseSchema = z.object({
  viewingKey: z.object({
    key: z.string().regex(/^0x[0-9a-fA-F]{64}$/),
    path: z.string(),
    hash: z.string().regex(/^0x[0-9a-fA-F]{64}$/),
  }),
  transactionData: z.object({
    sender: z.string().min(1),
    recipient: z.string().min(1),
    amount: z.string().min(1),
    timestamp: z.number(),
  }),
})

// ─── Routes ─────────────────────────────────────────────────────────────────

router.post(
  '/viewing-key/generate',
  validateRequest({ body: generateSchema }),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { path } = req.body

      const viewingKey = generateViewingKey(path)

      res.json({
        success: true,
        data: {
          key: viewingKey.key,
          path: viewingKey.path,
          hash: viewingKey.hash,
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

router.post(
  '/viewing-key/disclose',
  idempotency,
  validateRequest({ body: discloseSchema }),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { viewingKey, transactionData } = req.body

      const vk: ViewingKey = {
        key: viewingKey.key,
        path: viewingKey.path,
        hash: viewingKey.hash,
      }

      const txData: TransactionData = {
        sender: transactionData.sender,
        recipient: transactionData.recipient,
        amount: transactionData.amount,
        timestamp: transactionData.timestamp,
      }

      const encrypted = encryptForViewing(txData, vk)

      res.json({
        success: true,
        data: {
          ciphertext: encrypted.ciphertext,
          nonce: encrypted.nonce,
          viewingKeyHash: encrypted.viewingKeyHash,
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

// ─── Decrypt ────────────────────────────────────────────────────────────────

const decryptSchema = z.object({
  viewingKey: z.object({
    key: z.string().regex(/^0x[0-9a-fA-F]{64}$/),
    path: z.string(),
    hash: z.string().regex(/^0x[0-9a-fA-F]{64}$/),
  }),
  encrypted: z.object({
    ciphertext: z.string().regex(/^0x[0-9a-fA-F]+$/),
    nonce: z.string().regex(/^0x[0-9a-fA-F]+$/),
    viewingKeyHash: z.string().regex(/^0x[0-9a-fA-F]{64}$/),
  }),
})

router.post(
  '/viewing-key/decrypt',
  validateRequest({ body: decryptSchema }),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { viewingKey, encrypted } = req.body

      const vk: ViewingKey = {
        key: viewingKey.key,
        path: viewingKey.path,
        hash: viewingKey.hash,
      }

      const enc: EncryptedTransaction = {
        ciphertext: encrypted.ciphertext,
        nonce: encrypted.nonce,
        viewingKeyHash: encrypted.viewingKeyHash,
      }

      const decrypted = decryptWithViewing(enc, vk)

      res.json({
        success: true,
        data: {
          sender: decrypted.sender,
          recipient: decrypted.recipient,
          amount: decrypted.amount,
          timestamp: decrypted.timestamp,
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

export default router
