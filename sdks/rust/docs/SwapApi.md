# \SwapApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_swap**](SwapApi.md#private_swap) | **POST** /v1/swap/private | Privacy-preserving token swap via Jupiter DEX



## private_swap

> models::PrivateSwap200Response private_swap(private_swap_request)
Privacy-preserving token swap via Jupiter DEX

Composite endpoint orchestrating stealth address generation, optional C-SPL wrapping, and Jupiter DEX swap into a single privacy-preserving token swap. Output is routed to a stealth address with Pedersen commitment. Supports ephemeral stealth addresses for agents without persistent meta-address.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**private_swap_request** | [**PrivateSwapRequest**](PrivateSwapRequest.md) |  | [required] |

### Return type

[**models::PrivateSwap200Response**](privateSwap_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

