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
- **Logging:** Pino v9
- **Testing:** Vitest + Supertest (39 tests)
- **Deployment:** Docker + GHCR → VPS (port 5006)
- **Domain:** sipher.sip-protocol.org

---

## DEVELOPMENT COMMANDS

```bash
pnpm install                    # Install dependencies
pnpm dev                        # Dev server (localhost:5006)
pnpm build                      # Build for production
pnpm test -- --run              # Run tests (39 tests)
pnpm typecheck                  # Type check
```

---

## PROJECT STRUCTURE

```
sipher/
├── src/
│   ├── server.ts                   # Express app + middleware stack
│   ├── config.ts                   # envalid env validation
│   ├── logger.ts                   # pino structured logger
│   ├── shutdown.ts                 # Graceful shutdown
│   ├── middleware/
│   │   ├── auth.ts                 # X-API-Key (timing-safe)
│   │   ├── cors.ts                 # Helmet + CORS
│   │   ├── rate-limit.ts           # express-rate-limit (memory)
│   │   ├── validation.ts           # Zod + validateRequest
│   │   ├── error-handler.ts        # Global error + 404
│   │   ├── request-id.ts           # X-Request-Id correlation
│   │   └── index.ts                # Barrel exports
│   ├── routes/
│   │   ├── health.ts               # GET /v1/health
│   │   ├── stealth.ts              # generate, derive, check
│   │   ├── transfer.ts             # shield, claim
│   │   ├── scan.ts                 # payments
│   │   ├── commitment.ts           # create, verify
│   │   ├── viewing-key.ts          # generate, disclose
│   │   └── index.ts                # Route aggregator
│   ├── services/
│   │   ├── solana.ts               # Connection manager
│   │   └── transaction-builder.ts  # Unsigned tx serialization
│   └── types/
│       └── api.ts                  # ApiResponse<T>, HealthResponse
├── skill.md                        # OpenClaw skill file (GET /skill.md)
├── tests/                          # 39 tests across 5 suites
│   ├── health.test.ts              # 7 tests
│   ├── stealth.test.ts             # 10 tests
│   ├── commitment.test.ts          # 11 tests
│   ├── viewing-key.test.ts         # 6 tests
│   └── middleware.test.ts          # 5 tests
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

## API ENDPOINTS (13 endpoints)

All return `ApiResponse<T>`: `{ success, data?, error? }`

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/` | Service info + endpoint directory | No |
| GET | `/skill.md` | OpenClaw skill file | No |
| GET | `/v1/health` | Health + Solana connection status | No |
| POST | `/v1/stealth/generate` | Generate stealth meta-address keypair | Yes |
| POST | `/v1/stealth/derive` | Derive one-time stealth address | Yes |
| POST | `/v1/stealth/check` | Check stealth address ownership | Yes |
| POST | `/v1/transfer/shield` | Build unsigned shielded transfer (SOL/SPL) | Yes |
| POST | `/v1/transfer/claim` | Build signed claim tx (stealth key derived server-side) | Yes |
| POST | `/v1/scan/payments` | Scan for incoming stealth payments | Yes |
| POST | `/v1/commitment/create` | Create Pedersen commitment | Yes |
| POST | `/v1/commitment/verify` | Verify commitment opening | Yes |
| POST | `/v1/viewing-key/generate` | Generate viewing key | Yes |
| POST | `/v1/viewing-key/disclose` | Encrypt tx data for auditor | Yes |

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
- Run `pnpm test -- --run` after code changes
- Use @sip-protocol/sdk for all crypto operations (never roll your own)
- Keep API responses consistent: `{ success, data?, error? }`
- Reference ecosystem CLAUDE.md for shared standards

### DON'T:
- Commit credentials or API keys
- Expose private keys through the API (exception: claim endpoint derives stealth key)
- Skip input validation on public endpoints
- Break compatibility with OpenClaw skill format

---

**Last Updated:** 2026-02-04
**Status:** Hackathon Build Complete | Agent #274 Active | 39 Tests Passing
