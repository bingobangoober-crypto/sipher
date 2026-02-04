# CLAUDE.md - Sipher

> **Ecosystem Hub:** See [sip-protocol/CLAUDE.md](https://github.com/sip-protocol/sip-protocol/blob/main/CLAUDE.md) for full ecosystem context

**Repository:** https://github.com/sip-protocol/sipher
**Live URL:** https://sipher.sip-protocol.org
**Tagline:** "Privacy-as-a-Skill for Solana Agents"
**Purpose:** REST API + OpenClaw skill enabling any autonomous agent to add transaction privacy via SIP Protocol

---

## PRODUCT POSITIONING

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SIP ECOSYSTEM                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  @sip-protocol/sdk — THE PRIVACY STANDARD                                  │
│  "Any app can add privacy with one line of code"                            │
│                                                                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │  sip-app     │ │  sip-mobile  │ │  sip-website │ │  SIPHER      │       │
│  │  Web App     │ │  Native App  │ │  Marketing   │ │  Agent API   │       │
│  │  Humans      │ │  Consumers   │ │  Awareness   │ │  AI Agents   │       │
│  │              │ │              │ │              │ │  ← YOU ARE   │       │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘       │
│                                                                             │
│  Sipher is SIP's agent-facing interface — the same privacy primitives       │
│  (stealth addresses, Pedersen commitments, viewing keys) exposed as a       │
│  REST API and OpenClaw-compatible skill for autonomous agents.              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## CONTEXT

**Origin:** Colosseum Agent Hackathon (Feb 2-12, 2026) — $100K USDC prize pool
**Agent ID:** 274 | **Status:** active
**Credentials:** `~/.claude/sip-protocol/sipher/CREDENTIALS.md` (never commit)
**Hackathon API:** `https://agents.colosseum.com/api`

---

## TECH STACK

- **Runtime:** Node.js 22 (LTS)
- **Framework:** Express 5
- **Language:** TypeScript (strict)
- **Core:** @sip-protocol/sdk v0.7.3 (stealth addresses, commitments, encryption)
- **Solana:** @solana/web3.js v1 (transactions, RPC)
- **Validation:** Zod v3
- **Logging:** Pino v9 (structured JSON, audit logs)
- **Docs:** swagger-ui-express (OpenAPI 3.1)
- **Caching:** lru-cache (idempotency store, 10K entries, 24h TTL)
- **Testing:** Vitest + Supertest (115 tests)
- **Deployment:** Docker + GHCR → VPS (port 5006)
- **Domain:** sipher.sip-protocol.org

---

## DEVELOPMENT COMMANDS

```bash
pnpm install                    # Install dependencies
pnpm dev                        # Dev server (localhost:5006)
pnpm build                      # Build for production
pnpm test -- --run              # Run tests (115 tests)
pnpm typecheck                  # Type check
pnpm demo                       # Full-flow demo (requires dev server running)
pnpm colosseum heartbeat        # Autonomous loop (engage every 30 min)
pnpm colosseum engage           # Single engagement cycle
pnpm colosseum leaderboard      # Check vote leaderboard
pnpm colosseum status           # Engagement stats
pnpm colosseum posts            # List forum posts
pnpm colosseum vote-all         # Vote for all projects
```

---

## PROJECT STRUCTURE

```
sipher/
├── src/
│   ├── server.ts                   # Express app + middleware stack + Swagger UI
│   ├── config.ts                   # envalid env validation
│   ├── logger.ts                   # pino structured logger
│   ├── shutdown.ts                 # Graceful shutdown + readiness passthrough
│   ├── errors/
│   │   └── codes.ts                # ErrorCode enum + ERROR_CATALOG
│   ├── openapi/
│   │   └── spec.ts                 # OpenAPI 3.1 spec (all 19 endpoints)
│   ├── middleware/
│   │   ├── auth.ts                 # X-API-Key (timing-safe)
│   │   ├── cors.ts                 # Helmet + CORS
│   │   ├── rate-limit.ts           # express-rate-limit (memory)
│   │   ├── validation.ts           # Zod + validateRequest
│   │   ├── error-handler.ts        # Global error + 404 (uses ErrorCode enum)
│   │   ├── request-id.ts           # X-Request-Id correlation
│   │   ├── audit-log.ts            # Structured audit logging (sensitive field redaction)
│   │   ├── idempotency.ts          # Idempotency-Key header (LRU cache)
│   │   └── index.ts                # Barrel exports
│   ├── routes/
│   │   ├── health.ts               # GET /v1/health (extended), GET /v1/ready
│   │   ├── errors.ts               # GET /v1/errors (error catalog)
│   │   ├── stealth.ts              # generate, derive, check
│   │   ├── transfer.ts             # shield, claim (+ idempotency)
│   │   ├── scan.ts                 # payments
│   │   ├── commitment.ts           # create (+ idempotency), verify, add, subtract
│   │   ├── viewing-key.ts          # generate, disclose (+ idempotency), decrypt
│   │   └── index.ts                # Route aggregator
│   ├── services/
│   │   ├── solana.ts               # Connection manager + RPC latency measurement
│   │   └── transaction-builder.ts  # Unsigned tx serialization
│   └── types/
│       └── api.ts                  # ApiResponse<T>, HealthResponse
├── skill.md                        # OpenClaw skill file (GET /skill.md)
├── scripts/
│   ├── colosseum.ts                # Hackathon engagement automation
│   └── demo-flow.ts                # Full E2E demo (15 endpoints)
├── tests/                          # 115 tests across 12 suites
│   ├── health.test.ts              # 10 tests (health + ready + root + skill + 404 + reqId)
│   ├── stealth.test.ts             # 10 tests
│   ├── commitment.test.ts          # 16 tests (create, verify, add, subtract)
│   ├── transfer-shield.test.ts     # 12 tests
│   ├── transfer-claim.test.ts      # 8 tests
│   ├── scan.test.ts                # 12 tests
│   ├── viewing-key.test.ts         # 10 tests (generate, disclose, decrypt)
│   ├── middleware.test.ts          # 5 tests
│   ├── error-codes.test.ts         # 10 tests (enum, catalog, error-handler integration)
│   ├── openapi.test.ts             # 6 tests (spec validity, paths, auth, tags)
│   ├── audit-log.test.ts           # 8 tests (redaction, integration)
│   └── idempotency.test.ts         # 8 tests (cache, replay, validation)
├── Dockerfile                      # Multi-stage Alpine
├── docker-compose.yml              # name: sipher, port 5006
├── .github/workflows/deploy.yml    # GHCR → VPS
├── .env.example
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── vitest.config.ts
```

---

## API ENDPOINTS (19 endpoints)

All return `ApiResponse<T>`: `{ success, data?, error? }`

| Method | Path | Description | Auth | Idempotent |
|--------|------|-------------|------|------------|
| GET | `/` | Service info + endpoint directory | No | — |
| GET | `/skill.md` | OpenClaw skill file | No | — |
| GET | `/docs` | Interactive Swagger UI | No | — |
| GET | `/v1/openapi.json` | OpenAPI 3.1 specification | No | — |
| GET | `/v1/health` | Health + Solana RPC latency + memory usage | No | — |
| GET | `/v1/ready` | Readiness probe (200/503) | No | — |
| GET | `/v1/errors` | Error code catalog (code → status → description → retry) | No | — |
| POST | `/v1/stealth/generate` | Generate stealth meta-address keypair | Yes | — |
| POST | `/v1/stealth/derive` | Derive one-time stealth address | Yes | — |
| POST | `/v1/stealth/check` | Check stealth address ownership | Yes | — |
| POST | `/v1/transfer/shield` | Build unsigned shielded transfer (SOL/SPL) | Yes | ✓ |
| POST | `/v1/transfer/claim` | Build signed claim tx (stealth key derived server-side) | Yes | ✓ |
| POST | `/v1/scan/payments` | Scan for incoming stealth payments | Yes | — |
| POST | `/v1/commitment/create` | Create Pedersen commitment | Yes | ✓ |
| POST | `/v1/commitment/verify` | Verify commitment opening | Yes | — |
| POST | `/v1/commitment/add` | Add two commitments (homomorphic) | Yes | — |
| POST | `/v1/commitment/subtract` | Subtract two commitments (homomorphic) | Yes | — |
| POST | `/v1/viewing-key/generate` | Generate viewing key | Yes | — |
| POST | `/v1/viewing-key/disclose` | Encrypt tx data for auditor | Yes | ✓ |
| POST | `/v1/viewing-key/decrypt` | Decrypt tx data with viewing key | Yes | — |

### Idempotency

Mutation endpoints marked ✓ accept `Idempotency-Key` header (UUID v4). Duplicate requests return cached response with `Idempotency-Replayed: true` header. In-memory LRU cache, 10K entries, 24h TTL.

### Audit Logging

All requests are audit-logged with structured JSON (requestId, method, path, status, latency, sanitized body). Sensitive fields (private keys, blinding factors, viewing keys) are automatically redacted to `[REDACTED]`.

---

## MIDDLEWARE STACK (execution order)

```
1. shutdownMiddleware     → Reject during graceful shutdown (pass health + ready)
2. requestIdMiddleware    → Generate/preserve X-Request-ID
3. helmet()               → Security headers (CSP, HSTS, etc.)
4. secureCors             → Dynamic CORS
5. rateLimiter            → 100 req/min (memory-backed)
6. authenticate           → X-API-Key / Bearer token (skip public paths)
7. express.json()         → Parse JSON (1MB limit)
8. compression()          → Gzip
9. requestLogger          → pino-http request/response logging
10. auditLog              → Structured audit log with redaction
11. [route handlers]      → API routes (some with idempotency middleware)
12. notFoundHandler       → 404 catch-all
13. errorHandler          → Global error handler (ErrorCode enum)
```

---

## ERROR CODES

All error codes are centralized in `src/errors/codes.ts` (ErrorCode enum). Full catalog served at `GET /v1/errors`.

| Category | Codes |
|----------|-------|
| **400** | VALIDATION_ERROR, INVALID_JSON, INVALID_HEX_STRING, INVALID_AMOUNT, INVALID_ADDRESS |
| **401** | UNAUTHORIZED, INVALID_API_KEY |
| **404** | NOT_FOUND |
| **429** | RATE_LIMITED |
| **500** | INTERNAL_SERVER_ERROR, STEALTH_GENERATION_FAILED, COMMITMENT_FAILED, TRANSFER_BUILD_FAILED, TRANSFER_CLAIM_FAILED, SCAN_FAILED, VIEWING_KEY_FAILED, ENCRYPTION_FAILED, DECRYPTION_FAILED |
| **503** | SERVICE_UNAVAILABLE, SOLANA_RPC_UNAVAILABLE |

---

## VPS DEPLOYMENT

| Field | Value |
|-------|-------|
| **User** | sipher |
| **Port** | 5006 |
| **Domain** | sipher.sip-protocol.org |
| **Container** | sipher |
| **SSH** | `ssh sipher` |

---

## AI GUIDELINES

### DO:
- Run `pnpm test -- --run` after code changes (115 tests must pass)
- Run `pnpm typecheck` before committing
- Use @sip-protocol/sdk for all crypto operations (never roll your own)
- Keep API responses consistent: `{ success, data?, error? }`
- Use ErrorCode enum for all error responses (never string literals)
- Reference ecosystem CLAUDE.md for shared standards
- Add tests for every new endpoint or middleware

### DON'T:
- Commit credentials or API keys
- Expose private keys through the API (exception: claim endpoint derives stealth key)
- Skip input validation on public endpoints
- Break compatibility with OpenClaw skill format
- Log sensitive fields unredacted (audit-log middleware handles this)

---

## ROADMAP

See [ROADMAP.md](ROADMAP.md) for the full 6-phase roadmap (38 issues across 6 milestones).

| Phase | Theme | Issues | Status |
|-------|-------|--------|--------|
| 1 | Hackathon Polish | 7 | ✅ Complete (7/7 closed) |
| 2 | Production Hardening | 7 | ✅ Complete (5/7 closed, 2 deferred) |
| 3 | Advanced Privacy | 7 | Planned |
| 4 | Multi-Chain | 6 | Planned |
| 5 | Backend Aggregation | 5 | Planned |
| 6 | Enterprise | 6 | Planned |

**Phase 2 deferred:** S2-02 (API key tiers, #8), S2-03 (Redis, #10) — post-hackathon

**Quick check:** `gh issue list -R sip-protocol/sipher --state open`

---

**Last Updated:** 2026-02-04
**Status:** Phase 2 Complete | 19 Endpoints | 115 Tests | Agent #274 Active
