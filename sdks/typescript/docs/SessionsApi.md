# SessionsApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSession**](SessionsApi.md#createsessionoperation) | **POST** /v1/sessions | Create agent session with default parameters (pro+) |
| [**deleteSession**](SessionsApi.md#deletesession) | **DELETE** /v1/sessions/{id} | Delete session (pro+) |
| [**getSession**](SessionsApi.md#getsession) | **GET** /v1/sessions/{id} | Get session configuration (pro+) |
| [**updateSession**](SessionsApi.md#updatesessionoperation) | **PATCH** /v1/sessions/{id} | Update session defaults (pro+) |



## createSession

> CreateSession201Response createSession(createSessionRequest)

Create agent session with default parameters (pro+)

Creates a session that stores default parameters (chain, backend, privacy level, etc.) applied to all subsequent requests via the X-Session-Id header. Requires pro or enterprise tier.

### Example

```ts
import {
  Configuration,
  SessionsApi,
} from '@sip-protocol/sipher-client';
import type { CreateSessionOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SessionsApi(config);

  const body = {
    // CreateSessionRequest
    createSessionRequest: ...,
  } satisfies CreateSessionOperationRequest;

  try {
    const data = await api.createSession(body);
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
| **createSessionRequest** | [CreateSessionRequest](CreateSessionRequest.md) |  | |

### Return type

[**CreateSession201Response**](CreateSession201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Session created |  -  |
| **400** | Invalid request body |  -  |
| **403** | Tier access denied (pro+ required) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSession

> DeleteSession200Response deleteSession(id)

Delete session (pro+)

Ends and deletes the session. The session ID will no longer be valid for subsequent requests.

### Example

```ts
import {
  Configuration,
  SessionsApi,
} from '@sip-protocol/sipher-client';
import type { DeleteSessionRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SessionsApi(config);

  const body = {
    // string | Session ID returned from POST /v1/sessions
    id: id_example,
  } satisfies DeleteSessionRequest;

  try {
    const data = await api.deleteSession(body);
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
| **id** | `string` | Session ID returned from POST /v1/sessions | [Defaults to `undefined`] |

### Return type

[**DeleteSession200Response**](DeleteSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session deleted |  -  |
| **400** | Invalid session ID format |  -  |
| **403** | Tier access denied (pro+ required) |  -  |
| **404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSession

> GetSession200Response getSession(id)

Get session configuration (pro+)

Retrieves session details including defaults and expiry. Only the session owner (same API key) can access it.

### Example

```ts
import {
  Configuration,
  SessionsApi,
} from '@sip-protocol/sipher-client';
import type { GetSessionRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SessionsApi(config);

  const body = {
    // string | Session ID returned from POST /v1/sessions
    id: id_example,
  } satisfies GetSessionRequest;

  try {
    const data = await api.getSession(body);
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
| **id** | `string` | Session ID returned from POST /v1/sessions | [Defaults to `undefined`] |

### Return type

[**GetSession200Response**](GetSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session found |  -  |
| **400** | Invalid session ID format |  -  |
| **403** | Tier access denied (pro+ required) |  -  |
| **404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSession

> UpdateSession200Response updateSession(id, updateSessionRequest)

Update session defaults (pro+)

Merges new defaults into the existing session. Only provided keys are updated; omitted keys remain unchanged.

### Example

```ts
import {
  Configuration,
  SessionsApi,
} from '@sip-protocol/sipher-client';
import type { UpdateSessionOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SessionsApi(config);

  const body = {
    // string | Session ID returned from POST /v1/sessions
    id: id_example,
    // UpdateSessionRequest
    updateSessionRequest: ...,
  } satisfies UpdateSessionOperationRequest;

  try {
    const data = await api.updateSession(body);
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
| **id** | `string` | Session ID returned from POST /v1/sessions | [Defaults to `undefined`] |
| **updateSessionRequest** | [UpdateSessionRequest](UpdateSessionRequest.md) |  | |

### Return type

[**UpdateSession200Response**](UpdateSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session updated |  -  |
| **400** | Invalid request body or session ID |  -  |
| **403** | Tier access denied (pro+ required) |  -  |
| **404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

