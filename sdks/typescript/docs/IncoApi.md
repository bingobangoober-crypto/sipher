# IncoApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**computeIncoCiphertexts**](IncoApi.md#computeincociphertextsoperation) | **POST** /v1/inco/compute | Compute on encrypted data |
| [**decryptIncoResult**](IncoApi.md#decryptincoresultoperation) | **POST** /v1/inco/decrypt | Decrypt FHE computation result |
| [**encryptIncoValue**](IncoApi.md#encryptincovalueoperation) | **POST** /v1/inco/encrypt | Encrypt value with FHE |



## computeIncoCiphertexts

> ComputeIncoCiphertexts200Response computeIncoCiphertexts(computeIncoCiphertextsRequest)

Compute on encrypted data

Perform a homomorphic operation on FHE ciphertexts. Operations complete synchronously. Tracks noise budget consumption.

### Example

```ts
import {
  Configuration,
  IncoApi,
} from '@sip-protocol/sipher-client';
import type { ComputeIncoCiphertextsOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new IncoApi(config);

  const body = {
    // ComputeIncoCiphertextsRequest
    computeIncoCiphertextsRequest: ...,
  } satisfies ComputeIncoCiphertextsOperationRequest;

  try {
    const data = await api.computeIncoCiphertexts(body);
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
| **computeIncoCiphertextsRequest** | [ComputeIncoCiphertextsRequest](ComputeIncoCiphertextsRequest.md) |  | |

### Return type

[**ComputeIncoCiphertexts200Response**](ComputeIncoCiphertexts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Computation completed |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## decryptIncoResult

> DecryptIncoResult200Response decryptIncoResult(decryptIncoResultRequest)

Decrypt FHE computation result

Decrypt the output of a completed FHE computation. Returns the plaintext result.

### Example

```ts
import {
  Configuration,
  IncoApi,
} from '@sip-protocol/sipher-client';
import type { DecryptIncoResultOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new IncoApi(config);

  const body = {
    // DecryptIncoResultRequest
    decryptIncoResultRequest: ...,
  } satisfies DecryptIncoResultOperationRequest;

  try {
    const data = await api.decryptIncoResult(body);
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
| **decryptIncoResultRequest** | [DecryptIncoResultRequest](DecryptIncoResultRequest.md) |  | |

### Return type

[**DecryptIncoResult200Response**](DecryptIncoResult200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Decryption result |  -  |
| **400** | Decrypt failed or invalid computation ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## encryptIncoValue

> EncryptIncoValue200Response encryptIncoValue(encryptIncoValueRequest)

Encrypt value with FHE

Encrypt a plaintext value using Fully Homomorphic Encryption (FHEW or TFHE scheme). Returns ciphertext and noise budget.

### Example

```ts
import {
  Configuration,
  IncoApi,
} from '@sip-protocol/sipher-client';
import type { EncryptIncoValueOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new IncoApi(config);

  const body = {
    // EncryptIncoValueRequest
    encryptIncoValueRequest: ...,
  } satisfies EncryptIncoValueOperationRequest;

  try {
    const data = await api.encryptIncoValue(body);
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
| **encryptIncoValueRequest** | [EncryptIncoValueRequest](EncryptIncoValueRequest.md) |  | |

### Return type

[**EncryptIncoValue200Response**](EncryptIncoValue200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Value encrypted successfully |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

