# Sipher Client -- TypeScript

Privacy-as-a-Skill for multi-chain agents. TypeScript/JavaScript client for the Sipher Privacy API.

> Auto-generated from the [OpenAPI spec](https://sipher.sip-protocol.org/v1/openapi.json) using openapi-generator-cli.

## Installation

The package is not yet published to npm. Install from the local path:

```bash
# From the repository root
cd sdks/typescript
npm install
npm run build

# Then link or reference from your project
npm link @sip-protocol/sipher-client
```

## Configuration

```typescript
import { Configuration, HealthApi, StealthApi, CommitmentApi } from '@sip-protocol/sipher-client';

const config = new Configuration({
  basePath: 'https://sipher.sip-protocol.org',
  apiKey: 'your-api-key',
});
```

The `basePath` defaults to `https://sipher.sip-protocol.org` and can be omitted for production use. The `apiKey` is sent as the `X-API-Key` header on all authenticated requests.

## Usage

### Health Check

```typescript
const health = new HealthApi(config);

const result = await health.getHealth();
console.log(result.success); // true
console.log(result.data);    // { status, version, solana, uptime, memory }
```

### Generate Stealth Address

```typescript
const stealth = new StealthApi(config);

const result = await stealth.stealthGenerate({
  label: 'agent-wallet',
});

console.log(result.data.metaAddress);  // stealth meta-address
console.log(result.data.spendKey);     // spend private key
console.log(result.data.viewKey);      // view private key
```

### Create Pedersen Commitment

```typescript
const commitment = new CommitmentApi(config);

const result = await commitment.commitmentCreate({
  value: '1000000',
});

console.log(result.data.commitment);      // hex-encoded commitment
console.log(result.data.blindingFactor);  // hex-encoded blinding factor
```

## Error Handling

All Sipher API responses follow a consistent envelope:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;    // e.g. "VALIDATION_ERROR"
    message: string;
  };
}
```

When a request fails, the generated client throws a `ResponseError`. Inspect the response body for structured error details:

```typescript
import { ResponseError } from '@sip-protocol/sipher-client';

try {
  await stealth.stealthGenerate({ label: 'test' });
} catch (err) {
  if (err instanceof ResponseError) {
    const body = await err.response.json();
    console.error(body.error.code);    // "UNAUTHORIZED"
    console.error(body.error.message); // "Missing or invalid API key"
  }
}
```

## API Reference

Full interactive documentation is available at:

**https://sipher.sip-protocol.org/docs**

The OpenAPI specification is served at `/v1/openapi.json`.
