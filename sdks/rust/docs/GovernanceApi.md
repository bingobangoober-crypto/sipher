# \GovernanceApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**encrypt_ballot**](GovernanceApi.md#encrypt_ballot) | **POST** /v1/governance/ballot/encrypt | Encrypt a vote ballot
[**get_tally**](GovernanceApi.md#get_tally) | **GET** /v1/governance/tally/{id} | Get tally result
[**submit_ballot**](GovernanceApi.md#submit_ballot) | **POST** /v1/governance/ballot/submit | Submit encrypted ballot to a proposal
[**tally_votes**](GovernanceApi.md#tally_votes) | **POST** /v1/governance/tally | Tally votes for a proposal



## encrypt_ballot

> models::EncryptBallot200Response encrypt_ballot(encrypt_ballot_request)
Encrypt a vote ballot

Creates a Pedersen commitment for a vote (yes/no/abstain) and generates a deterministic nullifier from the voter secret + proposal ID. The nullifier prevents double-voting without revealing voter identity.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**encrypt_ballot_request** | [**EncryptBallotRequest**](EncryptBallotRequest.md) |  | [required] |

### Return type

[**models::EncryptBallot200Response**](encryptBallot_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_tally

> models::GetTally200Response get_tally(id)
Get tally result

Retrieves a previously computed tally result by its ID. Includes vote counts, the homomorphic tally commitment, and the verification proof.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Tally ID returned from POST /v1/governance/tally | [required] |

### Return type

[**models::GetTally200Response**](getTally_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_ballot

> models::SubmitBallot200Response submit_ballot(submit_ballot_request, idempotency_key)
Submit encrypted ballot to a proposal

Submits an encrypted ballot (commitment + nullifier) to a proposal. The nullifier is checked for uniqueness — duplicate votes are rejected with 409. Proposals are created lazily on first ballot submission.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_ballot_request** | [**SubmitBallotRequest**](SubmitBallotRequest.md) |  | [required] |
**idempotency_key** | Option<**uuid::Uuid**> | UUID v4 for idempotent submission |  |

### Return type

[**models::SubmitBallot200Response**](submitBallot_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## tally_votes

> models::TallyVotes200Response tally_votes(tally_votes_request, idempotency_key)
Tally votes for a proposal

Performs homomorphic addition of all ballot commitments for a proposal. The tally commitment can be verified against the total yes-vote count using the combined blinding factor. Returns a verification hash as proof of correct tallying.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tally_votes_request** | [**TallyVotesRequest**](TallyVotesRequest.md) |  | [required] |
**idempotency_key** | Option<**uuid::Uuid**> | UUID v4 for idempotent tally |  |

### Return type

[**models::TallyVotes200Response**](tallyVotes_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

