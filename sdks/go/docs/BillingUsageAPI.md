# \BillingUsageAPI

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateBillingPortal**](BillingUsageAPI.md#CreateBillingPortal) | **Post** /v1/billing/portal | Generate customer portal URL
[**CreateBillingSubscription**](BillingUsageAPI.md#CreateBillingSubscription) | **Post** /v1/billing/subscribe | Create or change subscription
[**GetBillingSubscription**](BillingUsageAPI.md#GetBillingSubscription) | **Get** /v1/billing/subscription | Get current subscription
[**GetBillingUsage**](BillingUsageAPI.md#GetBillingUsage) | **Get** /v1/billing/usage | Get current period usage
[**HandleBillingWebhook**](BillingUsageAPI.md#HandleBillingWebhook) | **Post** /v1/billing/webhook | Stripe webhook receiver
[**ListBillingInvoices**](BillingUsageAPI.md#ListBillingInvoices) | **Get** /v1/billing/invoices | List invoices



## CreateBillingPortal

> CreateBillingPortal200Response CreateBillingPortal(ctx).Execute()

Generate customer portal URL



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/sipher"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingUsageAPI.CreateBillingPortal(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingUsageAPI.CreateBillingPortal``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBillingPortal`: CreateBillingPortal200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingUsageAPI.CreateBillingPortal`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiCreateBillingPortalRequest struct via the builder pattern


### Return type

[**CreateBillingPortal200Response**](CreateBillingPortal200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateBillingSubscription

> CreateBillingSubscription200Response CreateBillingSubscription(ctx).CreateBillingSubscriptionRequest(createBillingSubscriptionRequest).Execute()

Create or change subscription



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/sipher"
)

func main() {
	createBillingSubscriptionRequest := *openapiclient.NewCreateBillingSubscriptionRequest("Plan_example") // CreateBillingSubscriptionRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingUsageAPI.CreateBillingSubscription(context.Background()).CreateBillingSubscriptionRequest(createBillingSubscriptionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingUsageAPI.CreateBillingSubscription``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBillingSubscription`: CreateBillingSubscription200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingUsageAPI.CreateBillingSubscription`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateBillingSubscriptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBillingSubscriptionRequest** | [**CreateBillingSubscriptionRequest**](CreateBillingSubscriptionRequest.md) |  | 

### Return type

[**CreateBillingSubscription200Response**](CreateBillingSubscription200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBillingSubscription

> GetBillingSubscription200Response GetBillingSubscription(ctx).Execute()

Get current subscription



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/sipher"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingUsageAPI.GetBillingSubscription(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingUsageAPI.GetBillingSubscription``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingSubscription`: GetBillingSubscription200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingUsageAPI.GetBillingSubscription`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingSubscriptionRequest struct via the builder pattern


### Return type

[**GetBillingSubscription200Response**](GetBillingSubscription200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBillingUsage

> GetBillingUsage200Response GetBillingUsage(ctx).Execute()

Get current period usage



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/sipher"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingUsageAPI.GetBillingUsage(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingUsageAPI.GetBillingUsage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingUsage`: GetBillingUsage200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingUsageAPI.GetBillingUsage`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingUsageRequest struct via the builder pattern


### Return type

[**GetBillingUsage200Response**](GetBillingUsage200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HandleBillingWebhook

> HandleBillingWebhook200Response HandleBillingWebhook(ctx).StripeSignature(stripeSignature).HandleBillingWebhookRequest(handleBillingWebhookRequest).Execute()

Stripe webhook receiver



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/sipher"
)

func main() {
	stripeSignature := "stripeSignature_example" // string | Stripe webhook signature for verification
	handleBillingWebhookRequest := *openapiclient.NewHandleBillingWebhookRequest("Type_example", map[string]interface{}(123)) // HandleBillingWebhookRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingUsageAPI.HandleBillingWebhook(context.Background()).StripeSignature(stripeSignature).HandleBillingWebhookRequest(handleBillingWebhookRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingUsageAPI.HandleBillingWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `HandleBillingWebhook`: HandleBillingWebhook200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingUsageAPI.HandleBillingWebhook`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiHandleBillingWebhookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stripeSignature** | **string** | Stripe webhook signature for verification | 
 **handleBillingWebhookRequest** | [**HandleBillingWebhookRequest**](HandleBillingWebhookRequest.md) |  | 

### Return type

[**HandleBillingWebhook200Response**](HandleBillingWebhook200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListBillingInvoices

> ListBillingInvoices200Response ListBillingInvoices(ctx).Limit(limit).Offset(offset).Execute()

List invoices



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/sipher"
)

func main() {
	limit := int32(56) // int32 |  (optional) (default to 10)
	offset := int32(56) // int32 |  (optional) (default to 0)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingUsageAPI.ListBillingInvoices(context.Background()).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingUsageAPI.ListBillingInvoices``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListBillingInvoices`: ListBillingInvoices200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingUsageAPI.ListBillingInvoices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListBillingInvoicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** |  | [default to 10]
 **offset** | **int32** |  | [default to 0]

### Return type

[**ListBillingInvoices200Response**](ListBillingInvoices200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

