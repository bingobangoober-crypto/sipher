# GasAbstractionApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getJitoBundleStatus**](GasAbstractionApi.md#getjitobundlestatus) | **GET** /v1/jito/bundle/{id} | Poll bundle status |
| [**submitJitoBundle**](GasAbstractionApi.md#submitjitobundleoperation) | **POST** /v1/jito/relay | Submit transaction(s) via Jito bundle |



## getJitoBundleStatus

> GetJitoBundleStatus200Response getJitoBundleStatus(id)

Poll bundle status

Check the status of a previously submitted Jito bundle. Status progresses: submitted → bundled → confirming → confirmed.

### Example

```ts
import {
  Configuration,
  GasAbstractionApi,
} from '@sip-protocol/sipher-client';
import type { GetJitoBundleStatusRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GasAbstractionApi(config);

  const body = {
    // string | Jito bundle ID
    id: id_example,
  } satisfies GetJitoBundleStatusRequest;

  try {
    const data = await api.getJitoBundleStatus(body);
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
| **id** | `string` | Jito bundle ID | [Defaults to `undefined`] |

### Return type

[**GetJitoBundleStatus200Response**](GetJitoBundleStatus200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bundle status retrieved |  -  |
| **400** | Invalid bundle ID format |  -  |
| **404** | Bundle not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitJitoBundle

> SubmitJitoBundle200Response submitJitoBundle(submitJitoBundleRequest)

Submit transaction(s) via Jito bundle

Submit one or more transactions as a Jito bundle for MEV-protected execution. Optionally enable gas sponsorship (enterprise tier).

### Example

```ts
import {
  Configuration,
  GasAbstractionApi,
} from '@sip-protocol/sipher-client';
import type { SubmitJitoBundleOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GasAbstractionApi(config);

  const body = {
    // SubmitJitoBundleRequest
    submitJitoBundleRequest: ...,
  } satisfies SubmitJitoBundleOperationRequest;

  try {
    const data = await api.submitJitoBundle(body);
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
| **submitJitoBundleRequest** | [SubmitJitoBundleRequest](SubmitJitoBundleRequest.md) |  | |

### Return type

[**SubmitJitoBundle200Response**](SubmitJitoBundle200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bundle submitted successfully |  -  |
| **400** | Validation error or invalid transaction |  -  |
| **403** | Gas sponsorship requires enterprise tier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

