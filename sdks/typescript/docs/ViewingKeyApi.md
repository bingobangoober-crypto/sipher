# ViewingKeyApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**viewingKeyDecrypt**](ViewingKeyApi.md#viewingkeydecryptoperation) | **POST** /v1/viewing-key/decrypt | Decrypt transaction with viewing key |
| [**viewingKeyDerive**](ViewingKeyApi.md#viewingkeyderiveoperation) | **POST** /v1/viewing-key/derive | Derive child viewing key (BIP32-style) |
| [**viewingKeyDisclose**](ViewingKeyApi.md#viewingkeydiscloseoperation) | **POST** /v1/viewing-key/disclose | Encrypt transaction for disclosure |
| [**viewingKeyGenerate**](ViewingKeyApi.md#viewingkeygenerateoperation) | **POST** /v1/viewing-key/generate | Generate viewing key |
| [**viewingKeyVerifyHierarchy**](ViewingKeyApi.md#viewingkeyverifyhierarchyoperation) | **POST** /v1/viewing-key/verify-hierarchy | Verify viewing key parent-child relationship |



## viewingKeyDecrypt

> ViewingKeyDecrypt200Response viewingKeyDecrypt(viewingKeyDecryptRequest)

Decrypt transaction with viewing key

### Example

```ts
import {
  Configuration,
  ViewingKeyApi,
} from '@sip-protocol/sipher-client';
import type { ViewingKeyDecryptOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ViewingKeyApi(config);

  const body = {
    // ViewingKeyDecryptRequest
    viewingKeyDecryptRequest: ...,
  } satisfies ViewingKeyDecryptOperationRequest;

  try {
    const data = await api.viewingKeyDecrypt(body);
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
| **viewingKeyDecryptRequest** | [ViewingKeyDecryptRequest](ViewingKeyDecryptRequest.md) |  | |

### Return type

[**ViewingKeyDecrypt200Response**](ViewingKeyDecrypt200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Decrypted transaction data |  -  |
| **400** | Validation error |  -  |
| **500** | Decryption failed (key mismatch) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## viewingKeyDerive

> ViewingKeyDerive200Response viewingKeyDerive(viewingKeyDeriveRequest)

Derive child viewing key (BIP32-style)

Derives a child viewing key from a master key using HMAC-SHA512. Supports hierarchical key trees for scoped compliance access (per-auditor, per-timeframe).

### Example

```ts
import {
  Configuration,
  ViewingKeyApi,
} from '@sip-protocol/sipher-client';
import type { ViewingKeyDeriveOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ViewingKeyApi(config);

  const body = {
    // ViewingKeyDeriveRequest
    viewingKeyDeriveRequest: ...,
  } satisfies ViewingKeyDeriveOperationRequest;

  try {
    const data = await api.viewingKeyDerive(body);
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
| **viewingKeyDeriveRequest** | [ViewingKeyDeriveRequest](ViewingKeyDeriveRequest.md) |  | |

### Return type

[**ViewingKeyDerive200Response**](ViewingKeyDerive200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Derived child viewing key |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## viewingKeyDisclose

> ViewingKeyDisclose200Response viewingKeyDisclose(viewingKeyDiscloseRequest)

Encrypt transaction for disclosure

Encrypts transaction data so only the viewing key holder can decrypt it (selective compliance).

### Example

```ts
import {
  Configuration,
  ViewingKeyApi,
} from '@sip-protocol/sipher-client';
import type { ViewingKeyDiscloseOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ViewingKeyApi(config);

  const body = {
    // ViewingKeyDiscloseRequest
    viewingKeyDiscloseRequest: ...,
  } satisfies ViewingKeyDiscloseOperationRequest;

  try {
    const data = await api.viewingKeyDisclose(body);
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
| **viewingKeyDiscloseRequest** | [ViewingKeyDiscloseRequest](ViewingKeyDiscloseRequest.md) |  | |

### Return type

[**ViewingKeyDisclose200Response**](ViewingKeyDisclose200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Encrypted disclosure |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## viewingKeyGenerate

> ViewingKeyGenerate200Response viewingKeyGenerate(viewingKeyGenerateRequest)

Generate viewing key

### Example

```ts
import {
  Configuration,
  ViewingKeyApi,
} from '@sip-protocol/sipher-client';
import type { ViewingKeyGenerateOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ViewingKeyApi(config);

  const body = {
    // ViewingKeyGenerateRequest
    viewingKeyGenerateRequest: ...,
  } satisfies ViewingKeyGenerateOperationRequest;

  try {
    const data = await api.viewingKeyGenerate(body);
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
| **viewingKeyGenerateRequest** | [ViewingKeyGenerateRequest](ViewingKeyGenerateRequest.md) |  | |

### Return type

[**ViewingKeyGenerate200Response**](ViewingKeyGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Viewing key generated |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## viewingKeyVerifyHierarchy

> ViewingKeyVerifyHierarchy200Response viewingKeyVerifyHierarchy(viewingKeyVerifyHierarchyRequest)

Verify viewing key parent-child relationship

Verifies that a child viewing key was derived from a specific parent key at a given path.

### Example

```ts
import {
  Configuration,
  ViewingKeyApi,
} from '@sip-protocol/sipher-client';
import type { ViewingKeyVerifyHierarchyOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ViewingKeyApi(config);

  const body = {
    // ViewingKeyVerifyHierarchyRequest
    viewingKeyVerifyHierarchyRequest: ...,
  } satisfies ViewingKeyVerifyHierarchyOperationRequest;

  try {
    const data = await api.viewingKeyVerifyHierarchy(body);
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
| **viewingKeyVerifyHierarchyRequest** | [ViewingKeyVerifyHierarchyRequest](ViewingKeyVerifyHierarchyRequest.md) |  | |

### Return type

[**ViewingKeyVerifyHierarchy200Response**](ViewingKeyVerifyHierarchy200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Hierarchy verification result |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

