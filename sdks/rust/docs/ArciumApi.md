# \ArciumApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**decrypt_arcium_result**](ArciumApi.md#decrypt_arcium_result) | **POST** /v1/arcium/decrypt | Decrypt computation result
[**get_arcium_computation_status**](ArciumApi.md#get_arcium_computation_status) | **GET** /v1/arcium/compute/{id}/status | Get computation status
[**submit_arcium_computation**](ArciumApi.md#submit_arcium_computation) | **POST** /v1/arcium/compute | Submit MPC computation



## decrypt_arcium_result

> models::DecryptArciumResult200Response decrypt_arcium_result(decrypt_arcium_result_request)
Decrypt computation result

Decrypt the output of a completed MPC computation using a viewing key.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**decrypt_arcium_result_request** | [**DecryptArciumResultRequest**](DecryptArciumResultRequest.md) |  | [required] |

### Return type

[**models::DecryptArciumResult200Response**](decryptArciumResult_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_arcium_computation_status

> models::GetArciumComputationStatus200Response get_arcium_computation_status(id)
Get computation status

Poll the status of an MPC computation. Status progresses: submitted → encrypting → processing → finalizing → completed.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Computation ID | [required] |

### Return type

[**models::GetArciumComputationStatus200Response**](getArciumComputationStatus_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_arcium_computation

> models::SubmitArciumComputation200Response submit_arcium_computation(submit_arcium_computation_request)
Submit MPC computation

Submit an encrypted computation to the Arcium MPC cluster. Returns a computation ID for status polling.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_arcium_computation_request** | [**SubmitArciumComputationRequest**](SubmitArciumComputationRequest.md) |  | [required] |

### Return type

[**models::SubmitArciumComputation200Response**](submitArciumComputation_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

