# BillingUsageApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBillingPortal**](BillingUsageApi.md#createbillingportal) | **POST** /v1/billing/portal | Generate customer portal URL |
| [**createBillingSubscription**](BillingUsageApi.md#createbillingsubscriptionoperation) | **POST** /v1/billing/subscribe | Create or change subscription |
| [**getBillingSubscription**](BillingUsageApi.md#getbillingsubscription) | **GET** /v1/billing/subscription | Get current subscription |
| [**getBillingUsage**](BillingUsageApi.md#getbillingusage) | **GET** /v1/billing/usage | Get current period usage |
| [**handleBillingWebhook**](BillingUsageApi.md#handlebillingwebhookoperation) | **POST** /v1/billing/webhook | Stripe webhook receiver |
| [**listBillingInvoices**](BillingUsageApi.md#listbillinginvoices) | **GET** /v1/billing/invoices | List invoices |



## createBillingPortal

> CreateBillingPortal200Response createBillingPortal()

Generate customer portal URL

Creates a Stripe customer portal session URL. Requires pro or enterprise tier.

### Example

```ts
import {
  Configuration,
  BillingUsageApi,
} from '@sip-protocol/sipher-client';
import type { CreateBillingPortalRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BillingUsageApi(config);

  try {
    const data = await api.createBillingPortal();
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

[**CreateBillingPortal200Response**](CreateBillingPortal200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Portal session created |  -  |
| **403** | Tier access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBillingSubscription

> CreateBillingSubscription200Response createBillingSubscription(createBillingSubscriptionRequest)

Create or change subscription

Create a new subscription or change the plan of an existing active subscription.

### Example

```ts
import {
  Configuration,
  BillingUsageApi,
} from '@sip-protocol/sipher-client';
import type { CreateBillingSubscriptionOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BillingUsageApi(config);

  const body = {
    // CreateBillingSubscriptionRequest
    createBillingSubscriptionRequest: ...,
  } satisfies CreateBillingSubscriptionOperationRequest;

  try {
    const data = await api.createBillingSubscription(body);
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
| **createBillingSubscriptionRequest** | [CreateBillingSubscriptionRequest](CreateBillingSubscriptionRequest.md) |  | |

### Return type

[**CreateBillingSubscription200Response**](CreateBillingSubscription200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscription created or updated |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBillingSubscription

> GetBillingSubscription200Response getBillingSubscription()

Get current subscription

Returns the current subscription details for the API key.

### Example

```ts
import {
  Configuration,
  BillingUsageApi,
} from '@sip-protocol/sipher-client';
import type { GetBillingSubscriptionRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BillingUsageApi(config);

  try {
    const data = await api.getBillingSubscription();
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

[**GetBillingSubscription200Response**](GetBillingSubscription200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscription details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBillingUsage

> GetBillingUsage200Response getBillingUsage()

Get current period usage

Returns daily operation usage broken down by category for the current API key.

### Example

```ts
import {
  Configuration,
  BillingUsageApi,
} from '@sip-protocol/sipher-client';
import type { GetBillingUsageRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BillingUsageApi(config);

  try {
    const data = await api.getBillingUsage();
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

[**GetBillingUsage200Response**](GetBillingUsage200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Usage data retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## handleBillingWebhook

> HandleBillingWebhook200Response handleBillingWebhook(stripeSignature, handleBillingWebhookRequest)

Stripe webhook receiver

Receives and validates Stripe webhook events. Requires stripe-signature header. Bypasses API key auth.

### Example

```ts
import {
  Configuration,
  BillingUsageApi,
} from '@sip-protocol/sipher-client';
import type { HandleBillingWebhookOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const api = new BillingUsageApi();

  const body = {
    // string | Stripe webhook signature for verification
    stripeSignature: stripeSignature_example,
    // HandleBillingWebhookRequest
    handleBillingWebhookRequest: ...,
  } satisfies HandleBillingWebhookOperationRequest;

  try {
    const data = await api.handleBillingWebhook(body);
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
| **stripeSignature** | `string` | Stripe webhook signature for verification | [Defaults to `undefined`] |
| **handleBillingWebhookRequest** | [HandleBillingWebhookRequest](HandleBillingWebhookRequest.md) |  | |

### Return type

[**HandleBillingWebhook200Response**](HandleBillingWebhook200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook processed |  -  |
| **401** | Invalid webhook signature |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBillingInvoices

> ListBillingInvoices200Response listBillingInvoices(limit, offset)

List invoices

Returns paginated invoices for the current API key.

### Example

```ts
import {
  Configuration,
  BillingUsageApi,
} from '@sip-protocol/sipher-client';
import type { ListBillingInvoicesRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BillingUsageApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListBillingInvoicesRequest;

  try {
    const data = await api.listBillingInvoices(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

[**ListBillingInvoices200Response**](ListBillingInvoices200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invoices retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

