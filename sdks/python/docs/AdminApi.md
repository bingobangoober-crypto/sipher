# sipher_client.AdminApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_admin_key**](AdminApi.md#create_admin_key) | **POST** /v1/admin/keys | Create a new API key
[**get_admin_key**](AdminApi.md#get_admin_key) | **GET** /v1/admin/keys/{id} | Get API key details
[**list_admin_keys**](AdminApi.md#list_admin_keys) | **GET** /v1/admin/keys | List all API keys
[**list_admin_tiers**](AdminApi.md#list_admin_tiers) | **GET** /v1/admin/tiers | List available tiers and limits
[**revoke_admin_key**](AdminApi.md#revoke_admin_key) | **DELETE** /v1/admin/keys/{id} | Revoke an API key


# **create_admin_key**
> CreateAdminKey201Response create_admin_key(create_admin_key_request)

Create a new API key

Creates a new tiered API key. The raw key is only shown once in the response. Requires admin API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.create_admin_key201_response import CreateAdminKey201Response
from sipher_client.models.create_admin_key_request import CreateAdminKeyRequest
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
    api_instance = sipher_client.AdminApi(api_client)
    create_admin_key_request = sipher_client.CreateAdminKeyRequest() # CreateAdminKeyRequest | 

    try:
        # Create a new API key
        api_response = api_instance.create_admin_key(create_admin_key_request)
        print("The response of AdminApi->create_admin_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_admin_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_admin_key_request** | [**CreateAdminKeyRequest**](CreateAdminKeyRequest.md)|  | 

### Return type

[**CreateAdminKey201Response**](CreateAdminKey201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | API key created |  -  |
**400** | Validation error |  -  |
**401** | Admin key required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_admin_key**
> GetAdminKey200Response get_admin_key(id)

Get API key details

Returns key details with masked key value and usage stats. Requires admin API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.get_admin_key200_response import GetAdminKey200Response
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
    api_instance = sipher_client.AdminApi(api_client)
    id = 'id_example' # str | API key ID

    try:
        # Get API key details
        api_response = api_instance.get_admin_key(id)
        print("The response of AdminApi->get_admin_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_admin_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| API key ID | 

### Return type

[**GetAdminKey200Response**](GetAdminKey200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API key details |  -  |
**401** | Admin key required |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_admin_keys**
> ListAdminKeys200Response list_admin_keys()

List all API keys

Returns all API keys (masked). Requires admin API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.list_admin_keys200_response import ListAdminKeys200Response
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
    api_instance = sipher_client.AdminApi(api_client)

    try:
        # List all API keys
        api_response = api_instance.list_admin_keys()
        print("The response of AdminApi->list_admin_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_admin_keys: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAdminKeys200Response**](ListAdminKeys200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API keys listed |  -  |
**401** | Admin key required |  -  |
**503** | Admin API not configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_admin_tiers**
> ListAdminTiers200Response list_admin_tiers()

List available tiers and limits

Returns all tier names and their associated rate/quota limits. Requires admin API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.list_admin_tiers200_response import ListAdminTiers200Response
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
    api_instance = sipher_client.AdminApi(api_client)

    try:
        # List available tiers and limits
        api_response = api_instance.list_admin_tiers()
        print("The response of AdminApi->list_admin_tiers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_admin_tiers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAdminTiers200Response**](ListAdminTiers200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tiers listed |  -  |
**401** | Admin key required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_admin_key**
> RevokeAdminKey200Response revoke_admin_key(id)

Revoke an API key

Permanently revokes an API key. Requires admin API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.revoke_admin_key200_response import RevokeAdminKey200Response
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
    api_instance = sipher_client.AdminApi(api_client)
    id = 'id_example' # str | API key ID

    try:
        # Revoke an API key
        api_response = api_instance.revoke_admin_key(id)
        print("The response of AdminApi->revoke_admin_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->revoke_admin_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| API key ID | 

### Return type

[**RevokeAdminKey200Response**](RevokeAdminKey200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Key revoked |  -  |
**401** | Admin key required |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

