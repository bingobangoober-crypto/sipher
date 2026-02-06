# \SessionsAPI

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateSession**](SessionsAPI.md#CreateSession) | **Post** /v1/sessions | Create agent session with default parameters (pro+)
[**DeleteSession**](SessionsAPI.md#DeleteSession) | **Delete** /v1/sessions/{id} | Delete session (pro+)
[**GetSession**](SessionsAPI.md#GetSession) | **Get** /v1/sessions/{id} | Get session configuration (pro+)
[**UpdateSession**](SessionsAPI.md#UpdateSession) | **Patch** /v1/sessions/{id} | Update session defaults (pro+)



## CreateSession

> CreateSession201Response CreateSession(ctx).CreateSessionRequest(createSessionRequest).Execute()

Create agent session with default parameters (pro+)



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
	createSessionRequest := *openapiclient.NewCreateSessionRequest(*openapiclient.NewCreateSessionRequestDefaults()) // CreateSessionRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SessionsAPI.CreateSession(context.Background()).CreateSessionRequest(createSessionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SessionsAPI.CreateSession``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSession`: CreateSession201Response
	fmt.Fprintf(os.Stdout, "Response from `SessionsAPI.CreateSession`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSessionRequest** | [**CreateSessionRequest**](CreateSessionRequest.md) |  | 

### Return type

[**CreateSession201Response**](CreateSession201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteSession

> DeleteSession200Response DeleteSession(ctx, id).Execute()

Delete session (pro+)



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
	id := "id_example" // string | Session ID returned from POST /v1/sessions

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SessionsAPI.DeleteSession(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SessionsAPI.DeleteSession``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteSession`: DeleteSession200Response
	fmt.Fprintf(os.Stdout, "Response from `SessionsAPI.DeleteSession`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Session ID returned from POST /v1/sessions | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteSession200Response**](DeleteSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSession

> GetSession200Response GetSession(ctx, id).Execute()

Get session configuration (pro+)



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
	id := "id_example" // string | Session ID returned from POST /v1/sessions

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SessionsAPI.GetSession(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SessionsAPI.GetSession``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSession`: GetSession200Response
	fmt.Fprintf(os.Stdout, "Response from `SessionsAPI.GetSession`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Session ID returned from POST /v1/sessions | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetSession200Response**](GetSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSession

> UpdateSession200Response UpdateSession(ctx, id).UpdateSessionRequest(updateSessionRequest).Execute()

Update session defaults (pro+)



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
	id := "id_example" // string | Session ID returned from POST /v1/sessions
	updateSessionRequest := *openapiclient.NewUpdateSessionRequest(*openapiclient.NewCreateSessionRequestDefaults()) // UpdateSessionRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SessionsAPI.UpdateSession(context.Background(), id).UpdateSessionRequest(updateSessionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SessionsAPI.UpdateSession``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSession`: UpdateSession200Response
	fmt.Fprintf(os.Stdout, "Response from `SessionsAPI.UpdateSession`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Session ID returned from POST /v1/sessions | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateSessionRequest** | [**UpdateSessionRequest**](UpdateSessionRequest.md) |  | 

### Return type

[**UpdateSession200Response**](UpdateSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

