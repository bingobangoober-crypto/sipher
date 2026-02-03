# Sipher

**Privacy-as-a-Skill REST API for Solana Agents** — powered by [SIP Protocol](https://sip-protocol.org)

Any autonomous agent can call Sipher to add stealth addresses, hidden amounts, and compliance viewing keys to Solana transactions.

## What It Does

| Capability | Description |
|-----------|-------------|
| **Stealth Addresses** | Generate one-time recipient addresses (ed25519 DKSAP) — prevents on-chain linkability |
| **Shielded Transfers** | Build unsigned Solana transactions with hidden recipients + Pedersen commitments |
| **Payment Scanning** | Detect incoming shielded payments using viewing keys |
| **Selective Disclosure** | Encrypt transaction data for auditors/compliance without revealing spending power |

## Quick Start

```bash
# Install
pnpm install

# Dev server
pnpm dev

# Run tests (39 tests)
pnpm test -- --run

# Type check
pnpm typecheck

# Build
pnpm build
```

## API Endpoints

**Base URL:** `https://sipher.sip-protocol.org` | **Auth:** `X-API-Key` header

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Service info + endpoint directory |
| GET | `/skill.md` | OpenClaw skill file |
| GET | `/v1/health` | Health + Solana RPC status |
| POST | `/v1/stealth/generate` | Generate stealth meta-address keypair |
| POST | `/v1/stealth/derive` | Derive one-time stealth address |
| POST | `/v1/stealth/check` | Check stealth address ownership |
| POST | `/v1/transfer/shield` | Build unsigned shielded transfer (SOL/SPL) |
| POST | `/v1/transfer/claim` | Claim stealth payment (signed server-side) |
| POST | `/v1/scan/payments` | Scan for incoming stealth payments |
| POST | `/v1/commitment/create` | Create Pedersen commitment |
| POST | `/v1/commitment/verify` | Verify commitment opening |
| POST | `/v1/viewing-key/generate` | Generate viewing key |
| POST | `/v1/viewing-key/disclose` | Encrypt tx data for auditor |

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
┌──────────────────┐
│     Sipher        │  Express + middleware stack
│  (this repo)      │  Auth, rate limiting, validation
└──────┬───────────┘
       │
       ▼  npm package
┌──────────────────┐
│ @sip-protocol/sdk │  Stealth addresses, Pedersen commitments,
│                    │  viewing keys, encryption
└──────┬───────────┘
       │
       ▼  RPC
┌──────────────────┐
│  Solana Mainnet   │  Program: S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at
└──────────────────┘
```

## Tech Stack

- **Runtime:** Node.js 22
- **Framework:** Express 5
- **Language:** TypeScript (strict)
- **Privacy:** @sip-protocol/sdk (stealth addresses, Pedersen commitments, XChaCha20-Poly1305)
- **Blockchain:** @solana/web3.js, @solana/spl-token
- **Validation:** Zod
- **Logging:** Pino
- **Testing:** Vitest + Supertest (39 tests)
- **Deploy:** Docker + GHCR + GitHub Actions

## Deployment

```bash
# Docker
docker compose up -d

# Environment variables
cp .env.example .env
# Edit .env with your API keys and Solana RPC URL
```

## License

MIT
