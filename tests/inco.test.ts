import { describe, it, expect, vi, beforeEach } from 'vitest'
import request from 'supertest'
import { resetIncoProvider } from '../src/services/inco-provider.js'
import { resetBackendRegistry } from '../src/services/backend-registry.js'

vi.mock('@solana/web3.js', async () => {
  const actual = await vi.importActual('@solana/web3.js')
  return {
    ...actual as object,
    Connection: vi.fn().mockImplementation(() => ({
      getSlot: vi.fn().mockResolvedValue(300000000),
      rpcEndpoint: 'https://api.mainnet-beta.solana.com',
    })),
  }
})

const { default: app } = await import('../src/server.js')

// ─── Fixtures ───────────────────────────────────────────────────────────────

const validEncryptFhew = {
  plaintext: 42,
  scheme: 'fhew',
}

const validEncryptTfhe = {
  plaintext: 'hello',
  scheme: 'tfhe',
  label: 'test-value',
}

const validCiphertexts = ['0xdeadbeef', '0xcafebabe']
const singleCiphertext = ['0xdeadbeef']

const validComputeAdd = {
  operation: 'add',
  ciphertexts: validCiphertexts,
}

const validComputeMul = {
  operation: 'mul',
  ciphertexts: validCiphertexts,
}

const validComputeNot = {
  operation: 'not',
  ciphertexts: singleCiphertext,
}

// ─── POST /v1/inco/encrypt ──────────────────────────────────────────────────

describe('POST /v1/inco/encrypt', () => {
  beforeEach(() => {
    resetIncoProvider()
    resetBackendRegistry()
  })

  it('encrypts with fhew scheme → 200 with ciphertext', async () => {
    const res = await request(app)
      .post('/v1/inco/encrypt')
      .send(validEncryptFhew)
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.encryptionId).toMatch(/^inc_[0-9a-f]{64}$/)
    expect(res.body.data.ciphertext).toMatch(/^0x[0-9a-f]{64}$/)
    expect(res.body.data.scheme).toBe('fhew')
  })

  it('encrypts with tfhe scheme → 200', async () => {
    const res = await request(app)
      .post('/v1/inco/encrypt')
      .send(validEncryptTfhe)
    expect(res.status).toBe(200)
    expect(res.body.data.scheme).toBe('tfhe')
    expect(res.body.data.label).toBe('test-value')
  })

  it('returns noiseBudget: 100', async () => {
    const res = await request(app)
      .post('/v1/inco/encrypt')
      .send(validEncryptFhew)
    expect(res.status).toBe(200)
    expect(res.body.data.noiseBudget).toBe(100)
  })

  it('rejects invalid scheme → 400', async () => {
    const res = await request(app)
      .post('/v1/inco/encrypt')
      .send({ plaintext: 42, scheme: 'invalid' })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('includes beta warning', async () => {
    const res = await request(app)
      .post('/v1/inco/encrypt')
      .send(validEncryptFhew)
    expect(res.status).toBe(200)
    expect(res.body.beta).toBe(true)
    expect(res.body.warning).toContain('beta')
    expect(res.headers['x-beta']).toBe('true')
  })
})

// ─── POST /v1/inco/compute ──────────────────────────────────────────────────

describe('POST /v1/inco/compute', () => {
  beforeEach(() => {
    resetIncoProvider()
    resetBackendRegistry()
  })

  it('computes add with 2 ciphertexts → 200 with inc_ prefix', async () => {
    const res = await request(app)
      .post('/v1/inco/compute')
      .send(validComputeAdd)
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.computationId).toMatch(/^inc_[0-9a-f]{64}$/)
    expect(res.body.data.operation).toBe('add')
    expect(res.body.data.operandCount).toBe(2)
    expect(res.body.data.status).toBe('completed')
  })

  it('computes mul → 200 with higher noise cost', async () => {
    const res = await request(app)
      .post('/v1/inco/compute')
      .send(validComputeMul)
    expect(res.status).toBe(200)
    // mul costs 15 noise, so remaining = 100 - 15 = 85
    expect(res.body.data.noiseBudgetRemaining).toBe(85)
  })

  it('computes not with 1 ciphertext → 200', async () => {
    const res = await request(app)
      .post('/v1/inco/compute')
      .send(validComputeNot)
    expect(res.status).toBe(200)
    expect(res.body.data.operation).toBe('not')
    expect(res.body.data.operandCount).toBe(1)
    // not costs 3, remaining = 100 - 3 = 97
    expect(res.body.data.noiseBudgetRemaining).toBe(97)
  })

  it('rejects invalid operation → 400', async () => {
    const res = await request(app)
      .post('/v1/inco/compute')
      .send({ operation: 'divide', ciphertexts: validCiphertexts })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects wrong operand count → 400', async () => {
    // add requires 2 operands, sending 1
    const res = await request(app)
      .post('/v1/inco/compute')
      .send({ operation: 'add', ciphertexts: singleCiphertext })
    // The provider throws IncoComputationError for wrong operand count
    expect(res.status).toBeGreaterThanOrEqual(400)
    expect(res.body.success).toBe(false)
  })

  it('rejects non-hex ciphertexts → 400', async () => {
    const res = await request(app)
      .post('/v1/inco/compute')
      .send({ operation: 'add', ciphertexts: ['not-hex', 'also-not'] })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('includes noise budget remaining in response', async () => {
    const res = await request(app)
      .post('/v1/inco/compute')
      .send(validComputeAdd)
    expect(res.status).toBe(200)
    // add costs 5, remaining = 100 - 5 = 95
    expect(typeof res.body.data.noiseBudgetRemaining).toBe('number')
    expect(res.body.data.noiseBudgetRemaining).toBe(95)
  })
})

// ─── POST /v1/inco/decrypt ──────────────────────────────────────────────────

describe('POST /v1/inco/decrypt', () => {
  beforeEach(() => {
    resetIncoProvider()
    resetBackendRegistry()
  })

  it('decrypts completed computation → 200', async () => {
    // First compute something
    const computeRes = await request(app)
      .post('/v1/inco/compute')
      .send(validComputeAdd)
    const { computationId } = computeRes.body.data

    const res = await request(app)
      .post('/v1/inco/decrypt')
      .send({ computationId })
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.computationId).toBe(computationId)
    expect(res.body.data.operation).toBe('add')
    expect(res.body.data.decryptedOutput).toMatch(/^0x[0-9a-f]{64}$/)
    expect(res.body.data.verificationHash).toMatch(/^0x[0-9a-f]{64}$/)
  })

  it('rejects non-existent computation → 400/500', async () => {
    const fakeId = 'inc_' + 'ff'.repeat(32)
    const res = await request(app)
      .post('/v1/inco/decrypt')
      .send({ computationId: fakeId })
    expect(res.status).toBeGreaterThanOrEqual(400)
    expect(res.body.success).toBe(false)
  })

  it('rejects missing computationId → 400', async () => {
    const res = await request(app)
      .post('/v1/inco/decrypt')
      .send({})
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })
})

// ─── Idempotency ────────────────────────────────────────────────────────────

describe('Inco compute idempotency', () => {
  beforeEach(() => {
    resetIncoProvider()
    resetBackendRegistry()
  })

  it('returns cached response with Idempotency-Replayed header', async () => {
    const key = '660e8400-e29b-41d4-a716-446655440099'
    const first = await request(app)
      .post('/v1/inco/compute')
      .set('Idempotency-Key', key)
      .send(validComputeAdd)
    expect(first.status).toBe(200)

    const second = await request(app)
      .post('/v1/inco/compute')
      .set('Idempotency-Key', key)
      .send(validComputeAdd)
    expect(second.status).toBe(200)
    expect(second.headers['idempotency-replayed']).toBe('true')
    expect(second.body.data.computationId).toBe(first.body.data.computationId)
  })

  it('different key → different response', async () => {
    const key1 = '660e8400-e29b-41d4-a716-446655440001'
    const key2 = '660e8400-e29b-41d4-a716-446655440002'

    const first = await request(app)
      .post('/v1/inco/compute')
      .set('Idempotency-Key', key1)
      .send(validComputeAdd)

    const second = await request(app)
      .post('/v1/inco/compute')
      .set('Idempotency-Key', key2)
      .send(validComputeAdd)

    expect(first.body.data.computationId).not.toBe(second.body.data.computationId)
  })
})

// ─── Backend Registration ───────────────────────────────────────────────────

describe('Inco backend registration', () => {
  beforeEach(() => {
    resetBackendRegistry()
  })

  it('inco-fhe appears in GET /v1/backends', async () => {
    const res = await request(app).get('/v1/backends')
    expect(res.status).toBe(200)
    const inco = res.body.data.backends.find((b: any) => b.name === 'inco-fhe')
    expect(inco).toBeDefined()
    expect(inco.chains).toContain('solana')
  })

  it('has type compute and hiddenCompute capability', async () => {
    const res = await request(app).get('/v1/backends')
    const inco = res.body.data.backends.find((b: any) => b.name === 'inco-fhe')
    expect(inco.type).toBe('compute')
    expect(inco.capabilities.hiddenCompute).toBe(true)
    expect(inco.capabilities.complianceSupport).toBe(false)
    expect(inco.capabilities.setupRequired).toBe(true)
    expect(inco.capabilities.latencyEstimate).toBe('medium')
  })
})

// ─── E2E Flow ───────────────────────────────────────────────────────────────

describe('Inco FHE E2E flow', () => {
  beforeEach(() => {
    resetIncoProvider()
    resetBackendRegistry()
  })

  it('encrypt → compute → decrypt round-trip', async () => {
    // Step 1: Encrypt two values
    const enc1 = await request(app)
      .post('/v1/inco/encrypt')
      .send({ plaintext: 100, scheme: 'tfhe' })
    expect(enc1.status).toBe(200)

    const enc2 = await request(app)
      .post('/v1/inco/encrypt')
      .send({ plaintext: 200, scheme: 'tfhe' })
    expect(enc2.status).toBe(200)

    // Step 2: Compute on the ciphertexts
    const compute = await request(app)
      .post('/v1/inco/compute')
      .send({
        operation: 'add',
        ciphertexts: [enc1.body.data.ciphertext, enc2.body.data.ciphertext],
        scheme: 'tfhe',
      })
    expect(compute.status).toBe(200)
    expect(compute.body.data.status).toBe('completed')
    expect(compute.body.data.noiseBudgetRemaining).toBe(95)

    // Step 3: Decrypt the result
    const decrypt = await request(app)
      .post('/v1/inco/decrypt')
      .send({ computationId: compute.body.data.computationId })
    expect(decrypt.status).toBe(200)
    expect(decrypt.body.data.decryptedOutput).toMatch(/^0x[0-9a-f]{64}$/)
    expect(decrypt.body.data.verificationHash).toMatch(/^0x[0-9a-f]{64}$/)
  })
})
