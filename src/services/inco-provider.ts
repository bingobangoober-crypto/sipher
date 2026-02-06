import { keccak_256 } from '@noble/hashes/sha3'
import { bytesToHex } from '@noble/hashes/utils'
import { LRUCache } from 'lru-cache'

// ─── Constants ──────────────────────────────────────────────────────────────

const DOMAIN_TAG = new TextEncoder().encode('SIPHER-INCO-FHE')

export const SUPPORTED_SCHEMES: Record<string, { keySize: number; description: string }> = {
  fhew: { keySize: 2048, description: 'FHEW scheme — fast boolean/small-integer operations' },
  tfhe: { keySize: 4096, description: 'TFHE scheme — general-purpose fully homomorphic encryption' },
}

export const SUPPORTED_OPERATIONS: Record<string, { operands: number; noiseCost: number; description: string }> = {
  add: { operands: 2, noiseCost: 5, description: 'Homomorphic addition of two ciphertexts' },
  mul: { operands: 2, noiseCost: 15, description: 'Homomorphic multiplication of two ciphertexts' },
  not: { operands: 1, noiseCost: 3, description: 'Homomorphic bitwise NOT of a ciphertext' },
  compare_eq: { operands: 2, noiseCost: 8, description: 'Homomorphic equality comparison' },
  compare_lt: { operands: 2, noiseCost: 8, description: 'Homomorphic less-than comparison' },
}

const INITIAL_NOISE_BUDGET = 100

// ─── Types ──────────────────────────────────────────────────────────────────

export interface EncryptionEntry {
  id: string
  scheme: string
  ciphertext: string // hex
  noiseBudget: number
  label?: string
  createdAt: number
}

export interface ComputationEntry {
  id: string
  operation: string
  scheme: string
  operandCount: number
  resultCiphertext: string // hex
  noiseBudgetRemaining: number
  createdAt: number
}

export interface EncryptParams {
  plaintext: number | string
  scheme: string
  label?: string
}

export interface ComputeParams {
  operation: string
  ciphertexts: string[] // hex strings
  scheme?: string
}

export interface EncryptResult {
  encryptionId: string
  ciphertext: string
  scheme: string
  noiseBudget: number
  label?: string
}

export interface ComputeResult {
  computationId: string
  operation: string
  scheme: string
  operandCount: number
  resultCiphertext: string
  noiseBudgetRemaining: number
  status: 'completed'
}

export interface DecryptResult {
  computationId: string
  operation: string
  decryptedOutput: string
  verificationHash: string
}

// ─── Caches ─────────────────────────────────────────────────────────────────

const encryptionCache = new LRUCache<string, EncryptionEntry>({
  max: 5000,
  ttl: 60 * 60 * 1000, // 1 hour
})

const computationCache = new LRUCache<string, ComputationEntry>({
  max: 5000,
  ttl: 60 * 60 * 1000, // 1 hour
})

// ─── Helper ─────────────────────────────────────────────────────────────────

function hashWithDomain(suffix: string): string {
  const suffixBytes = new TextEncoder().encode(suffix)
  const input = new Uint8Array(DOMAIN_TAG.length + suffixBytes.length)
  input.set(DOMAIN_TAG)
  input.set(suffixBytes, DOMAIN_TAG.length)
  return bytesToHex(keccak_256(input))
}

// ─── Encrypt Value ──────────────────────────────────────────────────────────

export function encryptValue(params: EncryptParams): EncryptResult {
  const { plaintext, scheme, label } = params

  if (!SUPPORTED_SCHEMES[scheme]) {
    const err = new Error(`Unsupported scheme: ${scheme}. Supported: ${Object.keys(SUPPORTED_SCHEMES).join(', ')}`)
    err.name = 'IncoEncryptionError'
    throw err
  }

  const now = Date.now()
  const encryptionId = 'inc_' + hashWithDomain(String(plaintext) + scheme + now.toString())
  const ciphertext = '0x' + hashWithDomain('CIPHERTEXT' + encryptionId)

  const entry: EncryptionEntry = {
    id: encryptionId,
    scheme,
    ciphertext,
    noiseBudget: INITIAL_NOISE_BUDGET,
    label,
    createdAt: now,
  }
  encryptionCache.set(encryptionId, entry)

  return {
    encryptionId,
    ciphertext,
    scheme,
    noiseBudget: INITIAL_NOISE_BUDGET,
    ...(label ? { label } : {}),
  }
}

// ─── Compute on Ciphertexts ─────────────────────────────────────────────────

export function computeOnCiphertexts(params: ComputeParams): ComputeResult {
  const { operation, ciphertexts, scheme = 'tfhe' } = params

  const op = SUPPORTED_OPERATIONS[operation]
  if (!op) {
    const err = new Error(`Unsupported operation: ${operation}. Supported: ${Object.keys(SUPPORTED_OPERATIONS).join(', ')}`)
    err.name = 'IncoComputationError'
    throw err
  }

  if (ciphertexts.length !== op.operands) {
    const err = new Error(`Operation '${operation}' requires exactly ${op.operands} operand(s), got ${ciphertexts.length}`)
    err.name = 'IncoComputationError'
    throw err
  }

  const now = Date.now()
  const computationId = 'inc_' + hashWithDomain(operation + ciphertexts.join('') + now.toString())
  const resultCiphertext = '0x' + hashWithDomain('RESULT' + computationId)
  const noiseBudgetRemaining = INITIAL_NOISE_BUDGET - op.noiseCost

  const entry: ComputationEntry = {
    id: computationId,
    operation,
    scheme,
    operandCount: ciphertexts.length,
    resultCiphertext,
    noiseBudgetRemaining,
    createdAt: now,
  }
  computationCache.set(computationId, entry)

  return {
    computationId,
    operation,
    scheme,
    operandCount: ciphertexts.length,
    resultCiphertext,
    noiseBudgetRemaining,
    status: 'completed',
  }
}

// ─── Decrypt Result ─────────────────────────────────────────────────────────

export function decryptResult(computationId: string): DecryptResult {
  const entry = computationCache.get(computationId)
  if (!entry) {
    const err = new Error(`Computation not found: ${computationId}`)
    err.name = 'IncoNotFoundError'
    throw err
  }

  const decryptedOutput = '0x' + hashWithDomain('DECRYPT' + computationId)
  const verificationHash = '0x' + hashWithDomain('VERIFY' + computationId + decryptedOutput)

  return {
    computationId,
    operation: entry.operation,
    decryptedOutput,
    verificationHash,
  }
}

// ─── Utility ────────────────────────────────────────────────────────────────

export function getSupportedSchemes(): typeof SUPPORTED_SCHEMES {
  return SUPPORTED_SCHEMES
}

export function getSupportedOperations(): typeof SUPPORTED_OPERATIONS {
  return SUPPORTED_OPERATIONS
}

export function resetIncoProvider(): void {
  encryptionCache.clear()
  computationCache.clear()
}
