# CommitmentApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**commitmentAdd**](CommitmentApi.md#commitmentaddoperation) | **POST** /v1/commitment/add | Add two commitments (homomorphic) |
| [**commitmentCreate**](CommitmentApi.md#commitmentcreateoperation) | **POST** /v1/commitment/create | Create Pedersen commitment |
| [**commitmentCreateBatch**](CommitmentApi.md#commitmentcreatebatchoperation) | **POST** /v1/commitment/create/batch | Batch create Pedersen commitments |
| [**commitmentSubtract**](CommitmentApi.md#commitmentsubtract) | **POST** /v1/commitment/subtract | Subtract two commitments (homomorphic) |
| [**commitmentVerify**](CommitmentApi.md#commitmentverifyoperation) | **POST** /v1/commitment/verify | Verify Pedersen commitment |



## commitmentAdd

> CommitmentAdd200Response commitmentAdd(commitmentAddRequest)

Add two commitments (homomorphic)

### Example

```ts
import {
  Configuration,
  CommitmentApi,
} from '@sip-protocol/sipher-client';
import type { CommitmentAddOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CommitmentApi(config);

  const body = {
    // CommitmentAddRequest
    commitmentAddRequest: ...,
  } satisfies CommitmentAddOperationRequest;

  try {
    const data = await api.commitmentAdd(body);
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
| **commitmentAddRequest** | [CommitmentAddRequest](CommitmentAddRequest.md) |  | |

### Return type

[**CommitmentAdd200Response**](CommitmentAdd200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sum commitment |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## commitmentCreate

> CommitmentCreate200Response commitmentCreate(commitmentCreateRequest)

Create Pedersen commitment

### Example

```ts
import {
  Configuration,
  CommitmentApi,
} from '@sip-protocol/sipher-client';
import type { CommitmentCreateOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CommitmentApi(config);

  const body = {
    // CommitmentCreateRequest
    commitmentCreateRequest: ...,
  } satisfies CommitmentCreateOperationRequest;

  try {
    const data = await api.commitmentCreate(body);
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
| **commitmentCreateRequest** | [CommitmentCreateRequest](CommitmentCreateRequest.md) |  | |

### Return type

[**CommitmentCreate200Response**](CommitmentCreate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Commitment created |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## commitmentCreateBatch

> CommitmentCreateBatch200Response commitmentCreateBatch(commitmentCreateBatchRequest)

Batch create Pedersen commitments

Create multiple Pedersen commitments in a single call. Max 100 per request.

### Example

```ts
import {
  Configuration,
  CommitmentApi,
} from '@sip-protocol/sipher-client';
import type { CommitmentCreateBatchOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CommitmentApi(config);

  const body = {
    // CommitmentCreateBatchRequest
    commitmentCreateBatchRequest: ...,
  } satisfies CommitmentCreateBatchOperationRequest;

  try {
    const data = await api.commitmentCreateBatch(body);
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
| **commitmentCreateBatchRequest** | [CommitmentCreateBatchRequest](CommitmentCreateBatchRequest.md) |  | |

### Return type

[**CommitmentCreateBatch200Response**](CommitmentCreateBatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch commitment results |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## commitmentSubtract

> CommitmentAdd200Response commitmentSubtract(commitmentAddRequest)

Subtract two commitments (homomorphic)

### Example

```ts
import {
  Configuration,
  CommitmentApi,
} from '@sip-protocol/sipher-client';
import type { CommitmentSubtractRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CommitmentApi(config);

  const body = {
    // CommitmentAddRequest
    commitmentAddRequest: ...,
  } satisfies CommitmentSubtractRequest;

  try {
    const data = await api.commitmentSubtract(body);
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
| **commitmentAddRequest** | [CommitmentAddRequest](CommitmentAddRequest.md) |  | |

### Return type

[**CommitmentAdd200Response**](CommitmentAdd200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Difference commitment |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## commitmentVerify

> CommitmentVerify200Response commitmentVerify(commitmentVerifyRequest)

Verify Pedersen commitment

### Example

```ts
import {
  Configuration,
  CommitmentApi,
} from '@sip-protocol/sipher-client';
import type { CommitmentVerifyOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CommitmentApi(config);

  const body = {
    // CommitmentVerifyRequest
    commitmentVerifyRequest: ...,
  } satisfies CommitmentVerifyOperationRequest;

  try {
    const data = await api.commitmentVerify(body);
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
| **commitmentVerifyRequest** | [CommitmentVerifyRequest](CommitmentVerifyRequest.md) |  | |

### Return type

[**CommitmentVerify200Response**](CommitmentVerify200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification result |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

