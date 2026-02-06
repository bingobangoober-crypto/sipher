# CSPLApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**csplTransfer**](CSPLApi.md#cspltransferoperation) | **POST** /v1/cspl/transfer | Confidential token transfer |
| [**csplUnwrap**](CSPLApi.md#csplunwrapoperation) | **POST** /v1/cspl/unwrap | Unwrap confidential tokens back to SPL |
| [**csplWrap**](CSPLApi.md#csplwrapoperation) | **POST** /v1/cspl/wrap | Wrap SPL tokens into confidential balance |



## csplTransfer

> CsplTransfer200Response csplTransfer(csplTransferRequest)

Confidential token transfer

Transfers confidential (C-SPL) tokens with hidden amount between accounts.

### Example

```ts
import {
  Configuration,
  CSPLApi,
} from '@sip-protocol/sipher-client';
import type { CsplTransferOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CSPLApi(config);

  const body = {
    // CsplTransferRequest
    csplTransferRequest: ...,
  } satisfies CsplTransferOperationRequest;

  try {
    const data = await api.csplTransfer(body);
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
| **csplTransferRequest** | [CsplTransferRequest](CsplTransferRequest.md) |  | |

### Return type

[**CsplTransfer200Response**](CsplTransfer200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Confidential transfer completed |  -  |
| **400** | Validation or operation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## csplUnwrap

> CsplUnwrap200Response csplUnwrap(csplUnwrapRequest)

Unwrap confidential tokens back to SPL

Unwraps confidential (C-SPL) tokens back to standard SPL token balance.

### Example

```ts
import {
  Configuration,
  CSPLApi,
} from '@sip-protocol/sipher-client';
import type { CsplUnwrapOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CSPLApi(config);

  const body = {
    // CsplUnwrapRequest
    csplUnwrapRequest: ...,
  } satisfies CsplUnwrapOperationRequest;

  try {
    const data = await api.csplUnwrap(body);
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
| **csplUnwrapRequest** | [CsplUnwrapRequest](CsplUnwrapRequest.md) |  | |

### Return type

[**CsplUnwrap200Response**](CsplUnwrap200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tokens unwrapped |  -  |
| **400** | Validation or operation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## csplWrap

> CsplWrap200Response csplWrap(csplWrapRequest)

Wrap SPL tokens into confidential balance

Wraps standard SPL tokens into a confidential (C-SPL) balance with encrypted amounts.

### Example

```ts
import {
  Configuration,
  CSPLApi,
} from '@sip-protocol/sipher-client';
import type { CsplWrapOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CSPLApi(config);

  const body = {
    // CsplWrapRequest
    csplWrapRequest: ...,
  } satisfies CsplWrapOperationRequest;

  try {
    const data = await api.csplWrap(body);
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
| **csplWrapRequest** | [CsplWrapRequest](CsplWrapRequest.md) |  | |

### Return type

[**CsplWrap200Response**](CsplWrap200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tokens wrapped into confidential balance |  -  |
| **400** | Validation or operation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

