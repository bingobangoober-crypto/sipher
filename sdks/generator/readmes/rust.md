# Sipher Client -- Rust

Privacy-as-a-Skill for multi-chain agents. Rust client for the Sipher Privacy API.

> Auto-generated from the [OpenAPI spec](https://sipher.sip-protocol.org/v1/openapi.json) using openapi-generator-cli.

## Installation

The crate is not yet published to crates.io. Add it as a path dependency:

```toml
# Cargo.toml
[dependencies]
sipher-client = { path = "../sdks/rust" }
tokio = { version = "1", features = ["full"] }
```

The crate uses `reqwest` with async support. TLS backend defaults to `native-tls`; enable the `rustls-tls` feature if preferred:

```toml
sipher-client = { path = "../sdks/rust", default-features = false, features = ["rustls-tls"] }
```

## Configuration

```rust
use sipher_client::apis::configuration::{Configuration, ApiKey};

let mut config = Configuration::new();
config.base_path = "https://sipher.sip-protocol.org".to_string();
config.api_key = Some(ApiKey {
    prefix: None,
    key: "your-api-key".to_string(),
});
```

The `base_path` defaults to `https://sipher.sip-protocol.org` and can be omitted for production use. The API key is sent as the `X-API-Key` header on all authenticated requests.

## Usage

### Health Check

```rust
use sipher_client::apis::health_api;

#[tokio::main]
async fn main() {
    let config = Configuration::new();

    let result = health_api::get_health(&config).await.unwrap();
    println!("success: {}", result.success.unwrap_or_default());
}
```

### Generate Stealth Address

```rust
use sipher_client::apis::{configuration::{Configuration, ApiKey}, stealth_api};
use sipher_client::models::StealthGenerateRequest;

#[tokio::main]
async fn main() {
    let mut config = Configuration::new();
    config.api_key = Some(ApiKey {
        prefix: None,
        key: "your-api-key".to_string(),
    });

    let request = StealthGenerateRequest {
        label: Some("agent-wallet".to_string()),
    };

    let result = stealth_api::stealth_generate(&config, request).await.unwrap();
    println!("{:?}", result.data);
}
```

### Create Pedersen Commitment

```rust
use sipher_client::apis::{configuration::{Configuration, ApiKey}, commitment_api};
use sipher_client::models::CommitmentCreateRequest;

#[tokio::main]
async fn main() {
    let mut config = Configuration::new();
    config.api_key = Some(ApiKey {
        prefix: None,
        key: "your-api-key".to_string(),
    });

    let request = CommitmentCreateRequest {
        value: "1000000".to_string(),
        blinding_factor: None,
    };

    let result = commitment_api::commitment_create(&config, request).await.unwrap();
    println!("{:?}", result.data);
}
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

The generated client returns `Result<T, Error<E>>` where `E` is an endpoint-specific error enum. Match on the error variant to handle specific failure cases:

```rust
use sipher_client::apis::{Error, stealth_api};

match stealth_api::stealth_generate(&config, request).await {
    Ok(response) => println!("{:?}", response.data),
    Err(Error::ResponseError(e)) => {
        eprintln!("status: {}", e.status);
        eprintln!("body: {}", e.content);
    }
    Err(e) => eprintln!("request failed: {}", e),
}
```

## API Reference

Full interactive documentation is available at:

**https://sipher.sip-protocol.org/docs**

The OpenAPI specification is served at `/v1/openapi.json`.
