// ─── Cache Defaults ──────────────────────────────────────────────────────────

/** Default LRU cache max entries (most providers) */
export const CACHE_MAX_DEFAULT = 5_000

/** Large LRU cache max entries (idempotency, sessions) */
export const CACHE_MAX_LARGE = 10_000

/** Default batch operation limit */
export const BATCH_MAX = 100

// ─── TTL Values (milliseconds) ──────────────────────────────────────────────

export const FIVE_MINUTES_MS = 5 * 60 * 1000
export const ONE_HOUR_MS = 60 * 60 * 1000
export const TWO_HOURS_MS = 2 * 60 * 60 * 1000
export const ONE_DAY_MS = 24 * 60 * 60 * 1000
export const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000

// ─── TTL Values (seconds) ───────────────────────────────────────────────────

export const ONE_HOUR_SECONDS = 60 * 60
export const ONE_DAY_SECONDS = 24 * 60 * 60
