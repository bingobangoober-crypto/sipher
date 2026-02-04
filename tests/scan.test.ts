import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'

vi.mock('@solana/web3.js', async () => {
  const actual = await vi.importActual('@solana/web3.js')
  return {
    ...actual as object,
    Connection: vi.fn().mockImplementation(() => ({
      getSlot: vi.fn().mockResolvedValue(300000000),
      rpcEndpoint: 'https://api.mainnet-beta.solana.com',
      getSignaturesForAddress: vi.fn().mockResolvedValue([]),
    })),
  }
})

const { default: app } = await import('../src/server.js')

const VALID_HEX = '0x' + 'ab'.repeat(32)

describe('POST /v1/scan/payments', () => {
  it('returns empty payments array when no announcements found', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
        spendingPublicKey: VALID_HEX,
      })

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.payments).toEqual([])
    expect(res.body.data.scanned).toBe(0)
  })

  it('uses default limit of 100', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
        spendingPublicKey: VALID_HEX,
      })

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
  })

  it('accepts custom limit', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
        spendingPublicKey: VALID_HEX,
        limit: 50,
      })

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
  })

  it('accepts fromSlot parameter', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
        spendingPublicKey: VALID_HEX,
        fromSlot: 300000000,
      })

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
  })

  it('accepts toSlot parameter', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
        spendingPublicKey: VALID_HEX,
        fromSlot: 300000000,
        toSlot: 300001000,
      })

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
  })

  it('rejects missing viewingPrivateKey', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        spendingPublicKey: VALID_HEX,
      })

    expect(res.status).toBe(400)
    expect(res.body.success).toBe(false)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects missing spendingPublicKey', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
      })

    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects invalid hex keys', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: 'not-hex',
        spendingPublicKey: VALID_HEX,
      })

    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects empty body', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({})

    expect(res.status).toBe(400)
    expect(res.body.success).toBe(false)
  })

  it('rejects limit exceeding maximum (1000)', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
        spendingPublicKey: VALID_HEX,
        limit: 1001,
      })

    expect(res.status).toBe(400)
  })

  it('rejects limit of zero', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
        spendingPublicKey: VALID_HEX,
        limit: 0,
      })

    expect(res.status).toBe(400)
  })

  it('rejects negative fromSlot', async () => {
    const res = await request(app)
      .post('/v1/scan/payments')
      .send({
        viewingPrivateKey: VALID_HEX,
        spendingPublicKey: VALID_HEX,
        fromSlot: -1,
      })

    expect(res.status).toBe(400)
  })
})
