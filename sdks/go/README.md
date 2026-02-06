# Sipher Client -- Go

Privacy-as-a-Skill for multi-chain agents. Go client for the Sipher Privacy API.

> Auto-generated from the [OpenAPI spec](https://sipher.sip-protocol.org/v1/openapi.json) using openapi-generator-cli.

## Installation

The module is not yet published. Reference it as a local replace directive or copy `sdks/go` into your project:

```bash
# Copy into your module or use a replace directive
go get github.com/sip-protocol/sipher/sdks/go
```

For local development with a replace directive:

```go
// go.mod
replace github.com/sip-protocol/sipher/sdks/go => ../sdks/go
```

Requires Go >= 1.23.

## Configuration

```go
package main

import (
    "context"
    sipher "github.com/sip-protocol/sipher/sdks/go"
)

func main() {
    config := sipher.NewConfiguration()

    // API key authentication
    ctx := context.WithValue(
        context.Background(),
        sipher.ContextAPIKeys,
        map[string]sipher.APIKey{
            "ApiKeyAuth": {Key: "your-api-key"},
        },
    )

    client := sipher.NewAPIClient(config)
    // Use client.HealthAPI, client.StealthAPI, client.CommitmentAPI, etc.
}
```

The default server is `https://sipher.sip-protocol.org`. The API key is sent as the `X-API-Key` header on all authenticated requests.

## Usage

### Health Check

```go
result, resp, err := client.HealthAPI.GetHealth(ctx).Execute()
if err != nil {
    log.Fatalf("health check failed: %v", err)
}
defer resp.Body.Close()

fmt.Println(*result.Success) // true
```

### Generate Stealth Address

```go
label := "agent-wallet"
request := *sipher.NewStealthGenerateRequest()
request.SetLabel(label)

result, resp, err := client.StealthAPI.StealthGenerate(ctx).
    StealthGenerateRequest(request).
    Execute()
if err != nil {
    log.Fatalf("stealth generate failed: %v", err)
}
defer resp.Body.Close()

fmt.Println(result.Data.GetMetaAddress())
fmt.Println(result.Data.GetSpendKey())
fmt.Println(result.Data.GetViewKey())
```

### Create Pedersen Commitment

```go
request := *sipher.NewCommitmentCreateRequest("1000000")

result, resp, err := client.CommitmentAPI.CommitmentCreate(ctx).
    CommitmentCreateRequest(request).
    Execute()
if err != nil {
    log.Fatalf("commitment create failed: %v", err)
}
defer resp.Body.Close()

fmt.Println(result.Data.GetCommitment())
fmt.Println(result.Data.GetBlindingFactor())
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

On failure, `success` is `false` and `error` contains a structured object with `code` and `message`. The client returns a `*GenericOpenAPIError` that provides access to the response body:

```go
result, resp, err := client.StealthAPI.StealthGenerate(ctx).
    StealthGenerateRequest(request).
    Execute()
if err != nil {
    if apiErr, ok := err.(*sipher.GenericOpenAPIError); ok {
        fmt.Println("status:", resp.StatusCode)
        fmt.Println("body:", string(apiErr.Body()))
    }
}
```

## API Reference

Full interactive documentation is available at:

**https://sipher.sip-protocol.org/docs**

The OpenAPI specification is served at `/v1/openapi.json`.
