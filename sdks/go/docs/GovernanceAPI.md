# \GovernanceAPI

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EncryptBallot**](GovernanceAPI.md#EncryptBallot) | **Post** /v1/governance/ballot/encrypt | Encrypt a vote ballot
[**GetTally**](GovernanceAPI.md#GetTally) | **Get** /v1/governance/tally/{id} | Get tally result
[**SubmitBallot**](GovernanceAPI.md#SubmitBallot) | **Post** /v1/governance/ballot/submit | Submit encrypted ballot to a proposal
[**TallyVotes**](GovernanceAPI.md#TallyVotes) | **Post** /v1/governance/tally | Tally votes for a proposal



## EncryptBallot

> EncryptBallot200Response EncryptBallot(ctx).EncryptBallotRequest(encryptBallotRequest).Execute()

Encrypt a vote ballot



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
	encryptBallotRequest := *openapiclient.NewEncryptBallotRequest("ProposalId_example", "Vote_example", "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef") // EncryptBallotRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GovernanceAPI.EncryptBallot(context.Background()).EncryptBallotRequest(encryptBallotRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GovernanceAPI.EncryptBallot``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `EncryptBallot`: EncryptBallot200Response
	fmt.Fprintf(os.Stdout, "Response from `GovernanceAPI.EncryptBallot`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiEncryptBallotRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encryptBallotRequest** | [**EncryptBallotRequest**](EncryptBallotRequest.md) |  | 

### Return type

[**EncryptBallot200Response**](EncryptBallot200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTally

> GetTally200Response GetTally(ctx, id).Execute()

Get tally result



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
	id := "id_example" // string | Tally ID returned from POST /v1/governance/tally

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GovernanceAPI.GetTally(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GovernanceAPI.GetTally``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTally`: GetTally200Response
	fmt.Fprintf(os.Stdout, "Response from `GovernanceAPI.GetTally`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Tally ID returned from POST /v1/governance/tally | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTallyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetTally200Response**](GetTally200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitBallot

> SubmitBallot200Response SubmitBallot(ctx).SubmitBallotRequest(submitBallotRequest).IdempotencyKey(idempotencyKey).Execute()

Submit encrypted ballot to a proposal



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
	submitBallotRequest := *openapiclient.NewSubmitBallotRequest("ProposalId_example", "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "Vote_example") // SubmitBallotRequest | 
	idempotencyKey := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | UUID v4 for idempotent submission (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GovernanceAPI.SubmitBallot(context.Background()).SubmitBallotRequest(submitBallotRequest).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GovernanceAPI.SubmitBallot``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitBallot`: SubmitBallot200Response
	fmt.Fprintf(os.Stdout, "Response from `GovernanceAPI.SubmitBallot`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitBallotRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitBallotRequest** | [**SubmitBallotRequest**](SubmitBallotRequest.md) |  | 
 **idempotencyKey** | **string** | UUID v4 for idempotent submission | 

### Return type

[**SubmitBallot200Response**](SubmitBallot200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TallyVotes

> TallyVotes200Response TallyVotes(ctx).TallyVotesRequest(tallyVotesRequest).IdempotencyKey(idempotencyKey).Execute()

Tally votes for a proposal



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
	tallyVotesRequest := *openapiclient.NewTallyVotesRequest("ProposalId_example") // TallyVotesRequest | 
	idempotencyKey := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | UUID v4 for idempotent tally (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GovernanceAPI.TallyVotes(context.Background()).TallyVotesRequest(tallyVotesRequest).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GovernanceAPI.TallyVotes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TallyVotes`: TallyVotes200Response
	fmt.Fprintf(os.Stdout, "Response from `GovernanceAPI.TallyVotes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTallyVotesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tallyVotesRequest** | [**TallyVotesRequest**](TallyVotesRequest.md) |  | 
 **idempotencyKey** | **string** | UUID v4 for idempotent tally | 

### Return type

[**TallyVotes200Response**](TallyVotes200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

