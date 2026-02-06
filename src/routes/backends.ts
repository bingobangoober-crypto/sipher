import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation.js'
import { getBackendRegistry } from '../services/backend-registry.js'
import { updateApiKeyMetadata, validateApiKey } from '../services/api-keys.js'

const router = Router()

// ─── Helpers ──────────────────────────────────────────────────────────────────

function serializeCapabilities(caps: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(caps)) {
    result[key] = typeof value === 'bigint' ? value.toString() : value
  }
  return result
}

// ─── GET /backends ────────────────────────────────────────────────────────────

router.get('/backends', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const registry = getBackendRegistry()
    const entries = registry.getAllEntries()

    const backends = entries.map(entry => {
      const { backend, priority, enabled } = entry
      const capabilities = serializeCapabilities(backend.getCapabilities() as unknown as Record<string, unknown>)
      const health = registry.getHealthState(backend.name)

      return {
        name: backend.name,
        type: backend.type,
        chains: [...backend.chains],
        enabled,
        priority,
        capabilities,
        health: health ? {
          circuitState: health.circuitState,
          isHealthy: health.isHealthy,
          consecutiveFailures: health.consecutiveFailures,
          lastChecked: health.lastChecked,
          lastFailureReason: health.lastFailureReason,
        } : null,
      }
    })

    const totalEnabled = backends.filter(b => b.enabled).length

    res.json({
      success: true,
      data: {
        backends,
        total: backends.length,
        totalEnabled,
      },
    })
  } catch (err) {
    next(err)
  }
})

// ─── GET /backends/:id/health ─────────────────────────────────────────────────

router.get('/backends/:id/health', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const registry = getBackendRegistry()
    const backend = registry.get(id)

    if (!backend) {
      res.status(404).json({
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: `Backend '${id}' not found`,
          available: registry.getNames(),
        },
      })
      return
    }

    const probeParams = {
      chain: 'solana' as const,
      sender: 'probe',
      recipient: 'probe',
      mint: null,
      amount: 1000000n,
      decimals: 9,
    }

    const availability = await backend.checkAvailability(probeParams)
    const health = registry.getHealthState(id)
    const metrics = registry.getMetrics(id)
    const capabilities = serializeCapabilities(backend.getCapabilities() as unknown as Record<string, unknown>)

    res.json({
      success: true,
      data: {
        name: backend.name,
        available: availability.available,
        estimatedCost: availability.estimatedCost !== undefined
          ? availability.estimatedCost.toString()
          : undefined,
        estimatedTime: availability.estimatedTime,
        health: health ? {
          circuitState: health.circuitState,
          isHealthy: health.isHealthy,
          consecutiveFailures: health.consecutiveFailures,
          consecutiveSuccesses: health.consecutiveSuccesses,
          lastChecked: health.lastChecked,
          lastFailureReason: health.lastFailureReason,
        } : null,
        metrics: metrics ? {
          totalRequests: metrics.totalRequests,
          successfulRequests: metrics.successfulRequests,
          failedRequests: metrics.failedRequests,
          averageLatencyMs: metrics.averageLatencyMs,
        } : null,
        capabilities,
      },
    })
  } catch (err) {
    next(err)
  }
})

// ─── POST /backends/select ────────────────────────────────────────────────────

const selectSchema = z.object({
  backend: z.string().min(1),
})

router.post(
  '/backends/select',
  validateRequest({ body: selectSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { backend: backendName } = req.body
      const registry = getBackendRegistry()

      if (!registry.has(backendName)) {
        res.status(400).json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: `Backend '${backendName}' not found`,
            available: registry.getNames(),
          },
        })
        return
      }

      // Resolve tiered key if auth middleware skipped validation (dev/test mode)
      let apiKey = req.apiKey
      if (!apiKey) {
        const header = req.headers['x-api-key']
        const bearer = req.headers.authorization?.startsWith('Bearer ') ? req.headers.authorization.slice(7) : null
        const rawKey = (typeof header === 'string' && header) ? header : bearer
        if (rawKey) apiKey = validateApiKey(rawKey) ?? undefined
      }

      if (!apiKey) {
        res.status(400).json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Backend selection requires a tiered API key. Legacy keys do not support preferences.',
          },
        })
        return
      }

      updateApiKeyMetadata(apiKey.id, { preferredBackend: backendName })

      res.json({
        success: true,
        data: {
          keyId: apiKey.id,
          preferredBackend: backendName,
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

export default router
