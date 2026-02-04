import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'

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

// ─── Test Fixtures ──────────────────────────────────────────────────────────

const hex32 = '0x' + 'ab'.repeat(32)
const hex32Alt = '0x' + 'cd'.repeat(32)
const hexSig = '0x' + 'ef'.repeat(64)

const fundingInput = {
  balance: '1000',
  minimumRequired: '500',
  blindingFactor: hex32,
  assetId: 'SOL',
  userAddress: 'S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at',
  ownershipSignature: hexSig,
}

const validityInput = {
  intentHash: hex32,
  senderAddress: 'S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at',
  senderBlinding: hex32,
  senderSecret: hex32,
  authorizationSignature: hexSig,
  nonce: hex32,
  timestamp: 1000,
  expiry: 9999999999,
}

const fulfillmentInput = {
  intentHash: hex32,
  outputAmount: '1000',
  outputBlinding: hex32,
  minOutputAmount: '500',
  recipientStealth: hex32Alt,
  solverId: 'solver-1',
  solverSecret: hex32,
  oracleAttestation: {
    recipient: hex32Alt,
    amount: '1000',
    txHash: hex32,
    blockNumber: '12345',
    signature: hexSig,
  },
  fulfillmentTime: 2000,
  expiry: 9999999999,
}

// ─── Funding Proof ──────────────────────────────────────────────────────────

describe('POST /v1/proofs/funding/generate', () => {
  it('generates funding proof', async () => {
    const res = await request(app)
      .post('/v1/proofs/funding/generate')
      .send(fundingInput)
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.proof.type).toBe('funding')
    expect(res.body.data.proof.proof).toMatch(/^0x4d4f434b/)
    expect(res.body.data.proof.publicInputs).toBeInstanceOf(Array)
    expect(res.body.data.publicInputs).toBeInstanceOf(Array)
  })

  it('rejects missing fields', async () => {
    const res = await request(app)
      .post('/v1/proofs/funding/generate')
      .send({ balance: '1000' })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects balance < minimum', async () => {
    const res = await request(app)
      .post('/v1/proofs/funding/generate')
      .send({ ...fundingInput, balance: '100', minimumRequired: '500' })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('PROOF_GENERATION_FAILED')
  })
})

describe('POST /v1/proofs/funding/verify', () => {
  it('verifies a valid funding proof', async () => {
    const genRes = await request(app)
      .post('/v1/proofs/funding/generate')
      .send(fundingInput)
    expect(genRes.status).toBe(200)

    const { proof } = genRes.body.data
    const res = await request(app)
      .post('/v1/proofs/funding/verify')
      .send(proof)
    expect(res.status).toBe(200)
    expect(res.body.data.valid).toBe(true)
  })

  it('rejects wrong type discriminator', async () => {
    const genRes = await request(app)
      .post('/v1/proofs/funding/generate')
      .send(fundingInput)
    const { proof } = genRes.body.data

    const res = await request(app)
      .post('/v1/proofs/funding/verify')
      .send({ ...proof, type: 'validity' })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })
})

// ─── Validity Proof ─────────────────────────────────────────────────────────

describe('POST /v1/proofs/validity/generate', () => {
  it('generates validity proof', async () => {
    const res = await request(app)
      .post('/v1/proofs/validity/generate')
      .send(validityInput)
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.proof.type).toBe('validity')
    expect(res.body.data.proof.proof).toMatch(/^0x4d4f434b/)
  })

  it('rejects missing fields', async () => {
    const res = await request(app)
      .post('/v1/proofs/validity/generate')
      .send({ intentHash: hex32 })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects expired intent (timestamp >= expiry)', async () => {
    const res = await request(app)
      .post('/v1/proofs/validity/generate')
      .send({ ...validityInput, timestamp: 5000, expiry: 1000 })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('PROOF_GENERATION_FAILED')
  })
})

describe('POST /v1/proofs/validity/verify', () => {
  it('verifies a valid validity proof (round-trip)', async () => {
    const genRes = await request(app)
      .post('/v1/proofs/validity/generate')
      .send(validityInput)
    const { proof } = genRes.body.data

    const res = await request(app)
      .post('/v1/proofs/validity/verify')
      .send(proof)
    expect(res.status).toBe(200)
    expect(res.body.data.valid).toBe(true)
  })

  it('rejects wrong type discriminator', async () => {
    const genRes = await request(app)
      .post('/v1/proofs/validity/generate')
      .send(validityInput)
    const { proof } = genRes.body.data

    const res = await request(app)
      .post('/v1/proofs/validity/verify')
      .send({ ...proof, type: 'funding' })
    expect(res.status).toBe(400)
  })
})

// ─── Fulfillment Proof ──────────────────────────────────────────────────────

describe('POST /v1/proofs/fulfillment/generate', () => {
  it('generates fulfillment proof', async () => {
    const res = await request(app)
      .post('/v1/proofs/fulfillment/generate')
      .send(fulfillmentInput)
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.proof.type).toBe('fulfillment')
    expect(res.body.data.proof.proof).toMatch(/^0x4d4f434b/)
  })

  it('rejects missing fields', async () => {
    const res = await request(app)
      .post('/v1/proofs/fulfillment/generate')
      .send({ intentHash: hex32 })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects output < minimum', async () => {
    const res = await request(app)
      .post('/v1/proofs/fulfillment/generate')
      .send({ ...fulfillmentInput, outputAmount: '100', minOutputAmount: '500' })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('PROOF_GENERATION_FAILED')
  })
})

describe('POST /v1/proofs/fulfillment/verify', () => {
  it('verifies a valid fulfillment proof (round-trip)', async () => {
    const genRes = await request(app)
      .post('/v1/proofs/fulfillment/generate')
      .send(fulfillmentInput)
    const { proof } = genRes.body.data

    const res = await request(app)
      .post('/v1/proofs/fulfillment/verify')
      .send(proof)
    expect(res.status).toBe(200)
    expect(res.body.data.valid).toBe(true)
  })

  it('rejects wrong type discriminator', async () => {
    const genRes = await request(app)
      .post('/v1/proofs/fulfillment/generate')
      .send(fulfillmentInput)
    const { proof } = genRes.body.data

    const res = await request(app)
      .post('/v1/proofs/fulfillment/verify')
      .send({ ...proof, type: 'validity' })
    expect(res.status).toBe(400)
  })
})

// ─── Edge Cases ─────────────────────────────────────────────────────────────

describe('Proof edge cases', () => {
  it('tampered proof fails verification', async () => {
    const genRes = await request(app)
      .post('/v1/proofs/funding/generate')
      .send(fundingInput)
    const { proof } = genRes.body.data

    const res = await request(app)
      .post('/v1/proofs/funding/verify')
      .send({ ...proof, proof: '0xdeadbeef' })
    expect(res.status).toBe(200)
    expect(res.body.data.valid).toBe(false)
  })

  it('verify rejects non-hex proof string', async () => {
    const res = await request(app)
      .post('/v1/proofs/funding/verify')
      .send({ type: 'funding', proof: 'not-hex', publicInputs: [] })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })
})
