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
- **Testing:** Vitest + Supertest (165 tests)
- **Deployment:** Docker + GHCR → VPS (port 5006)
- **Domain:** sipher.sip-protocol.org

---

## DEVELOPMENT COMMANDS

```bash
# Core Development
pnpm install                    # Install dependencies
pnpm dev                        # Dev server (localhost:5006)
pnpm build                      # Build for production
pnpm test -- --run              # Run tests (165 tests)
pnpm typecheck                  # Type check
pnpm demo                       # Full-flow demo (requires dev server running)

# Template-Based Engagement (scripts/colosseum.ts)
pnpm colosseum heartbeat        # Autonomous loop (engage every 30 min)
pnpm colosseum engage           # Single engagement cycle
pnpm colosseum leaderboard      # Check vote leaderboard
pnpm colosseum status           # Engagement stats
pnpm colosseum posts            # List forum posts

# LLM-Powered Agent (scripts/sipher-agent.ts) — requires OPENROUTER_API_KEY
npx tsx scripts/sipher-agent.ts run        # Run one LLM-powered engagement cycle
npx tsx scripts/sipher-agent.ts heartbeat  # Continuous LLM loop
npx tsx scripts/sipher-agent.ts status     # Show agent state + engaged agents
```

---

## SIPHER AUTONOMOUS AGENT

Two engagement systems available:

### 1. Template-Based (`scripts/colosseum.ts`)
- **Fast, low-cost** — no LLM calls
- Comments use category-based templates
- Votes for all projects automatically
- Good for baseline engagement

### 2. LLM-Powered (`scripts/sipher-agent.ts`)
- **Autonomous reasoning** — thinks before acting
- Uses OpenRouter (Claude Haiku) for decisions
- State-first design: checks local state before LLM call (saves tokens)
- Evaluates projects individually, records decisions
- Generates contextual comments

```
┌─────────────────────────────────────────────────────────────┐
│  STATE-FIRST DESIGN                                         │
│                                                             │
│  1. Load state → check_voted/check_commented (no LLM)       │
│  2. Only NEW items → ask LLM to reason                      │
│  3. Save decision → never reconsider same item              │
└─────────────────────────────────────────────────────────────┘
```

**Agent Tools:**
| Tool | Purpose |
|------|---------|
| `get_projects` | Fetch all hackathon projects |
| `check_voted` | Check state before LLM evaluation |
| `vote_for_project` | Vote with reason |
| `skip_voting` | Record "no" decision (avoid re-evaluation) |
| `get_forum_posts` | Fetch recent posts |
| `check_commented` | Check state before commenting |
| `post_comment` | Post contextual comment |
| `get_our_posts` | See who engaged with us |
| `check_engaged_with_us` | Prioritize reciprocity |
| `get_leaderboard` | Check ranking |
| `done` | Signal cycle complete |

**Cost:** ~$0.10/cycle (Haiku), decreases as state fills up

**State file:** `scripts/.sipher-agent-state.json`

---

## COLOSSEUM HACKATHON STATUS

**Deadline:** Feb 12, 2026 17:00 UTC
**Prize Pool:** $100K USDC

### Our Project
- **Agent ID:** 274
- **Project ID:** 148
- **Slug:** sipher-privacy-as-a-skill-for-solana-agents
- **URL:** https://colosseum.com/agent-hackathon/projects/sipher-privacy-as-a-skill-for-solana-agents

### Our Forum Posts
| ID | Title |
|----|-------|
| 373 | Sipher: Privacy-as-a-Skill — Give Your Agent Stealth Addresses |
| 374 | Why Agent-to-Agent Payments Need Privacy |
| 376 | Sipher Day 1: Deployed to Mainnet — 13 Privacy Endpoints Live |
| 498 | Add Privacy to Your Agent in 2 API Calls |
| 499 | Sipher Day 2: Autonomous Heartbeat Live |
| 500 | Calling AEGIS, Makora, Clodds, AutoVault, ZNAP |
| 504 | Your Agent's Wallet is a Public Diary |

### VPS Heartbeat Deployment
**Location:** `sip@176.222.53.185:~/sipher/`

```bash
# Check heartbeat status
ssh sip "ps aux | grep colosseum"
ssh sip "tail -50 ~/sipher/heartbeat.log"

# Restart heartbeat (template-based)
ssh sip "pkill -f 'colosseum.mjs' || true"
ssh sip "cd ~/sipher && source .env && nohup node colosseum.mjs heartbeat >> heartbeat.log 2>&1 &"

# Deploy new version
npx tsx --compile scripts/colosseum.ts > /tmp/colosseum.mjs
scp /tmp/colosseum.mjs sip:~/sipher/
```

**Environment on VPS:**
```
~/sipher/.env:
  COLOSSEUM_API_KEY=xxx
  OPENROUTER_API_KEY=xxx  # For LLM-powered agent
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
│   │   └── spec.ts                 # OpenAPI 3.1 spec (all 26 endpoints)
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
│   │   ├── stealth.ts              # generate, derive, check, generate/batch
│   │   ├── transfer.ts             # shield, claim (+ idempotency)
│   │   ├── scan.ts                 # payments, payments/batch
│   │   ├── commitment.ts           # create (+ idempotency), verify, add, subtract, create/batch
│   │   ├── viewing-key.ts          # generate, derive, verify-hierarchy, disclose, decrypt
│   │   ├── privacy.ts              # score (surveillance/privacy analysis)
│   │   ├── rpc.ts                  # GET /v1/rpc/providers (provider info)
│   │   └── index.ts                # Route aggregator
│   ├── services/
│   │   ├── solana.ts               # Connection manager + RPC latency measurement
│   │   ├── rpc-provider.ts         # Provider factory (helius, quicknode, triton, generic)
│   │   └── transaction-builder.ts  # Unsigned tx serialization
│   └── types/
│       └── api.ts                  # ApiResponse<T>, HealthResponse
├── skill.md                        # OpenClaw skill file (GET /skill.md)
├── scripts/
│   ├── colosseum.ts                # Template-based engagement (LLM for comments/posts)
│   ├── sipher-agent.ts             # LLM-powered autonomous agent (ReAct loop)
│   └── demo-flow.ts                # Full E2E demo (21 endpoints)
├── tests/                          # 165 tests across 16 suites
│   ├── health.test.ts              # 11 tests (health + ready + root + skill + 404 + reqId)
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
│   ├── idempotency.test.ts         # 8 tests (cache, replay, validation)
│   ├── batch.test.ts               # 15 tests (stealth, commitment, scan batch ops)
│   ├── privacy-score.test.ts       # 10 tests (scoring, factors, validation)
│   ├── viewing-key-hierarchy.test.ts # 11 tests (derive, verify, multi-level)
│   └── rpc-provider.test.ts        # 14 tests (factory, providers, masking, endpoint)
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

## API ENDPOINTS (26 endpoints)

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
| POST | `/v1/stealth/generate/batch` | Batch generate stealth keypairs (max 100) | Yes | — |
| POST | `/v1/transfer/shield` | Build unsigned shielded transfer (SOL/SPL) | Yes | ✓ |
| POST | `/v1/transfer/claim` | Build signed claim tx (stealth key derived server-side) | Yes | ✓ |
| POST | `/v1/scan/payments` | Scan for incoming stealth payments | Yes | — |
| POST | `/v1/scan/payments/batch` | Batch scan across multiple key pairs (max 100) | Yes | — |
| POST | `/v1/commitment/create` | Create Pedersen commitment | Yes | ✓ |
| POST | `/v1/commitment/verify` | Verify commitment opening | Yes | — |
| POST | `/v1/commitment/add` | Add two commitments (homomorphic) | Yes | — |
| POST | `/v1/commitment/subtract` | Subtract two commitments (homomorphic) | Yes | — |
| POST | `/v1/commitment/create/batch` | Batch create commitments (max 100) | Yes | — |
| POST | `/v1/viewing-key/generate` | Generate viewing key | Yes | — |
| POST | `/v1/viewing-key/derive` | Derive child viewing key (BIP32-style) | Yes | — |
| POST | `/v1/viewing-key/verify-hierarchy` | Verify parent-child key relationship | Yes | — |
| POST | `/v1/viewing-key/disclose` | Encrypt tx data for auditor | Yes | ✓ |
| POST | `/v1/viewing-key/decrypt` | Decrypt tx data with viewing key | Yes | — |
| POST | `/v1/privacy/score` | Wallet privacy/surveillance score (0-100) | Yes | — |
| GET | `/v1/rpc/providers` | Active RPC provider info + supported list | No | — |

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
- Run `pnpm test -- --run` after code changes (165 tests must pass)
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
| 3 | Advanced Privacy | 7 | 🔧 In Progress (4/7 closed) |
| 4 | Multi-Chain | 6 | Planned |
| 5 | Backend Aggregation | 5 | Planned |
| 6 | Enterprise | 6 | Planned |

**Phase 2 deferred:** S2-02 (API key tiers, #8), S2-03 (Redis, #10) — post-hackathon

**Quick check:** `gh issue list -R sip-protocol/sipher --state open`

---

**Last Updated:** 2026-02-05
**Status:** Phase 3 In Progress | 26 Endpoints | 165 Tests | Agent #274 Active | LLM Agent Ready
