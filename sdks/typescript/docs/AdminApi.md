# AdminApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAdminKey**](AdminApi.md#createadminkeyoperation) | **POST** /v1/admin/keys | Create a new API key |
| [**getAdminKey**](AdminApi.md#getadminkey) | **GET** /v1/admin/keys/{id} | Get API key details |
| [**listAdminKeys**](AdminApi.md#listadminkeys) | **GET** /v1/admin/keys | List all API keys |
| [**listAdminTiers**](AdminApi.md#listadmintiers) | **GET** /v1/admin/tiers | List available tiers and limits |
| [**revokeAdminKey**](AdminApi.md#revokeadminkey) | **DELETE** /v1/admin/keys/{id} | Revoke an API key |



## createAdminKey

> CreateAdminKey201Response createAdminKey(createAdminKeyRequest)

Create a new API key

Creates a new tiered API key. The raw key is only shown once in the response. Requires admin API key.

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '@sip-protocol/sipher-client';
import type { CreateAdminKeyOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  const body = {
    // CreateAdminKeyRequest
    createAdminKeyRequest: ...,
  } satisfies CreateAdminKeyOperationRequest;

  try {
    const data = await api.createAdminKey(body);
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
| **createAdminKeyRequest** | [CreateAdminKeyRequest](CreateAdminKeyRequest.md) |  | |

### Return type

[**CreateAdminKey201Response**](CreateAdminKey201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | API key created |  -  |
| **400** | Validation error |  -  |
| **401** | Admin key required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdminKey

> GetAdminKey200Response getAdminKey(id)

Get API key details

Returns key details with masked key value and usage stats. Requires admin API key.

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '@sip-protocol/sipher-client';
import type { GetAdminKeyRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  const body = {
    // string | API key ID
    id: id_example,
  } satisfies GetAdminKeyRequest;

  try {
    const data = await api.getAdminKey(body);
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
| **id** | `string` | API key ID | [Defaults to `undefined`] |

### Return type

[**GetAdminKey200Response**](GetAdminKey200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key details |  -  |
| **401** | Admin key required |  -  |
| **404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAdminKeys

> ListAdminKeys200Response listAdminKeys()

List all API keys

Returns all API keys (masked). Requires admin API key.

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '@sip-protocol/sipher-client';
import type { ListAdminKeysRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  try {
    const data = await api.listAdminKeys();
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

[**ListAdminKeys200Response**](ListAdminKeys200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API keys listed |  -  |
| **401** | Admin key required |  -  |
| **503** | Admin API not configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAdminTiers

> ListAdminTiers200Response listAdminTiers()

List available tiers and limits

Returns all tier names and their associated rate/quota limits. Requires admin API key.

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '@sip-protocol/sipher-client';
import type { ListAdminTiersRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  try {
    const data = await api.listAdminTiers();
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

[**ListAdminTiers200Response**](ListAdminTiers200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tiers listed |  -  |
| **401** | Admin key required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeAdminKey

> RevokeAdminKey200Response revokeAdminKey(id)

Revoke an API key

Permanently revokes an API key. Requires admin API key.

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '@sip-protocol/sipher-client';
import type { RevokeAdminKeyRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  const body = {
    // string | API key ID
    id: id_example,
  } satisfies RevokeAdminKeyRequest;

  try {
    const data = await api.revokeAdminKey(body);
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
| **id** | `string` | API key ID | [Defaults to `undefined`] |

### Return type

[**RevokeAdminKey200Response**](RevokeAdminKey200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key revoked |  -  |
| **401** | Admin key required |  -  |
| **404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

