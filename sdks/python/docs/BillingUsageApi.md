# sipher_client.BillingUsageApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_billing_portal**](BillingUsageApi.md#create_billing_portal) | **POST** /v1/billing/portal | Generate customer portal URL
[**create_billing_subscription**](BillingUsageApi.md#create_billing_subscription) | **POST** /v1/billing/subscribe | Create or change subscription
[**get_billing_subscription**](BillingUsageApi.md#get_billing_subscription) | **GET** /v1/billing/subscription | Get current subscription
[**get_billing_usage**](BillingUsageApi.md#get_billing_usage) | **GET** /v1/billing/usage | Get current period usage
[**handle_billing_webhook**](BillingUsageApi.md#handle_billing_webhook) | **POST** /v1/billing/webhook | Stripe webhook receiver
[**list_billing_invoices**](BillingUsageApi.md#list_billing_invoices) | **GET** /v1/billing/invoices | List invoices


# **create_billing_portal**
> CreateBillingPortal200Response create_billing_portal()

Generate customer portal URL

Creates a Stripe customer portal session URL. Requires pro or enterprise tier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.create_billing_portal200_response import CreateBillingPortal200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.BillingUsageApi(api_client)

    try:
        # Generate customer portal URL
        api_response = api_instance.create_billing_portal()
        print("The response of BillingUsageApi->create_billing_portal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingUsageApi->create_billing_portal: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CreateBillingPortal200Response**](CreateBillingPortal200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Portal session created |  -  |
**403** | Tier access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_billing_subscription**
> CreateBillingSubscription200Response create_billing_subscription(create_billing_subscription_request)

Create or change subscription

Create a new subscription or change the plan of an existing active subscription.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.create_billing_subscription200_response import CreateBillingSubscription200Response
from sipher_client.models.create_billing_subscription_request import CreateBillingSubscriptionRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.BillingUsageApi(api_client)
    create_billing_subscription_request = sipher_client.CreateBillingSubscriptionRequest() # CreateBillingSubscriptionRequest | 

    try:
        # Create or change subscription
        api_response = api_instance.create_billing_subscription(create_billing_subscription_request)
        print("The response of BillingUsageApi->create_billing_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingUsageApi->create_billing_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_billing_subscription_request** | [**CreateBillingSubscriptionRequest**](CreateBillingSubscriptionRequest.md)|  | 

### Return type

[**CreateBillingSubscription200Response**](CreateBillingSubscription200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription created or updated |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_billing_subscription**
> GetBillingSubscription200Response get_billing_subscription()

Get current subscription

Returns the current subscription details for the API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.get_billing_subscription200_response import GetBillingSubscription200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.BillingUsageApi(api_client)

    try:
        # Get current subscription
        api_response = api_instance.get_billing_subscription()
        print("The response of BillingUsageApi->get_billing_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingUsageApi->get_billing_subscription: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBillingSubscription200Response**](GetBillingSubscription200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_billing_usage**
> GetBillingUsage200Response get_billing_usage()

Get current period usage

Returns daily operation usage broken down by category for the current API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.get_billing_usage200_response import GetBillingUsage200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.BillingUsageApi(api_client)

    try:
        # Get current period usage
        api_response = api_instance.get_billing_usage()
        print("The response of BillingUsageApi->get_billing_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingUsageApi->get_billing_usage: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBillingUsage200Response**](GetBillingUsage200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usage data retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **handle_billing_webhook**
> HandleBillingWebhook200Response handle_billing_webhook(stripe_signature, handle_billing_webhook_request)

Stripe webhook receiver

Receives and validates Stripe webhook events. Requires stripe-signature header. Bypasses API key auth.

### Example


```python
import sipher_client
from sipher_client.models.handle_billing_webhook200_response import HandleBillingWebhook200Response
from sipher_client.models.handle_billing_webhook_request import HandleBillingWebhookRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)


# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.BillingUsageApi(api_client)
    stripe_signature = 'stripe_signature_example' # str | Stripe webhook signature for verification
    handle_billing_webhook_request = sipher_client.HandleBillingWebhookRequest() # HandleBillingWebhookRequest | 

    try:
        # Stripe webhook receiver
        api_response = api_instance.handle_billing_webhook(stripe_signature, handle_billing_webhook_request)
        print("The response of BillingUsageApi->handle_billing_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingUsageApi->handle_billing_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stripe_signature** | **str**| Stripe webhook signature for verification | 
 **handle_billing_webhook_request** | [**HandleBillingWebhookRequest**](HandleBillingWebhookRequest.md)|  | 

### Return type

[**HandleBillingWebhook200Response**](HandleBillingWebhook200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook processed |  -  |
**401** | Invalid webhook signature |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_billing_invoices**
> ListBillingInvoices200Response list_billing_invoices(limit=limit, offset=offset)

List invoices

Returns paginated invoices for the current API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.list_billing_invoices200_response import ListBillingInvoices200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.BillingUsageApi(api_client)
    limit = 10 # int |  (optional) (default to 10)
    offset = 0 # int |  (optional) (default to 0)

    try:
        # List invoices
        api_response = api_instance.list_billing_invoices(limit=limit, offset=offset)
        print("The response of BillingUsageApi->list_billing_invoices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingUsageApi->list_billing_invoices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] [default to 10]
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**ListBillingInvoices200Response**](ListBillingInvoices200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invoices retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

