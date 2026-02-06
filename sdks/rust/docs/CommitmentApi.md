# \CommitmentApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commitment_add**](CommitmentApi.md#commitment_add) | **POST** /v1/commitment/add | Add two commitments (homomorphic)
[**commitment_create**](CommitmentApi.md#commitment_create) | **POST** /v1/commitment/create | Create Pedersen commitment
[**commitment_create_batch**](CommitmentApi.md#commitment_create_batch) | **POST** /v1/commitment/create/batch | Batch create Pedersen commitments
[**commitment_subtract**](CommitmentApi.md#commitment_subtract) | **POST** /v1/commitment/subtract | Subtract two commitments (homomorphic)
[**commitment_verify**](CommitmentApi.md#commitment_verify) | **POST** /v1/commitment/verify | Verify Pedersen commitment



## commitment_add

> models::CommitmentAdd200Response commitment_add(commitment_add_request)
Add two commitments (homomorphic)

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**commitment_add_request** | [**CommitmentAddRequest**](CommitmentAddRequest.md) |  | [required] |

### Return type

[**models::CommitmentAdd200Response**](commitmentAdd_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## commitment_create

> models::CommitmentCreate200Response commitment_create(commitment_create_request)
Create Pedersen commitment

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**commitment_create_request** | [**CommitmentCreateRequest**](CommitmentCreateRequest.md) |  | [required] |

### Return type

[**models::CommitmentCreate200Response**](commitmentCreate_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## commitment_create_batch

> models::CommitmentCreateBatch200Response commitment_create_batch(commitment_create_batch_request)
Batch create Pedersen commitments

Create multiple Pedersen commitments in a single call. Max 100 per request.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**commitment_create_batch_request** | [**CommitmentCreateBatchRequest**](CommitmentCreateBatchRequest.md) |  | [required] |

### Return type

[**models::CommitmentCreateBatch200Response**](commitmentCreateBatch_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## commitment_subtract

> models::CommitmentAdd200Response commitment_subtract(commitment_add_request)
Subtract two commitments (homomorphic)

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**commitment_add_request** | [**CommitmentAddRequest**](CommitmentAddRequest.md) |  | [required] |

### Return type

[**models::CommitmentAdd200Response**](commitmentAdd_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## commitment_verify

> models::CommitmentVerify200Response commitment_verify(commitment_verify_request)
Verify Pedersen commitment

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**commitment_verify_request** | [**CommitmentVerifyRequest**](CommitmentVerifyRequest.md) |  | [required] |

### Return type

[**models::CommitmentVerify200Response**](commitmentVerify_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

