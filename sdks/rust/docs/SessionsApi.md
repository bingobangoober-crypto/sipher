# \SessionsApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_session**](SessionsApi.md#create_session) | **POST** /v1/sessions | Create agent session with default parameters (pro+)
[**delete_session**](SessionsApi.md#delete_session) | **DELETE** /v1/sessions/{id} | Delete session (pro+)
[**get_session**](SessionsApi.md#get_session) | **GET** /v1/sessions/{id} | Get session configuration (pro+)
[**update_session**](SessionsApi.md#update_session) | **PATCH** /v1/sessions/{id} | Update session defaults (pro+)



## create_session

> models::CreateSession201Response create_session(create_session_request)
Create agent session with default parameters (pro+)

Creates a session that stores default parameters (chain, backend, privacy level, etc.) applied to all subsequent requests via the X-Session-Id header. Requires pro or enterprise tier.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_session_request** | [**CreateSessionRequest**](CreateSessionRequest.md) |  | [required] |

### Return type

[**models::CreateSession201Response**](createSession_201_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_session

> models::DeleteSession200Response delete_session(id)
Delete session (pro+)

Ends and deletes the session. The session ID will no longer be valid for subsequent requests.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Session ID returned from POST /v1/sessions | [required] |

### Return type

[**models::DeleteSession200Response**](deleteSession_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_session

> models::GetSession200Response get_session(id)
Get session configuration (pro+)

Retrieves session details including defaults and expiry. Only the session owner (same API key) can access it.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Session ID returned from POST /v1/sessions | [required] |

### Return type

[**models::GetSession200Response**](getSession_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_session

> models::UpdateSession200Response update_session(id, update_session_request)
Update session defaults (pro+)

Merges new defaults into the existing session. Only provided keys are updated; omitted keys remain unchanged.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Session ID returned from POST /v1/sessions | [required] |
**update_session_request** | [**UpdateSessionRequest**](UpdateSessionRequest.md) |  | [required] |

### Return type

[**models::UpdateSession200Response**](updateSession_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

