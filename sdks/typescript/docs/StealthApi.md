# StealthApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**stealthCheck**](StealthApi.md#stealthcheckoperation) | **POST** /v1/stealth/check | Check stealth address ownership |
| [**stealthDerive**](StealthApi.md#stealthderiveoperation) | **POST** /v1/stealth/derive | Derive one-time stealth address |
| [**stealthGenerate**](StealthApi.md#stealthgenerateoperation) | **POST** /v1/stealth/generate | Generate stealth meta-address keypair |
| [**stealthGenerateBatch**](StealthApi.md#stealthgeneratebatchoperation) | **POST** /v1/stealth/generate/batch | Batch generate stealth keypairs |



## stealthCheck

> StealthCheck200Response stealthCheck(stealthCheckRequest)

Check stealth address ownership

### Example

```ts
import {
  Configuration,
  StealthApi,
} from '@sip-protocol/sipher-client';
import type { StealthCheckOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StealthApi(config);

  const body = {
    // StealthCheckRequest
    stealthCheckRequest: ...,
  } satisfies StealthCheckOperationRequest;

  try {
    const data = await api.stealthCheck(body);
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
| **stealthCheckRequest** | [StealthCheckRequest](StealthCheckRequest.md) |  | |

### Return type

[**StealthCheck200Response**](StealthCheck200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ownership check result |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stealthDerive

> StealthDerive200Response stealthDerive(stealthDeriveRequest)

Derive one-time stealth address

### Example

```ts
import {
  Configuration,
  StealthApi,
} from '@sip-protocol/sipher-client';
import type { StealthDeriveOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StealthApi(config);

  const body = {
    // StealthDeriveRequest
    stealthDeriveRequest: ...,
  } satisfies StealthDeriveOperationRequest;

  try {
    const data = await api.stealthDerive(body);
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
| **stealthDeriveRequest** | [StealthDeriveRequest](StealthDeriveRequest.md) |  | |

### Return type

[**StealthDerive200Response**](StealthDerive200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stealth address derived |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stealthGenerate

> StealthGenerate200Response stealthGenerate(stealthGenerateRequest)

Generate stealth meta-address keypair

### Example

```ts
import {
  Configuration,
  StealthApi,
} from '@sip-protocol/sipher-client';
import type { StealthGenerateOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StealthApi(config);

  const body = {
    // StealthGenerateRequest
    stealthGenerateRequest: ...,
  } satisfies StealthGenerateOperationRequest;

  try {
    const data = await api.stealthGenerate(body);
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
| **stealthGenerateRequest** | [StealthGenerateRequest](StealthGenerateRequest.md) |  | |

### Return type

[**StealthGenerate200Response**](StealthGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stealth meta-address generated |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stealthGenerateBatch

> StealthGenerateBatch200Response stealthGenerateBatch(stealthGenerateBatchRequest)

Batch generate stealth keypairs

Generate multiple stealth meta-address keypairs in a single call. Max 100 per request.

### Example

```ts
import {
  Configuration,
  StealthApi,
} from '@sip-protocol/sipher-client';
import type { StealthGenerateBatchOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StealthApi(config);

  const body = {
    // StealthGenerateBatchRequest
    stealthGenerateBatchRequest: ...,
  } satisfies StealthGenerateBatchOperationRequest;

  try {
    const data = await api.stealthGenerateBatch(body);
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
| **stealthGenerateBatchRequest** | [StealthGenerateBatchRequest](StealthGenerateBatchRequest.md) |  | |

### Return type

[**StealthGenerateBatch200Response**](StealthGenerateBatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch generation results |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

