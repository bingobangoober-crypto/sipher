# sipher_client.SessionsApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_session**](SessionsApi.md#create_session) | **POST** /v1/sessions | Create agent session with default parameters (pro+)
[**delete_session**](SessionsApi.md#delete_session) | **DELETE** /v1/sessions/{id} | Delete session (pro+)
[**get_session**](SessionsApi.md#get_session) | **GET** /v1/sessions/{id} | Get session configuration (pro+)
[**update_session**](SessionsApi.md#update_session) | **PATCH** /v1/sessions/{id} | Update session defaults (pro+)


# **create_session**
> CreateSession201Response create_session(create_session_request)

Create agent session with default parameters (pro+)

Creates a session that stores default parameters (chain, backend, privacy level, etc.) applied to all subsequent requests via the X-Session-Id header. Requires pro or enterprise tier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.create_session201_response import CreateSession201Response
from sipher_client.models.create_session_request import CreateSessionRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.SessionsApi(api_client)
    create_session_request = sipher_client.CreateSessionRequest() # CreateSessionRequest | 

    try:
        # Create agent session with default parameters (pro+)
        api_response = api_instance.create_session(create_session_request)
        print("The response of SessionsApi->create_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->create_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_session_request** | [**CreateSessionRequest**](CreateSessionRequest.md)|  | 

### Return type

[**CreateSession201Response**](CreateSession201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Session created |  -  |
**400** | Invalid request body |  -  |
**403** | Tier access denied (pro+ required) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_session**
> DeleteSession200Response delete_session(id)

Delete session (pro+)

Ends and deletes the session. The session ID will no longer be valid for subsequent requests.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.delete_session200_response import DeleteSession200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.SessionsApi(api_client)
    id = 'id_example' # str | Session ID returned from POST /v1/sessions

    try:
        # Delete session (pro+)
        api_response = api_instance.delete_session(id)
        print("The response of SessionsApi->delete_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->delete_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Session ID returned from POST /v1/sessions | 

### Return type

[**DeleteSession200Response**](DeleteSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session deleted |  -  |
**400** | Invalid session ID format |  -  |
**403** | Tier access denied (pro+ required) |  -  |
**404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_session**
> GetSession200Response get_session(id)

Get session configuration (pro+)

Retrieves session details including defaults and expiry. Only the session owner (same API key) can access it.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.get_session200_response import GetSession200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.SessionsApi(api_client)
    id = 'id_example' # str | Session ID returned from POST /v1/sessions

    try:
        # Get session configuration (pro+)
        api_response = api_instance.get_session(id)
        print("The response of SessionsApi->get_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->get_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Session ID returned from POST /v1/sessions | 

### Return type

[**GetSession200Response**](GetSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session found |  -  |
**400** | Invalid session ID format |  -  |
**403** | Tier access denied (pro+ required) |  -  |
**404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_session**
> UpdateSession200Response update_session(id, update_session_request)

Update session defaults (pro+)

Merges new defaults into the existing session. Only provided keys are updated; omitted keys remain unchanged.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.update_session200_response import UpdateSession200Response
from sipher_client.models.update_session_request import UpdateSessionRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.SessionsApi(api_client)
    id = 'id_example' # str | Session ID returned from POST /v1/sessions
    update_session_request = sipher_client.UpdateSessionRequest() # UpdateSessionRequest | 

    try:
        # Update session defaults (pro+)
        api_response = api_instance.update_session(id, update_session_request)
        print("The response of SessionsApi->update_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->update_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Session ID returned from POST /v1/sessions | 
 **update_session_request** | [**UpdateSessionRequest**](UpdateSessionRequest.md)|  | 

### Return type

[**UpdateSession200Response**](UpdateSession200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session updated |  -  |
**400** | Invalid request body or session ID |  -  |
**403** | Tier access denied (pro+ required) |  -  |
**404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

