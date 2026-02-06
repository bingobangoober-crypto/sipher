# \CsplApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cspl_transfer**](CsplApi.md#cspl_transfer) | **POST** /v1/cspl/transfer | Confidential token transfer
[**cspl_unwrap**](CsplApi.md#cspl_unwrap) | **POST** /v1/cspl/unwrap | Unwrap confidential tokens back to SPL
[**cspl_wrap**](CsplApi.md#cspl_wrap) | **POST** /v1/cspl/wrap | Wrap SPL tokens into confidential balance



## cspl_transfer

> models::CsplTransfer200Response cspl_transfer(cspl_transfer_request)
Confidential token transfer

Transfers confidential (C-SPL) tokens with hidden amount between accounts.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**cspl_transfer_request** | [**CsplTransferRequest**](CsplTransferRequest.md) |  | [required] |

### Return type

[**models::CsplTransfer200Response**](csplTransfer_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## cspl_unwrap

> models::CsplUnwrap200Response cspl_unwrap(cspl_unwrap_request)
Unwrap confidential tokens back to SPL

Unwraps confidential (C-SPL) tokens back to standard SPL token balance.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**cspl_unwrap_request** | [**CsplUnwrapRequest**](CsplUnwrapRequest.md) |  | [required] |

### Return type

[**models::CsplUnwrap200Response**](csplUnwrap_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## cspl_wrap

> models::CsplWrap200Response cspl_wrap(cspl_wrap_request)
Wrap SPL tokens into confidential balance

Wraps standard SPL tokens into a confidential (C-SPL) balance with encrypted amounts.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**cspl_wrap_request** | [**CsplWrapRequest**](CsplWrapRequest.md) |  | [required] |

### Return type

[**models::CsplWrap200Response**](csplWrap_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

