import { describe, it, expect, vi, beforeEach } from 'vitest'
import request from 'supertest'
import { resetArciumProvider, _setComputationTimestamp } from '../src/services/arcium-provider.js'
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

const hex32 = '0x' + 'ab'.repeat(32)

const validCompute = {
  circuitId: 'private_transfer',
  encryptedInputs: ['0xdeadbeef', '0xcafebabe'],
}

const validComputeCheckBalance = {
  circuitId: 'check_balance',
  encryptedInputs: ['0xdeadbeef'],
}

const validComputeSwap = {
  circuitId: 'validate_swap',
  encryptedInputs: ['0xdeadbeef', '0xcafebabe', '0x1234abcd'],
}

const validViewingKey = {
  key: hex32,
  path: 'm/44/501/0',
  hash: hex32,
}

// ─── POST /v1/arcium/compute ────────────────────────────────────────────────

describe('POST /v1/arcium/compute', () => {
  beforeEach(() => {
    resetArciumProvider()
    resetBackendRegistry()
  })

  it('submits private_transfer computation → 200 with arc_ prefix', async () => {
    const res = await request(app)
      .post('/v1/arcium/compute')
      .send(validCompute)
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.computationId).toMatch(/^arc_[0-9a-f]{64}$/)
    expect(res.body.data.status).toBe('submitted')
    expect(res.body.data.circuitId).toBe('private_transfer')
    expect(res.body.data.chain).toBe('solana')
    expect(res.body.data.inputCount).toBe(2)
    expect(res.body.data.estimatedCompletion).toBeGreaterThan(Date.now() - 1000)
  })

  it('submits check_balance computation → 200', async () => {
    const res = await request(app)
      .post('/v1/arcium/compute')
      .send(validComputeCheckBalance)
    expect(res.status).toBe(200)
    expect(res.body.data.circuitId).toBe('check_balance')
    expect(res.body.data.inputCount).toBe(1)
  })

  it('submits validate_swap computation → 200', async () => {
    const res = await request(app)
      .post('/v1/arcium/compute')
      .send(validComputeSwap)
    expect(res.status).toBe(200)
    expect(res.body.data.circuitId).toBe('validate_swap')
    expect(res.body.data.inputCount).toBe(3)
  })

  it('rejects invalid circuitId → 400', async () => {
    const res = await request(app)
      .post('/v1/arcium/compute')
      .send({ circuitId: 'invalid_circuit', encryptedInputs: ['0xaa'] })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects empty encryptedInputs → 400', async () => {
    const res = await request(app)
      .post('/v1/arcium/compute')
      .send({ circuitId: 'private_transfer', encryptedInputs: [] })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects non-hex inputs → 400', async () => {
    const res = await request(app)
      .post('/v1/arcium/compute')
      .send({ circuitId: 'private_transfer', encryptedInputs: ['not-hex', 'also-not'] })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('includes beta warning', async () => {
    const res = await request(app)
      .post('/v1/arcium/compute')
      .send(validCompute)
    expect(res.status).toBe(200)
    expect(res.body.beta).toBe(true)
    expect(res.body.warning).toContain('beta')
    expect(res.headers['x-beta']).toBe('true')
  })
})

// ─── GET /v1/arcium/compute/:id/status ──────────────────────────────────────

describe('GET /v1/arcium/compute/:id/status', () => {
  beforeEach(() => {
    resetArciumProvider()
    resetBackendRegistry()
  })

  it('returns submitted status immediately after submission', async () => {
    const submitRes = await request(app)
      .post('/v1/arcium/compute')
      .send(validCompute)
    const { computationId } = submitRes.body.data

    const res = await request(app)
      .get(`/v1/arcium/compute/${computationId}/status`)
    expect(res.status).toBe(200)
    expect(res.body.data.status).toBe('submitted')
    expect(res.body.data.progress).toBe(0)
    expect(res.body.data.output).toBeUndefined()
    expect(res.body.data.proof).toBeUndefined()
  })

  it('returns completed with output/proof after timestamp override', async () => {
    const submitRes = await request(app)
      .post('/v1/arcium/compute')
      .send(validCompute)
    const { computationId } = submitRes.body.data

    // Override timestamp to 5 seconds ago (past completed threshold)
    _setComputationTimestamp(computationId, Date.now() - 5000)

    const res = await request(app)
      .get(`/v1/arcium/compute/${computationId}/status`)
    expect(res.status).toBe(200)
    expect(res.body.data.status).toBe('completed')
    expect(res.body.data.progress).toBe(100)
    expect(res.body.data.output).toMatch(/^0x[0-9a-f]{64}$/)
    expect(res.body.data.proof).toMatch(/^0x[0-9a-f]{64}$/)
  })

  it('returns 404 for unknown computation ID', async () => {
    const res = await request(app)
      .get('/v1/arcium/compute/arc_' + 'ff'.repeat(32) + '/status')
    expect(res.status).toBe(404)
    expect(res.body.success).toBe(false)
    expect(res.body.error.code).toBe('ARCIUM_COMPUTATION_NOT_FOUND')
  })

  it('includes progress percentage in response', async () => {
    const submitRes = await request(app)
      .post('/v1/arcium/compute')
      .send(validCompute)
    const { computationId } = submitRes.body.data

    const res = await request(app)
      .get(`/v1/arcium/compute/${computationId}/status`)
    expect(res.status).toBe(200)
    expect(typeof res.body.data.progress).toBe('number')
    expect(res.body.data.progress).toBeGreaterThanOrEqual(0)
    expect(res.body.data.progress).toBeLessThanOrEqual(100)
  })
})

// ─── POST /v1/arcium/decrypt ────────────────────────────────────────────────

describe('POST /v1/arcium/decrypt', () => {
  beforeEach(() => {
    resetArciumProvider()
    resetBackendRegistry()
  })

  it('decrypts completed computation → 200', async () => {
    const submitRes = await request(app)
      .post('/v1/arcium/compute')
      .send(validCompute)
    const { computationId } = submitRes.body.data

    // Make it completed
    _setComputationTimestamp(computationId, Date.now() - 5000)

    const res = await request(app)
      .post('/v1/arcium/decrypt')
      .send({ computationId, viewingKey: validViewingKey })
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.computationId).toBe(computationId)
    expect(res.body.data.circuitId).toBe('private_transfer')
    expect(res.body.data.decryptedOutput).toMatch(/^0x[0-9a-f]{64}$/)
    expect(res.body.data.verificationHash).toMatch(/^0x[0-9a-f]{64}$/)
  })

  it('rejects non-existent computation → 400/500', async () => {
    const fakeId = 'arc_' + 'ff'.repeat(32)
    const res = await request(app)
      .post('/v1/arcium/decrypt')
      .send({ computationId: fakeId, viewingKey: validViewingKey })
    // Error handler may map to 400 or 500 depending on the error name
    expect(res.status).toBeGreaterThanOrEqual(400)
    expect(res.body.success).toBe(false)
  })

  it('rejects missing viewingKey → 400', async () => {
    const fakeId = 'arc_' + 'ff'.repeat(32)
    const res = await request(app)
      .post('/v1/arcium/decrypt')
      .send({ computationId: fakeId })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })
})

// ─── Idempotency ────────────────────────────────────────────────────────────

describe('Arcium compute idempotency', () => {
  beforeEach(() => {
    resetArciumProvider()
    resetBackendRegistry()
  })

  it('returns cached response with Idempotency-Replayed header', async () => {
    const key = '550e8400-e29b-41d4-a716-446655440099'
    const first = await request(app)
      .post('/v1/arcium/compute')
      .set('Idempotency-Key', key)
      .send(validCompute)
    expect(first.status).toBe(200)

    const second = await request(app)
      .post('/v1/arcium/compute')
      .set('Idempotency-Key', key)
      .send(validCompute)
    expect(second.status).toBe(200)
    expect(second.headers['idempotency-replayed']).toBe('true')
    expect(second.body.data.computationId).toBe(first.body.data.computationId)
  })

  it('different idempotency key → different response', async () => {
    const key1 = '550e8400-e29b-41d4-a716-446655440001'
    const key2 = '550e8400-e29b-41d4-a716-446655440002'

    const first = await request(app)
      .post('/v1/arcium/compute')
      .set('Idempotency-Key', key1)
      .send(validCompute)

    const second = await request(app)
      .post('/v1/arcium/compute')
      .set('Idempotency-Key', key2)
      .send(validCompute)

    expect(first.body.data.computationId).not.toBe(second.body.data.computationId)
  })
})

// ─── Backend Registration ───────────────────────────────────────────────────

describe('Arcium backend registration', () => {
  beforeEach(() => {
    resetBackendRegistry()
  })

  it('arcium-mpc appears in GET /v1/backends', async () => {
    const res = await request(app).get('/v1/backends')
    expect(res.status).toBe(200)
    const arcium = res.body.data.backends.find((b: any) => b.name === 'arcium-mpc')
    expect(arcium).toBeDefined()
    expect(arcium.chains).toContain('solana')
  })

  it('has type compute and hiddenCompute capability', async () => {
    const res = await request(app).get('/v1/backends')
    const arcium = res.body.data.backends.find((b: any) => b.name === 'arcium-mpc')
    expect(arcium.type).toBe('compute')
    expect(arcium.capabilities.hiddenCompute).toBe(true)
    expect(arcium.capabilities.hiddenAmount).toBe(false)
    expect(arcium.capabilities.complianceSupport).toBe(true)
    expect(arcium.capabilities.setupRequired).toBe(true)
    expect(arcium.capabilities.latencyEstimate).toBe('medium')
  })
})
