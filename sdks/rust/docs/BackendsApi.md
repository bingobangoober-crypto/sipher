# \BackendsApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backends_compare**](BackendsApi.md#backends_compare) | **POST** /v1/backends/compare | Compare privacy backends
[**backends_health**](BackendsApi.md#backends_health) | **GET** /v1/backends/{id}/health | Check backend health
[**backends_list**](BackendsApi.md#backends_list) | **GET** /v1/backends | List privacy backends
[**backends_select**](BackendsApi.md#backends_select) | **POST** /v1/backends/select | Select preferred backend



## backends_compare

> models::BackendsCompare200Response backends_compare(backends_compare_request)
Compare privacy backends

Compare available privacy backends for a given operation type, returning cost, latency, privacy level, and recommendations.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**backends_compare_request** | [**BackendsCompareRequest**](BackendsCompareRequest.md) |  | [required] |

### Return type

[**models::BackendsCompare200Response**](backendsCompare_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## backends_health

> models::BackendsHealth200Response backends_health(id)
Check backend health

Probes a specific backend for availability, returns circuit breaker state, metrics, and capabilities.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Backend name (e.g., sip-native) | [required] |

### Return type

[**models::BackendsHealth200Response**](backendsHealth_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## backends_list

> models::BackendsList200Response backends_list()
List privacy backends

Returns all registered privacy backends with capabilities, health state, and priority. Backends implement different privacy strategies (stealth addresses, FHE, MPC).

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::BackendsList200Response**](backendsList_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## backends_select

> models::BackendsSelect200Response backends_select(backends_select_request)
Select preferred backend

Sets the preferred privacy backend for the authenticated API key. Requires a tiered API key.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**backends_select_request** | [**BackendsSelectRequest**](BackendsSelectRequest.md) |  | [required] |

### Return type

[**models::BackendsSelect200Response**](backendsSelect_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

