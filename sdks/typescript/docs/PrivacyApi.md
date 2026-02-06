# PrivacyApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**privacyScore**](PrivacyApi.md#privacyscoreoperation) | **POST** /v1/privacy/score | Analyze wallet privacy score |



## privacyScore

> PrivacyScore200Response privacyScore(privacyScoreRequest)

Analyze wallet privacy score

Analyzes on-chain activity of a Solana wallet and returns a 0-100 privacy score with breakdown by factor and actionable recommendations.

### Example

```ts
import {
  Configuration,
  PrivacyApi,
} from '@sip-protocol/sipher-client';
import type { PrivacyScoreOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PrivacyApi(config);

  const body = {
    // PrivacyScoreRequest
    privacyScoreRequest: ...,
  } satisfies PrivacyScoreOperationRequest;

  try {
    const data = await api.privacyScore(body);
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
| **privacyScoreRequest** | [PrivacyScoreRequest](PrivacyScoreRequest.md) |  | |

### Return type

[**PrivacyScore200Response**](PrivacyScore200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Privacy score analysis |  -  |
| **400** | Invalid address |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

