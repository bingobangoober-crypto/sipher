export type ApiKeyTier = 'free' | 'pro' | 'enterprise'

export interface ApiKeyConfig {
  id: string
  key: string
  tier: ApiKeyTier
  name: string
  createdAt: string
  expiresAt?: string
  revokedAt?: string
  metadata?: Record<string, unknown>
}

export interface ApiKeyUsage {
  keyId: string
  requestCount: number
  lastRequestAt: string
  windowStart: string
}

export interface TierLimits {
  requestsPerHour: number
  burstLimit: number
  allowedEndpoints: string[] | '*'
}

export const TIER_LIMITS: Record<ApiKeyTier, TierLimits> = {
  free: {
    requestsPerHour: 100,
    burstLimit: 10,
    allowedEndpoints: [
      '/v1/stealth/*',
      '/v1/commitment/*',
      '/v1/viewing-key/*',
      '/v1/health',
      '/v1/ready',
    ],
  },
  pro: {
    requestsPerHour: 10_000,
    burstLimit: 100,
    allowedEndpoints: '*',
  },
  enterprise: {
    requestsPerHour: 100_000,
    burstLimit: 1000,
    allowedEndpoints: '*',
  },
}

// ─── Operation Categories (for daily quota metering) ───────────────────────

export type OperationCategory =
  | 'stealth'
  | 'commitment'
  | 'transfer'
  | 'scan'
  | 'viewing_key'
  | 'proof'
  | 'privacy'
  | 'compute'
  | 'swap'
  | 'governance'
  | 'compliance'
  | 'session'
  | 'jito'

export interface DailyQuotas {
  totalPerDay: number
  perCategoryPerDay: number
}

export const DAILY_QUOTAS: Record<ApiKeyTier, DailyQuotas> = {
  free: { totalPerDay: 100, perCategoryPerDay: 50 },
  pro: { totalPerDay: 10_000, perCategoryPerDay: 2_000 },
  enterprise: { totalPerDay: 100_000, perCategoryPerDay: 20_000 },
}

declare global {
  namespace Express {
    interface Request {
      apiKey?: ApiKeyConfig
      apiKeyTier?: ApiKeyTier
    }
  }
}
