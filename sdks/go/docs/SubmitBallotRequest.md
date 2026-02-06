# SubmitBallotRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProposalId** | **string** |  | 
**Commitment** | **string** | 0x-prefixed 32-byte hex string | 
**BlindingFactor** | **string** | 0x-prefixed 32-byte hex string | 
**Nullifier** | **string** | 0x-prefixed 32-byte hex string | 
**Vote** | **string** |  | 
**StealthAddress** | Pointer to **string** | Optional stealth address for voter anonymity | [optional] 

## Methods

### NewSubmitBallotRequest

`func NewSubmitBallotRequest(proposalId string, commitment string, blindingFactor string, nullifier string, vote string, ) *SubmitBallotRequest`

NewSubmitBallotRequest instantiates a new SubmitBallotRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitBallotRequestWithDefaults

`func NewSubmitBallotRequestWithDefaults() *SubmitBallotRequest`

NewSubmitBallotRequestWithDefaults instantiates a new SubmitBallotRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProposalId

`func (o *SubmitBallotRequest) GetProposalId() string`

GetProposalId returns the ProposalId field if non-nil, zero value otherwise.

### GetProposalIdOk

`func (o *SubmitBallotRequest) GetProposalIdOk() (*string, bool)`

GetProposalIdOk returns a tuple with the ProposalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProposalId

`func (o *SubmitBallotRequest) SetProposalId(v string)`

SetProposalId sets ProposalId field to given value.


### GetCommitment

`func (o *SubmitBallotRequest) GetCommitment() string`

GetCommitment returns the Commitment field if non-nil, zero value otherwise.

### GetCommitmentOk

`func (o *SubmitBallotRequest) GetCommitmentOk() (*string, bool)`

GetCommitmentOk returns a tuple with the Commitment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommitment

`func (o *SubmitBallotRequest) SetCommitment(v string)`

SetCommitment sets Commitment field to given value.


### GetBlindingFactor

`func (o *SubmitBallotRequest) GetBlindingFactor() string`

GetBlindingFactor returns the BlindingFactor field if non-nil, zero value otherwise.

### GetBlindingFactorOk

`func (o *SubmitBallotRequest) GetBlindingFactorOk() (*string, bool)`

GetBlindingFactorOk returns a tuple with the BlindingFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlindingFactor

`func (o *SubmitBallotRequest) SetBlindingFactor(v string)`

SetBlindingFactor sets BlindingFactor field to given value.


### GetNullifier

`func (o *SubmitBallotRequest) GetNullifier() string`

GetNullifier returns the Nullifier field if non-nil, zero value otherwise.

### GetNullifierOk

`func (o *SubmitBallotRequest) GetNullifierOk() (*string, bool)`

GetNullifierOk returns a tuple with the Nullifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNullifier

`func (o *SubmitBallotRequest) SetNullifier(v string)`

SetNullifier sets Nullifier field to given value.


### GetVote

`func (o *SubmitBallotRequest) GetVote() string`

GetVote returns the Vote field if non-nil, zero value otherwise.

### GetVoteOk

`func (o *SubmitBallotRequest) GetVoteOk() (*string, bool)`

GetVoteOk returns a tuple with the Vote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVote

`func (o *SubmitBallotRequest) SetVote(v string)`

SetVote sets Vote field to given value.


### GetStealthAddress

`func (o *SubmitBallotRequest) GetStealthAddress() string`

GetStealthAddress returns the StealthAddress field if non-nil, zero value otherwise.

### GetStealthAddressOk

`func (o *SubmitBallotRequest) GetStealthAddressOk() (*string, bool)`

GetStealthAddressOk returns a tuple with the StealthAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStealthAddress

`func (o *SubmitBallotRequest) SetStealthAddress(v string)`

SetStealthAddress sets StealthAddress field to given value.

### HasStealthAddress

`func (o *SubmitBallotRequest) HasStealthAddress() bool`

HasStealthAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


