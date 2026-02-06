# BackendsApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**backendsCompare**](BackendsApi.md#backendscompareoperation) | **POST** /v1/backends/compare | Compare privacy backends |
| [**backendsHealth**](BackendsApi.md#backendshealth) | **GET** /v1/backends/{id}/health | Check backend health |
| [**backendsList**](BackendsApi.md#backendslist) | **GET** /v1/backends | List privacy backends |
| [**backendsSelect**](BackendsApi.md#backendsselectoperation) | **POST** /v1/backends/select | Select preferred backend |



## backendsCompare

> BackendsCompare200Response backendsCompare(backendsCompareRequest)

Compare privacy backends

Compare available privacy backends for a given operation type, returning cost, latency, privacy level, and recommendations.

### Example

```ts
import {
  Configuration,
  BackendsApi,
} from '@sip-protocol/sipher-client';
import type { BackendsCompareOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BackendsApi(config);

  const body = {
    // BackendsCompareRequest
    backendsCompareRequest: ...,
  } satisfies BackendsCompareOperationRequest;

  try {
    const data = await api.backendsCompare(body);
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
| **backendsCompareRequest** | [BackendsCompareRequest](BackendsCompareRequest.md) |  | |

### Return type

[**BackendsCompare200Response**](BackendsCompare200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Backend comparison results with recommendations |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## backendsHealth

> BackendsHealth200Response backendsHealth(id)

Check backend health

Probes a specific backend for availability, returns circuit breaker state, metrics, and capabilities.

### Example

```ts
import {
  Configuration,
  BackendsApi,
} from '@sip-protocol/sipher-client';
import type { BackendsHealthRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BackendsApi(config);

  const body = {
    // string | Backend name (e.g., sip-native)
    id: id_example,
  } satisfies BackendsHealthRequest;

  try {
    const data = await api.backendsHealth(body);
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
| **id** | `string` | Backend name (e.g., sip-native) | [Defaults to `undefined`] |

### Return type

[**BackendsHealth200Response**](BackendsHealth200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Backend health details |  -  |
| **404** | Backend not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## backendsList

> BackendsList200Response backendsList()

List privacy backends

Returns all registered privacy backends with capabilities, health state, and priority. Backends implement different privacy strategies (stealth addresses, FHE, MPC).

### Example

```ts
import {
  Configuration,
  BackendsApi,
} from '@sip-protocol/sipher-client';
import type { BackendsListRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BackendsApi(config);

  try {
    const data = await api.backendsList();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**BackendsList200Response**](BackendsList200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of registered backends |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## backendsSelect

> BackendsSelect200Response backendsSelect(backendsSelectRequest)

Select preferred backend

Sets the preferred privacy backend for the authenticated API key. Requires a tiered API key.

### Example

```ts
import {
  Configuration,
  BackendsApi,
} from '@sip-protocol/sipher-client';
import type { BackendsSelectOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BackendsApi(config);

  const body = {
    // BackendsSelectRequest
    backendsSelectRequest: ...,
  } satisfies BackendsSelectOperationRequest;

  try {
    const data = await api.backendsSelect(body);
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
| **backendsSelectRequest** | [BackendsSelectRequest](BackendsSelectRequest.md) |  | |

### Return type

[**BackendsSelect200Response**](BackendsSelect200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Backend preference saved |  -  |
| **400** | Validation error or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

