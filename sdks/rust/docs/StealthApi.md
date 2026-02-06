# \StealthApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stealth_check**](StealthApi.md#stealth_check) | **POST** /v1/stealth/check | Check stealth address ownership
[**stealth_derive**](StealthApi.md#stealth_derive) | **POST** /v1/stealth/derive | Derive one-time stealth address
[**stealth_generate**](StealthApi.md#stealth_generate) | **POST** /v1/stealth/generate | Generate stealth meta-address keypair
[**stealth_generate_batch**](StealthApi.md#stealth_generate_batch) | **POST** /v1/stealth/generate/batch | Batch generate stealth keypairs



## stealth_check

> models::StealthCheck200Response stealth_check(stealth_check_request)
Check stealth address ownership

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**stealth_check_request** | [**StealthCheckRequest**](StealthCheckRequest.md) |  | [required] |

### Return type

[**models::StealthCheck200Response**](stealthCheck_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## stealth_derive

> models::StealthDerive200Response stealth_derive(stealth_derive_request)
Derive one-time stealth address

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**stealth_derive_request** | [**StealthDeriveRequest**](StealthDeriveRequest.md) |  | [required] |

### Return type

[**models::StealthDerive200Response**](stealthDerive_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## stealth_generate

> models::StealthGenerate200Response stealth_generate(stealth_generate_request)
Generate stealth meta-address keypair

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**stealth_generate_request** | [**StealthGenerateRequest**](StealthGenerateRequest.md) |  | [required] |

### Return type

[**models::StealthGenerate200Response**](stealthGenerate_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## stealth_generate_batch

> models::StealthGenerateBatch200Response stealth_generate_batch(stealth_generate_batch_request)
Batch generate stealth keypairs

Generate multiple stealth meta-address keypairs in a single call. Max 100 per request.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**stealth_generate_batch_request** | [**StealthGenerateBatchRequest**](StealthGenerateBatchRequest.md) |  | [required] |

### Return type

[**models::StealthGenerateBatch200Response**](stealthGenerateBatch_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

