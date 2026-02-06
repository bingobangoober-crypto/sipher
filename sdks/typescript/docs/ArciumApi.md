# ArciumApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**decryptArciumResult**](ArciumApi.md#decryptarciumresultoperation) | **POST** /v1/arcium/decrypt | Decrypt computation result |
| [**getArciumComputationStatus**](ArciumApi.md#getarciumcomputationstatus) | **GET** /v1/arcium/compute/{id}/status | Get computation status |
| [**submitArciumComputation**](ArciumApi.md#submitarciumcomputationoperation) | **POST** /v1/arcium/compute | Submit MPC computation |



## decryptArciumResult

> DecryptArciumResult200Response decryptArciumResult(decryptArciumResultRequest)

Decrypt computation result

Decrypt the output of a completed MPC computation using a viewing key.

### Example

```ts
import {
  Configuration,
  ArciumApi,
} from '@sip-protocol/sipher-client';
import type { DecryptArciumResultOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ArciumApi(config);

  const body = {
    // DecryptArciumResultRequest
    decryptArciumResultRequest: ...,
  } satisfies DecryptArciumResultOperationRequest;

  try {
    const data = await api.decryptArciumResult(body);
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
| **decryptArciumResultRequest** | [DecryptArciumResultRequest](DecryptArciumResultRequest.md) |  | |

### Return type

[**DecryptArciumResult200Response**](DecryptArciumResult200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Decryption result |  -  |
| **400** | Decrypt failed or computation incomplete |  -  |
| **404** | Computation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getArciumComputationStatus

> GetArciumComputationStatus200Response getArciumComputationStatus(id)

Get computation status

Poll the status of an MPC computation. Status progresses: submitted → encrypting → processing → finalizing → completed.

### Example

```ts
import {
  Configuration,
  ArciumApi,
} from '@sip-protocol/sipher-client';
import type { GetArciumComputationStatusRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ArciumApi(config);

  const body = {
    // string | Computation ID
    id: id_example,
  } satisfies GetArciumComputationStatusRequest;

  try {
    const data = await api.getArciumComputationStatus(body);
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
| **id** | `string` | Computation ID | [Defaults to `undefined`] |

### Return type

[**GetArciumComputationStatus200Response**](GetArciumComputationStatus200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Computation status |  -  |
| **404** | Computation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitArciumComputation

> SubmitArciumComputation200Response submitArciumComputation(submitArciumComputationRequest)

Submit MPC computation

Submit an encrypted computation to the Arcium MPC cluster. Returns a computation ID for status polling.

### Example

```ts
import {
  Configuration,
  ArciumApi,
} from '@sip-protocol/sipher-client';
import type { SubmitArciumComputationOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ArciumApi(config);

  const body = {
    // SubmitArciumComputationRequest
    submitArciumComputationRequest: ...,
  } satisfies SubmitArciumComputationOperationRequest;

  try {
    const data = await api.submitArciumComputation(body);
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
| **submitArciumComputationRequest** | [SubmitArciumComputationRequest](SubmitArciumComputationRequest.md) |  | |

### Return type

[**SubmitArciumComputation200Response**](SubmitArciumComputation200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Computation submitted successfully |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

