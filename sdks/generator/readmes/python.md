# Sipher Client -- Python

Privacy-as-a-Skill for multi-chain agents. Python client for the Sipher Privacy API.

> Auto-generated from the [OpenAPI spec](https://sipher.sip-protocol.org/v1/openapi.json) using openapi-generator-cli.

## Installation

The package is not yet published to PyPI. Install from the local path:

```bash
# From the repository root
pip install ./sdks/python
```

Requires Python >= 3.9.

## Configuration

```python
import sipher_client
from sipher_client.api import HealthApi, StealthApi, CommitmentApi

configuration = sipher_client.Configuration(
    host="https://sipher.sip-protocol.org",
    api_key={"ApiKeyAuth": "your-api-key"},
)
```

The `host` defaults to `https://sipher.sip-protocol.org` and can be omitted for production use. The API key is sent as the `X-API-Key` header on all authenticated requests.

## Usage

### Health Check

```python
with sipher_client.ApiClient(configuration) as client:
    health = HealthApi(client)

    result = health.get_health()
    print(result.success)  # True
    print(result.data)     # status, version, solana, uptime, memory
```

### Generate Stealth Address

```python
from sipher_client.models import StealthGenerateRequest

with sipher_client.ApiClient(configuration) as client:
    stealth = StealthApi(client)

    result = stealth.stealth_generate(
        StealthGenerateRequest(label="agent-wallet")
    )

    print(result.data.meta_address)  # stealth meta-address
    print(result.data.spend_key)     # spend private key
    print(result.data.view_key)      # view private key
```

### Create Pedersen Commitment

```python
from sipher_client.models import CommitmentCreateRequest

with sipher_client.ApiClient(configuration) as client:
    commitment = CommitmentApi(client)

    result = commitment.commitment_create(
        CommitmentCreateRequest(value="1000000")
    )

    print(result.data.commitment)       # hex-encoded commitment
    print(result.data.blinding_factor)  # hex-encoded blinding factor
```

## Error Handling

All Sipher API responses follow a consistent envelope:

```json
{
  "success": true,
  "data": { ... },
  "error": null
}
```

On failure, `success` is `false` and `error` contains a structured object with `code` and `message`. The client raises `ApiException` for non-2xx responses:

```python
from sipher_client.exceptions import ApiException

try:
    stealth.stealth_generate(StealthGenerateRequest(label="test"))
except ApiException as e:
    print(e.status)  # 401
    print(e.body)    # {"success": false, "error": {"code": "UNAUTHORIZED", ...}}
```

## API Reference

Full interactive documentation is available at:

**https://sipher.sip-protocol.org/docs**

The OpenAPI specification is served at `/v1/openapi.json`.
