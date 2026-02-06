# \ViewingKeyApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewing_key_decrypt**](ViewingKeyApi.md#viewing_key_decrypt) | **POST** /v1/viewing-key/decrypt | Decrypt transaction with viewing key
[**viewing_key_derive**](ViewingKeyApi.md#viewing_key_derive) | **POST** /v1/viewing-key/derive | Derive child viewing key (BIP32-style)
[**viewing_key_disclose**](ViewingKeyApi.md#viewing_key_disclose) | **POST** /v1/viewing-key/disclose | Encrypt transaction for disclosure
[**viewing_key_generate**](ViewingKeyApi.md#viewing_key_generate) | **POST** /v1/viewing-key/generate | Generate viewing key
[**viewing_key_verify_hierarchy**](ViewingKeyApi.md#viewing_key_verify_hierarchy) | **POST** /v1/viewing-key/verify-hierarchy | Verify viewing key parent-child relationship



## viewing_key_decrypt

> models::ViewingKeyDecrypt200Response viewing_key_decrypt(viewing_key_decrypt_request)
Decrypt transaction with viewing key

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**viewing_key_decrypt_request** | [**ViewingKeyDecryptRequest**](ViewingKeyDecryptRequest.md) |  | [required] |

### Return type

[**models::ViewingKeyDecrypt200Response**](viewingKeyDecrypt_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## viewing_key_derive

> models::ViewingKeyDerive200Response viewing_key_derive(viewing_key_derive_request)
Derive child viewing key (BIP32-style)

Derives a child viewing key from a master key using HMAC-SHA512. Supports hierarchical key trees for scoped compliance access (per-auditor, per-timeframe).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**viewing_key_derive_request** | [**ViewingKeyDeriveRequest**](ViewingKeyDeriveRequest.md) |  | [required] |

### Return type

[**models::ViewingKeyDerive200Response**](viewingKeyDerive_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## viewing_key_disclose

> models::ViewingKeyDisclose200Response viewing_key_disclose(viewing_key_disclose_request)
Encrypt transaction for disclosure

Encrypts transaction data so only the viewing key holder can decrypt it (selective compliance).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**viewing_key_disclose_request** | [**ViewingKeyDiscloseRequest**](ViewingKeyDiscloseRequest.md) |  | [required] |

### Return type

[**models::ViewingKeyDisclose200Response**](viewingKeyDisclose_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## viewing_key_generate

> models::ViewingKeyGenerate200Response viewing_key_generate(viewing_key_generate_request)
Generate viewing key

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**viewing_key_generate_request** | [**ViewingKeyGenerateRequest**](ViewingKeyGenerateRequest.md) |  | [required] |

### Return type

[**models::ViewingKeyGenerate200Response**](viewingKeyGenerate_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## viewing_key_verify_hierarchy

> models::ViewingKeyVerifyHierarchy200Response viewing_key_verify_hierarchy(viewing_key_verify_hierarchy_request)
Verify viewing key parent-child relationship

Verifies that a child viewing key was derived from a specific parent key at a given path.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**viewing_key_verify_hierarchy_request** | [**ViewingKeyVerifyHierarchyRequest**](ViewingKeyVerifyHierarchyRequest.md) |  | [required] |

### Return type

[**models::ViewingKeyVerifyHierarchy200Response**](viewingKeyVerifyHierarchy_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

