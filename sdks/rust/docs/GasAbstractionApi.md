# \GasAbstractionApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_jito_bundle_status**](GasAbstractionApi.md#get_jito_bundle_status) | **GET** /v1/jito/bundle/{id} | Poll bundle status
[**submit_jito_bundle**](GasAbstractionApi.md#submit_jito_bundle) | **POST** /v1/jito/relay | Submit transaction(s) via Jito bundle



## get_jito_bundle_status

> models::GetJitoBundleStatus200Response get_jito_bundle_status(id)
Poll bundle status

Check the status of a previously submitted Jito bundle. Status progresses: submitted → bundled → confirming → confirmed.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Jito bundle ID | [required] |

### Return type

[**models::GetJitoBundleStatus200Response**](getJitoBundleStatus_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_jito_bundle

> models::SubmitJitoBundle200Response submit_jito_bundle(submit_jito_bundle_request)
Submit transaction(s) via Jito bundle

Submit one or more transactions as a Jito bundle for MEV-protected execution. Optionally enable gas sponsorship (enterprise tier).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_jito_bundle_request** | [**SubmitJitoBundleRequest**](SubmitJitoBundleRequest.md) |  | [required] |

### Return type

[**models::SubmitJitoBundle200Response**](submitJitoBundle_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

