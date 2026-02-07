# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x     | Yes       |
| < 1.0   | No        |

## Reporting a Vulnerability

If you discover a security vulnerability in Sipher, please report it responsibly.

**Do NOT open a public GitHub issue.**

Instead, email: **rector@rectorspace.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

You will receive an acknowledgment within 48 hours and a detailed response within 5 business days.

## Security Model

### Authentication
- All mutation endpoints require API key authentication via `X-API-Key` header or `Bearer` token
- Keys are validated with timing-safe comparison to prevent timing attacks
- Public endpoints (health, docs, skill.md) bypass authentication

### Cryptographic Operations
- All cryptography is delegated to `@sip-protocol/sdk` — no custom crypto implementations
- Stealth addresses use Ed25519 (Solana/NEAR/Move) or secp256k1 (EVM/Cosmos/Bitcoin)
- Pedersen commitments use Ristretto255 group
- Private keys are never stored server-side; they transit request/response only

### Data Handling
- Audit logs automatically redact sensitive fields (private keys, blinding factors, viewing keys)
- No persistent storage of user cryptographic material
- Request bodies with sensitive data are sanitized before logging

### Rate Limiting
- Per-IP rate limiting (configurable, default 100 req/min)
- Daily quota metering per API key by operation category
- Idempotency keys prevent duplicate mutation execution

### Infrastructure
- Helmet.js security headers (CSP, HSTS, X-Frame-Options)
- CORS restricted to configured origins
- JSON body size limited to 1MB
- Graceful shutdown prevents request loss during deploys
