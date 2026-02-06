# GovernanceApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**encryptBallot**](GovernanceApi.md#encryptballotoperation) | **POST** /v1/governance/ballot/encrypt | Encrypt a vote ballot |
| [**getTally**](GovernanceApi.md#gettally) | **GET** /v1/governance/tally/{id} | Get tally result |
| [**submitBallot**](GovernanceApi.md#submitballotoperation) | **POST** /v1/governance/ballot/submit | Submit encrypted ballot to a proposal |
| [**tallyVotes**](GovernanceApi.md#tallyvotesoperation) | **POST** /v1/governance/tally | Tally votes for a proposal |



## encryptBallot

> EncryptBallot200Response encryptBallot(encryptBallotRequest)

Encrypt a vote ballot

Creates a Pedersen commitment for a vote (yes/no/abstain) and generates a deterministic nullifier from the voter secret + proposal ID. The nullifier prevents double-voting without revealing voter identity.

### Example

```ts
import {
  Configuration,
  GovernanceApi,
} from '@sip-protocol/sipher-client';
import type { EncryptBallotOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GovernanceApi(config);

  const body = {
    // EncryptBallotRequest
    encryptBallotRequest: ...,
  } satisfies EncryptBallotOperationRequest;

  try {
    const data = await api.encryptBallot(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **encryptBallotRequest** | [EncryptBallotRequest](EncryptBallotRequest.md) |  | |

### Return type

[**EncryptBallot200Response**](EncryptBallot200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Encrypted ballot with commitment and nullifier |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTally

> GetTally200Response getTally(id)

Get tally result

Retrieves a previously computed tally result by its ID. Includes vote counts, the homomorphic tally commitment, and the verification proof.

### Example

```ts
import {
  Configuration,
  GovernanceApi,
} from '@sip-protocol/sipher-client';
import type { GetTallyRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GovernanceApi(config);

  const body = {
    // string | Tally ID returned from POST /v1/governance/tally
    id: id_example,
  } satisfies GetTallyRequest;

  try {
    const data = await api.getTally(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Tally ID returned from POST /v1/governance/tally | [Defaults to `undefined`] |

### Return type

[**GetTally200Response**](GetTally200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tally result |  -  |
| **400** | Invalid tally ID format |  -  |
| **404** | Tally not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitBallot

> SubmitBallot200Response submitBallot(submitBallotRequest, idempotencyKey)

Submit encrypted ballot to a proposal

Submits an encrypted ballot (commitment + nullifier) to a proposal. The nullifier is checked for uniqueness — duplicate votes are rejected with 409. Proposals are created lazily on first ballot submission.

### Example

```ts
import {
  Configuration,
  GovernanceApi,
} from '@sip-protocol/sipher-client';
import type { SubmitBallotOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GovernanceApi(config);

  const body = {
    // SubmitBallotRequest
    submitBallotRequest: ...,
    // string | UUID v4 for idempotent submission (optional)
    idempotencyKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SubmitBallotOperationRequest;

  try {
    const data = await api.submitBallot(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitBallotRequest** | [SubmitBallotRequest](SubmitBallotRequest.md) |  | |
| **idempotencyKey** | `string` | UUID v4 for idempotent submission | [Optional] [Defaults to `undefined`] |

### Return type

[**SubmitBallot200Response**](SubmitBallot200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ballot accepted |  -  |
| **400** | Validation error |  -  |
| **409** | Double vote detected (nullifier already used) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tallyVotes

> TallyVotes200Response tallyVotes(tallyVotesRequest, idempotencyKey)

Tally votes for a proposal

Performs homomorphic addition of all ballot commitments for a proposal. The tally commitment can be verified against the total yes-vote count using the combined blinding factor. Returns a verification hash as proof of correct tallying.

### Example

```ts
import {
  Configuration,
  GovernanceApi,
} from '@sip-protocol/sipher-client';
import type { TallyVotesOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GovernanceApi(config);

  const body = {
    // TallyVotesRequest
    tallyVotesRequest: ...,
    // string | UUID v4 for idempotent tally (optional)
    idempotencyKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TallyVotesOperationRequest;

  try {
    const data = await api.tallyVotes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tallyVotesRequest** | [TallyVotesRequest](TallyVotesRequest.md) |  | |
| **idempotencyKey** | `string` | UUID v4 for idempotent tally | [Optional] [Defaults to `undefined`] |

### Return type

[**TallyVotes200Response**](TallyVotes200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tally result with verification proof |  -  |
| **400** | Validation error |  -  |
| **404** | Proposal not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

