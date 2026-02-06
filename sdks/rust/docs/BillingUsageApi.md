# \BillingUsageApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_billing_portal**](BillingUsageApi.md#create_billing_portal) | **POST** /v1/billing/portal | Generate customer portal URL
[**create_billing_subscription**](BillingUsageApi.md#create_billing_subscription) | **POST** /v1/billing/subscribe | Create or change subscription
[**get_billing_subscription**](BillingUsageApi.md#get_billing_subscription) | **GET** /v1/billing/subscription | Get current subscription
[**get_billing_usage**](BillingUsageApi.md#get_billing_usage) | **GET** /v1/billing/usage | Get current period usage
[**handle_billing_webhook**](BillingUsageApi.md#handle_billing_webhook) | **POST** /v1/billing/webhook | Stripe webhook receiver
[**list_billing_invoices**](BillingUsageApi.md#list_billing_invoices) | **GET** /v1/billing/invoices | List invoices



## create_billing_portal

> models::CreateBillingPortal200Response create_billing_portal()
Generate customer portal URL

Creates a Stripe customer portal session URL. Requires pro or enterprise tier.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::CreateBillingPortal200Response**](createBillingPortal_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_billing_subscription

> models::CreateBillingSubscription200Response create_billing_subscription(create_billing_subscription_request)
Create or change subscription

Create a new subscription or change the plan of an existing active subscription.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_billing_subscription_request** | [**CreateBillingSubscriptionRequest**](CreateBillingSubscriptionRequest.md) |  | [required] |

### Return type

[**models::CreateBillingSubscription200Response**](createBillingSubscription_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_billing_subscription

> models::GetBillingSubscription200Response get_billing_subscription()
Get current subscription

Returns the current subscription details for the API key.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetBillingSubscription200Response**](getBillingSubscription_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_billing_usage

> models::GetBillingUsage200Response get_billing_usage()
Get current period usage

Returns daily operation usage broken down by category for the current API key.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetBillingUsage200Response**](getBillingUsage_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## handle_billing_webhook

> models::HandleBillingWebhook200Response handle_billing_webhook(stripe_signature, handle_billing_webhook_request)
Stripe webhook receiver

Receives and validates Stripe webhook events. Requires stripe-signature header. Bypasses API key auth.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**stripe_signature** | **String** | Stripe webhook signature for verification | [required] |
**handle_billing_webhook_request** | [**HandleBillingWebhookRequest**](HandleBillingWebhookRequest.md) |  | [required] |

### Return type

[**models::HandleBillingWebhook200Response**](handleBillingWebhook_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_billing_invoices

> models::ListBillingInvoices200Response list_billing_invoices(limit, offset)
List invoices

Returns paginated invoices for the current API key.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**limit** | Option<**i32**> |  |  |[default to 10]
**offset** | Option<**i32**> |  |  |[default to 0]

### Return type

[**models::ListBillingInvoices200Response**](listBillingInvoices_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

