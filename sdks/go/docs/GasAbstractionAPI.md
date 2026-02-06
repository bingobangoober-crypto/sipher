# \GasAbstractionAPI

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetJitoBundleStatus**](GasAbstractionAPI.md#GetJitoBundleStatus) | **Get** /v1/jito/bundle/{id} | Poll bundle status
[**SubmitJitoBundle**](GasAbstractionAPI.md#SubmitJitoBundle) | **Post** /v1/jito/relay | Submit transaction(s) via Jito bundle



## GetJitoBundleStatus

> GetJitoBundleStatus200Response GetJitoBundleStatus(ctx, id).Execute()

Poll bundle status



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
	id := "id_example" // string | Jito bundle ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GasAbstractionAPI.GetJitoBundleStatus(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GasAbstractionAPI.GetJitoBundleStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetJitoBundleStatus`: GetJitoBundleStatus200Response
	fmt.Fprintf(os.Stdout, "Response from `GasAbstractionAPI.GetJitoBundleStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Jito bundle ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetJitoBundleStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetJitoBundleStatus200Response**](GetJitoBundleStatus200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitJitoBundle

> SubmitJitoBundle200Response SubmitJitoBundle(ctx).SubmitJitoBundleRequest(submitJitoBundleRequest).Execute()

Submit transaction(s) via Jito bundle



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
	submitJitoBundleRequest := *openapiclient.NewSubmitJitoBundleRequest([]string{"Transactions_example"}) // SubmitJitoBundleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GasAbstractionAPI.SubmitJitoBundle(context.Background()).SubmitJitoBundleRequest(submitJitoBundleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GasAbstractionAPI.SubmitJitoBundle``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitJitoBundle`: SubmitJitoBundle200Response
	fmt.Fprintf(os.Stdout, "Response from `GasAbstractionAPI.SubmitJitoBundle`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitJitoBundleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitJitoBundleRequest** | [**SubmitJitoBundleRequest**](SubmitJitoBundleRequest.md) |  | 

### Return type

[**SubmitJitoBundle200Response**](SubmitJitoBundle200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

