# TransferApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**transferClaim**](TransferApi.md#transferclaimoperation) | **POST** /v1/transfer/claim | Claim stealth payment (signed) |
| [**transferPrivate**](TransferApi.md#transferprivateoperation) | **POST** /v1/transfer/private | Build unified private transfer (chain-agnostic) |
| [**transferShield**](TransferApi.md#transfershieldoperation) | **POST** /v1/transfer/shield | Build shielded transfer (unsigned) |



## transferClaim

> TransferClaim200Response transferClaim(transferClaimRequest)

Claim stealth payment (signed)

Derives stealth private key, signs and submits claim transaction on-chain.

### Example

```ts
import {
  Configuration,
  TransferApi,
} from '@sip-protocol/sipher-client';
import type { TransferClaimOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransferApi(config);

  const body = {
    // TransferClaimRequest
    transferClaimRequest: ...,
  } satisfies TransferClaimOperationRequest;

  try {
    const data = await api.transferClaim(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **transferClaimRequest** | [TransferClaimRequest](TransferClaimRequest.md) |  | |

### Return type

[**TransferClaim200Response**](TransferClaim200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Claim transaction submitted |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transferPrivate

> TransferPrivate200Response transferPrivate(transferPrivateRequest)

Build unified private transfer (chain-agnostic)

Builds a private transfer to a stealth address on any supported chain. Returns chain-specific transaction data (Solana unsigned tx, EVM tx descriptor, or NEAR action descriptors). Currently supports: solana, ethereum, polygon, arbitrum, optimism, base, near.

### Example

```ts
import {
  Configuration,
  TransferApi,
} from '@sip-protocol/sipher-client';
import type { TransferPrivateOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransferApi(config);

  const body = {
    // TransferPrivateRequest
    transferPrivateRequest: ...,
  } satisfies TransferPrivateOperationRequest;

  try {
    const data = await api.transferPrivate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **transferPrivateRequest** | [TransferPrivateRequest](TransferPrivateRequest.md) |  | |

### Return type

[**TransferPrivate200Response**](TransferPrivate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Private transfer built successfully |  -  |
| **400** | Validation error |  -  |
| **422** | Chain not supported for transfers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transferShield

> TransferShield200Response transferShield(transferShieldRequest)

Build shielded transfer (unsigned)

Creates an unsigned Solana transaction sending to a stealth address with Pedersen commitment.

### Example

```ts
import {
  Configuration,
  TransferApi,
} from '@sip-protocol/sipher-client';
import type { TransferShieldOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransferApi(config);

  const body = {
    // TransferShieldRequest
    transferShieldRequest: ...,
  } satisfies TransferShieldOperationRequest;

  try {
    const data = await api.transferShield(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **transferShieldRequest** | [TransferShieldRequest](TransferShieldRequest.md) |  | |

### Return type

[**TransferShield200Response**](TransferShield200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unsigned transaction built |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

