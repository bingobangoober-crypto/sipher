# SwapApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**privateSwap**](SwapApi.md#privateswapoperation) | **POST** /v1/swap/private | Privacy-preserving token swap via Jupiter DEX |



## privateSwap

> PrivateSwap200Response privateSwap(privateSwapRequest)

Privacy-preserving token swap via Jupiter DEX

Composite endpoint orchestrating stealth address generation, optional C-SPL wrapping, and Jupiter DEX swap into a single privacy-preserving token swap. Output is routed to a stealth address with Pedersen commitment. Supports ephemeral stealth addresses for agents without persistent meta-address.

### Example

```ts
import {
  Configuration,
  SwapApi,
} from '@sip-protocol/sipher-client';
import type { PrivateSwapOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SwapApi(config);

  const body = {
    // PrivateSwapRequest
    privateSwapRequest: ...,
  } satisfies PrivateSwapOperationRequest;

  try {
    const data = await api.privateSwap(body);
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
| **privateSwapRequest** | [PrivateSwapRequest](PrivateSwapRequest.md) |  | |

### Return type

[**PrivateSwap200Response**](PrivateSwap200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Private swap built successfully |  -  |
| **400** | Validation error or unsupported token |  -  |
| **500** | Swap orchestration failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

