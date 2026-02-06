# sipher_client.GovernanceApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**encrypt_ballot**](GovernanceApi.md#encrypt_ballot) | **POST** /v1/governance/ballot/encrypt | Encrypt a vote ballot
[**get_tally**](GovernanceApi.md#get_tally) | **GET** /v1/governance/tally/{id} | Get tally result
[**submit_ballot**](GovernanceApi.md#submit_ballot) | **POST** /v1/governance/ballot/submit | Submit encrypted ballot to a proposal
[**tally_votes**](GovernanceApi.md#tally_votes) | **POST** /v1/governance/tally | Tally votes for a proposal


# **encrypt_ballot**
> EncryptBallot200Response encrypt_ballot(encrypt_ballot_request)

Encrypt a vote ballot

Creates a Pedersen commitment for a vote (yes/no/abstain) and generates a deterministic nullifier from the voter secret + proposal ID. The nullifier prevents double-voting without revealing voter identity.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.encrypt_ballot200_response import EncryptBallot200Response
from sipher_client.models.encrypt_ballot_request import EncryptBallotRequest
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
    api_instance = sipher_client.GovernanceApi(api_client)
    encrypt_ballot_request = sipher_client.EncryptBallotRequest() # EncryptBallotRequest | 

    try:
        # Encrypt a vote ballot
        api_response = api_instance.encrypt_ballot(encrypt_ballot_request)
        print("The response of GovernanceApi->encrypt_ballot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GovernanceApi->encrypt_ballot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encrypt_ballot_request** | [**EncryptBallotRequest**](EncryptBallotRequest.md)|  | 

### Return type

[**EncryptBallot200Response**](EncryptBallot200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Encrypted ballot with commitment and nullifier |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tally**
> GetTally200Response get_tally(id)

Get tally result

Retrieves a previously computed tally result by its ID. Includes vote counts, the homomorphic tally commitment, and the verification proof.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.get_tally200_response import GetTally200Response
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
    api_instance = sipher_client.GovernanceApi(api_client)
    id = 'id_example' # str | Tally ID returned from POST /v1/governance/tally

    try:
        # Get tally result
        api_response = api_instance.get_tally(id)
        print("The response of GovernanceApi->get_tally:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GovernanceApi->get_tally: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Tally ID returned from POST /v1/governance/tally | 

### Return type

[**GetTally200Response**](GetTally200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tally result |  -  |
**400** | Invalid tally ID format |  -  |
**404** | Tally not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_ballot**
> SubmitBallot200Response submit_ballot(submit_ballot_request, idempotency_key=idempotency_key)

Submit encrypted ballot to a proposal

Submits an encrypted ballot (commitment + nullifier) to a proposal. The nullifier is checked for uniqueness — duplicate votes are rejected with 409. Proposals are created lazily on first ballot submission.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.submit_ballot200_response import SubmitBallot200Response
from sipher_client.models.submit_ballot_request import SubmitBallotRequest
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
    api_instance = sipher_client.GovernanceApi(api_client)
    submit_ballot_request = sipher_client.SubmitBallotRequest() # SubmitBallotRequest | 
    idempotency_key = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | UUID v4 for idempotent submission (optional)

    try:
        # Submit encrypted ballot to a proposal
        api_response = api_instance.submit_ballot(submit_ballot_request, idempotency_key=idempotency_key)
        print("The response of GovernanceApi->submit_ballot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GovernanceApi->submit_ballot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_ballot_request** | [**SubmitBallotRequest**](SubmitBallotRequest.md)|  | 
 **idempotency_key** | **UUID**| UUID v4 for idempotent submission | [optional] 

### Return type

[**SubmitBallot200Response**](SubmitBallot200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ballot accepted |  -  |
**400** | Validation error |  -  |
**409** | Double vote detected (nullifier already used) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tally_votes**
> TallyVotes200Response tally_votes(tally_votes_request, idempotency_key=idempotency_key)

Tally votes for a proposal

Performs homomorphic addition of all ballot commitments for a proposal. The tally commitment can be verified against the total yes-vote count using the combined blinding factor. Returns a verification hash as proof of correct tallying.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.tally_votes200_response import TallyVotes200Response
from sipher_client.models.tally_votes_request import TallyVotesRequest
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
    api_instance = sipher_client.GovernanceApi(api_client)
    tally_votes_request = sipher_client.TallyVotesRequest() # TallyVotesRequest | 
    idempotency_key = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | UUID v4 for idempotent tally (optional)

    try:
        # Tally votes for a proposal
        api_response = api_instance.tally_votes(tally_votes_request, idempotency_key=idempotency_key)
        print("The response of GovernanceApi->tally_votes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GovernanceApi->tally_votes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tally_votes_request** | [**TallyVotesRequest**](TallyVotesRequest.md)|  | 
 **idempotency_key** | **UUID**| UUID v4 for idempotent tally | [optional] 

### Return type

[**TallyVotes200Response**](TallyVotes200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tally result with verification proof |  -  |
**400** | Validation error |  -  |
**404** | Proposal not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

