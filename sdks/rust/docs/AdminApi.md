# \AdminApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_admin_key**](AdminApi.md#create_admin_key) | **POST** /v1/admin/keys | Create a new API key
[**get_admin_key**](AdminApi.md#get_admin_key) | **GET** /v1/admin/keys/{id} | Get API key details
[**list_admin_keys**](AdminApi.md#list_admin_keys) | **GET** /v1/admin/keys | List all API keys
[**list_admin_tiers**](AdminApi.md#list_admin_tiers) | **GET** /v1/admin/tiers | List available tiers and limits
[**revoke_admin_key**](AdminApi.md#revoke_admin_key) | **DELETE** /v1/admin/keys/{id} | Revoke an API key



## create_admin_key

> models::CreateAdminKey201Response create_admin_key(create_admin_key_request)
Create a new API key

Creates a new tiered API key. The raw key is only shown once in the response. Requires admin API key.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_admin_key_request** | [**CreateAdminKeyRequest**](CreateAdminKeyRequest.md) |  | [required] |

### Return type

[**models::CreateAdminKey201Response**](createAdminKey_201_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_admin_key

> models::GetAdminKey200Response get_admin_key(id)
Get API key details

Returns key details with masked key value and usage stats. Requires admin API key.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | API key ID | [required] |

### Return type

[**models::GetAdminKey200Response**](getAdminKey_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_admin_keys

> models::ListAdminKeys200Response list_admin_keys()
List all API keys

Returns all API keys (masked). Requires admin API key.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ListAdminKeys200Response**](listAdminKeys_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_admin_tiers

> models::ListAdminTiers200Response list_admin_tiers()
List available tiers and limits

Returns all tier names and their associated rate/quota limits. Requires admin API key.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ListAdminTiers200Response**](listAdminTiers_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## revoke_admin_key

> models::RevokeAdminKey200Response revoke_admin_key(id)
Revoke an API key

Permanently revokes an API key. Requires admin API key.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | API key ID | [required] |

### Return type

[**models::RevokeAdminKey200Response**](revokeAdminKey_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

