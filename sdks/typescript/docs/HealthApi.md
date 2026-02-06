# HealthApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getErrors**](HealthApi.md#geterrors) | **GET** /v1/errors | Error code catalog |
| [**getHealth**](HealthApi.md#gethealth) | **GET** /v1/health | Health check |
| [**getReady**](HealthApi.md#getready) | **GET** /v1/ready | Readiness probe |



## getErrors

> GetErrors200Response getErrors()

Error code catalog

Returns all API error codes with descriptions, HTTP statuses, and retry guidance.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@sip-protocol/sipher-client';
import type { GetErrorsRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const api = new HealthApi();

  try {
    const data = await api.getErrors();
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

[**GetErrors200Response**](GetErrors200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Error catalog |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHealth

> GetHealth200Response getHealth()

Health check

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@sip-protocol/sipher-client';
import type { GetHealthRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const api = new HealthApi();

  try {
    const data = await api.getHealth();
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

[**GetHealth200Response**](GetHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service is healthy |  -  |
| **503** | Service unhealthy or shutting down |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReady

> GetReady200Response getReady()

Readiness probe

Returns 200 only if all critical systems are healthy. Use as Docker/k8s readiness probe.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@sip-protocol/sipher-client';
import type { GetReadyRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const api = new HealthApi();

  try {
    const data = await api.getReady();
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

[**GetReady200Response**](GetReady200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service is ready to accept requests |  -  |
| **503** | Service not ready |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

