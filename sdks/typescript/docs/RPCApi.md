# RPCApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getRpcProviders**](RPCApi.md#getrpcproviders) | **GET** /v1/rpc/providers | List supported RPC providers and active configuration |



## getRpcProviders

> GetRpcProviders200Response getRpcProviders()

List supported RPC providers and active configuration

### Example

```ts
import {
  Configuration,
  RPCApi,
} from '@sip-protocol/sipher-client';
import type { GetRpcProvidersRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RPCApi(config);

  try {
    const data = await api.getRpcProviders();
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

[**GetRpcProviders200Response**](GetRpcProviders200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active provider info and supported provider list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

