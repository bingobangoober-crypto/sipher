# Sipher

**Privacy-as-a-Skill REST API for Solana Agents** — powered by [SIP Protocol](https://sip-protocol.org)

Any autonomous agent can call Sipher to add stealth addresses, hidden amounts, and compliance viewing keys to Solana transactions.

[![Tests](https://img.shields.io/badge/tests-249%20passing-brightgreen)](tests/)
[![Endpoints](https://img.shields.io/badge/endpoints-70-blue)](skill.md)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## What It Does

| Capability | Description |
|-----------|-------------|
| **Stealth Addresses** | Generate one-time recipient addresses (ed25519 DKSAP) — prevents on-chain linkability |
| **Shielded Transfers** | Build unsigned Solana transactions with hidden recipients + Pedersen commitments |
| **Payment Scanning** | Detect incoming shielded payments using viewing keys |
| **Selective Disclosure** | Encrypt transaction data for auditors/compliance without revealing spending power |
| **Privacy Scoring** | Analyze wallet privacy posture (0-100 score with recommendations) |
| **ZK Proofs** | Generate/verify funding, validity, and fulfillment proofs (beta) |
| **C-SPL Tokens** | Wrap, unwrap, and transfer confidential SPL tokens (beta) |

## Quick Start

```bash
# Install
pnpm install

# Dev server (with Redis optional)
pnpm dev

# Run tests (249 tests)
pnpm test -- --run

# Type check
pnpm typecheck

# Build
pnpm build
```

## API Endpoints (70 total)

**Base URL:** `https://sipher.sip-protocol.org` | **Auth:** `X-API-Key` header | **Docs:** `/docs`

| Category | Endpoints | Description |
|----------|-----------|-------------|
| **Health** | `/v1/health`, `/v1/ready`, `/v1/errors` | Status, readiness, error catalog |
| **Stealth** | `/v1/stealth/generate`, `/derive`, `/check`, `/generate/batch` | Stealth address operations |
| **Transfer** | `/v1/transfer/shield`, `/claim` | Shielded SOL/SPL transfers |
| **Scan** | `/v1/scan/payments`, `/payments/batch` | Payment detection |
| **Commitment** | `/v1/commitment/create`, `/verify`, `/add`, `/subtract`, `/create/batch` | Pedersen commitments |
| **Viewing Key** | `/v1/viewing-key/generate`, `/derive`, `/verify-hierarchy`, `/disclose`, `/decrypt` | Compliance keys |
| **Privacy** | `/v1/privacy/score` | Wallet privacy analysis |
| **Proofs** | `/v1/proofs/funding/*`, `/validity/*`, `/fulfillment/*` | ZK proof generation/verification (beta) |
| **C-SPL** | `/v1/cspl/wrap`, `/unwrap`, `/transfer` | Confidential SPL tokens (beta) |
| **RPC** | `/v1/rpc/providers` | Provider configuration |
| **Webhooks** | `/v1/webhooks/*` | Push-based payment notifications |
| **Admin** | `/v1/admin/keys`, `/tiers` | API key management |

Full API reference: [`/docs`](https://sipher.sip-protocol.org/docs) | [`/skill.md`](https://sipher.sip-protocol.org/skill.md)

## Agent Workflow

```
1. Generate stealth meta-address     POST /v1/stealth/generate
2. Share meta-address with sender
3. Sender derives stealth address    POST /v1/stealth/derive
4. Sender builds shielded transfer   POST /v1/transfer/shield
5. Sender signs + submits the returned unsigned transaction
6. Recipient scans for payments      POST /v1/scan/payments
7. Recipient claims to real wallet   POST /v1/transfer/claim
8. If audit needed                   POST /v1/viewing-key/disclose
```

## Architecture

```
Agent (Claude, LangChain, OpenClaw, etc.)
    │
    ▼  REST API
┌──────────────────────────────────────┐
│            Sipher API                 │
│  Express 5 + Middleware Stack         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│  │  Auth   │ │  Rate   │ │Idempot- │ │
│  │(tiered) │ │ Limit   │ │  ency   │ │
│  └────┬────┘ └────┬────┘ └────┬────┘ │
│       └───────────┼───────────┘      │
└───────────────────┼──────────────────┘
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
┌────────────┐ ┌─────────┐ ┌─────────┐
│   Redis    │ │  @sip-  │ │ Solana  │
│  (cache,   │ │protocol │ │ Mainnet │
│  rate lim) │ │  /sdk   │ │  RPC    │
└────────────┘ └─────────┘ └─────────┘
                    │
                    ▼
              Solana Program
     S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js 22 |
| **Framework** | Express 5 |
| **Language** | TypeScript (strict mode) |
| **Cache** | Redis 7 (with in-memory fallback) |
| **Privacy** | @sip-protocol/sdk (stealth, Pedersen, XChaCha20-Poly1305) |
| **Blockchain** | @solana/web3.js, @solana/spl-token |
| **Validation** | Zod |
| **Logging** | Pino (structured JSON) |
| **Testing** | Vitest + Supertest (249 tests) |
| **Deploy** | Docker + GHCR + GitHub Actions |
| **Docs** | OpenAPI 3.1 + Swagger UI |

## Deployment

```bash
# Docker (with Redis)
docker compose up -d

# Environment variables
cp .env.example .env
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SOLANA_RPC_URL` | Yes | Solana RPC endpoint |
| `API_KEYS` | No | Comma-separated legacy API keys |
| `ADMIN_API_KEY` | No | Admin API key for key management |
| `REDIS_URL` | No | Redis connection URL (falls back to in-memory) |
| `CORS_ORIGINS` | No | Allowed CORS origins |
| `RPC_PROVIDER` | No | RPC provider: `helius`, `quicknode`, `triton`, `generic` |
| `RPC_PROVIDER_API_KEY` | No | API key for premium RPC provider |

## Rate Limits

| Tier | Requests/Hour | Features |
|------|---------------|----------|
| Free | 100 | Basic endpoints |
| Pro | 10,000 | All endpoints |
| Enterprise | 100,000 | All endpoints + priority support |

## License

MIT
