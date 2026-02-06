# \IncoApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compute_inco_ciphertexts**](IncoApi.md#compute_inco_ciphertexts) | **POST** /v1/inco/compute | Compute on encrypted data
[**decrypt_inco_result**](IncoApi.md#decrypt_inco_result) | **POST** /v1/inco/decrypt | Decrypt FHE computation result
[**encrypt_inco_value**](IncoApi.md#encrypt_inco_value) | **POST** /v1/inco/encrypt | Encrypt value with FHE



## compute_inco_ciphertexts

> models::ComputeIncoCiphertexts200Response compute_inco_ciphertexts(compute_inco_ciphertexts_request)
Compute on encrypted data

Perform a homomorphic operation on FHE ciphertexts. Operations complete synchronously. Tracks noise budget consumption.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**compute_inco_ciphertexts_request** | [**ComputeIncoCiphertextsRequest**](ComputeIncoCiphertextsRequest.md) |  | [required] |

### Return type

[**models::ComputeIncoCiphertexts200Response**](computeIncoCiphertexts_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## decrypt_inco_result

> models::DecryptIncoResult200Response decrypt_inco_result(decrypt_inco_result_request)
Decrypt FHE computation result

Decrypt the output of a completed FHE computation. Returns the plaintext result.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**decrypt_inco_result_request** | [**DecryptIncoResultRequest**](DecryptIncoResultRequest.md) |  | [required] |

### Return type

[**models::DecryptIncoResult200Response**](decryptIncoResult_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## encrypt_inco_value

> models::EncryptIncoValue200Response encrypt_inco_value(encrypt_inco_value_request)
Encrypt value with FHE

Encrypt a plaintext value using Fully Homomorphic Encryption (FHEW or TFHE scheme). Returns ciphertext and noise budget.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**encrypt_inco_value_request** | [**EncryptIncoValueRequest**](EncryptIncoValueRequest.md) |  | [required] |

### Return type

[**models::EncryptIncoValue200Response**](encryptIncoValue_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

