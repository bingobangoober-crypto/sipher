# sipher_client.GasAbstractionApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_jito_bundle_status**](GasAbstractionApi.md#get_jito_bundle_status) | **GET** /v1/jito/bundle/{id} | Poll bundle status
[**submit_jito_bundle**](GasAbstractionApi.md#submit_jito_bundle) | **POST** /v1/jito/relay | Submit transaction(s) via Jito bundle


# **get_jito_bundle_status**
> GetJitoBundleStatus200Response get_jito_bundle_status(id)

Poll bundle status

Check the status of a previously submitted Jito bundle. Status progresses: submitted → bundled → confirming → confirmed.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.get_jito_bundle_status200_response import GetJitoBundleStatus200Response
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
    api_instance = sipher_client.GasAbstractionApi(api_client)
    id = 'id_example' # str | Jito bundle ID

    try:
        # Poll bundle status
        api_response = api_instance.get_jito_bundle_status(id)
        print("The response of GasAbstractionApi->get_jito_bundle_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GasAbstractionApi->get_jito_bundle_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Jito bundle ID | 

### Return type

[**GetJitoBundleStatus200Response**](GetJitoBundleStatus200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bundle status retrieved |  -  |
**400** | Invalid bundle ID format |  -  |
**404** | Bundle not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_jito_bundle**
> SubmitJitoBundle200Response submit_jito_bundle(submit_jito_bundle_request)

Submit transaction(s) via Jito bundle

Submit one or more transactions as a Jito bundle for MEV-protected execution. Optionally enable gas sponsorship (enterprise tier).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.submit_jito_bundle200_response import SubmitJitoBundle200Response
from sipher_client.models.submit_jito_bundle_request import SubmitJitoBundleRequest
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
    api_instance = sipher_client.GasAbstractionApi(api_client)
    submit_jito_bundle_request = sipher_client.SubmitJitoBundleRequest() # SubmitJitoBundleRequest | 

    try:
        # Submit transaction(s) via Jito bundle
        api_response = api_instance.submit_jito_bundle(submit_jito_bundle_request)
        print("The response of GasAbstractionApi->submit_jito_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GasAbstractionApi->submit_jito_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_jito_bundle_request** | [**SubmitJitoBundleRequest**](SubmitJitoBundleRequest.md)|  | 

### Return type

[**SubmitJitoBundle200Response**](SubmitJitoBundle200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bundle submitted successfully |  -  |
**400** | Validation error or invalid transaction |  -  |
**403** | Gas sponsorship requires enterprise tier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

