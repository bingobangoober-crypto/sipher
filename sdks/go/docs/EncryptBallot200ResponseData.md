# EncryptBallot200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Commitment** | Pointer to **string** | Pedersen commitment to the vote value | [optional] 
**BlindingFactor** | Pointer to **string** | Blinding factor for the commitment | [optional] 
**Nullifier** | Pointer to **string** | Deterministic nullifier (prevents double-voting) | [optional] 
**Vote** | Pointer to **string** |  | [optional] 
**ProposalId** | Pointer to **string** |  | [optional] 
**AnonymousId** | Pointer to **string** | Anonymous voter identifier (stealth address or hash) | [optional] 

## Methods

### NewEncryptBallot200ResponseData

`func NewEncryptBallot200ResponseData() *EncryptBallot200ResponseData`

NewEncryptBallot200ResponseData instantiates a new EncryptBallot200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEncryptBallot200ResponseDataWithDefaults

`func NewEncryptBallot200ResponseDataWithDefaults() *EncryptBallot200ResponseData`

NewEncryptBallot200ResponseDataWithDefaults instantiates a new EncryptBallot200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommitment

`func (o *EncryptBallot200ResponseData) GetCommitment() string`

GetCommitment returns the Commitment field if non-nil, zero value otherwise.

### GetCommitmentOk

`func (o *EncryptBallot200ResponseData) GetCommitmentOk() (*string, bool)`

GetCommitmentOk returns a tuple with the Commitment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommitment

`func (o *EncryptBallot200ResponseData) SetCommitment(v string)`

SetCommitment sets Commitment field to given value.

### HasCommitment

`func (o *EncryptBallot200ResponseData) HasCommitment() bool`

HasCommitment returns a boolean if a field has been set.

### GetBlindingFactor

`func (o *EncryptBallot200ResponseData) GetBlindingFactor() string`

GetBlindingFactor returns the BlindingFactor field if non-nil, zero value otherwise.

### GetBlindingFactorOk

`func (o *EncryptBallot200ResponseData) GetBlindingFactorOk() (*string, bool)`

GetBlindingFactorOk returns a tuple with the BlindingFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlindingFactor

`func (o *EncryptBallot200ResponseData) SetBlindingFactor(v string)`

SetBlindingFactor sets BlindingFactor field to given value.

### HasBlindingFactor

`func (o *EncryptBallot200ResponseData) HasBlindingFactor() bool`

HasBlindingFactor returns a boolean if a field has been set.

### GetNullifier

`func (o *EncryptBallot200ResponseData) GetNullifier() string`

GetNullifier returns the Nullifier field if non-nil, zero value otherwise.

### GetNullifierOk

`func (o *EncryptBallot200ResponseData) GetNullifierOk() (*string, bool)`

GetNullifierOk returns a tuple with the Nullifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNullifier

`func (o *EncryptBallot200ResponseData) SetNullifier(v string)`

SetNullifier sets Nullifier field to given value.

### HasNullifier

`func (o *EncryptBallot200ResponseData) HasNullifier() bool`

HasNullifier returns a boolean if a field has been set.

### GetVote

`func (o *EncryptBallot200ResponseData) GetVote() string`

GetVote returns the Vote field if non-nil, zero value otherwise.

### GetVoteOk

`func (o *EncryptBallot200ResponseData) GetVoteOk() (*string, bool)`

GetVoteOk returns a tuple with the Vote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVote

`func (o *EncryptBallot200ResponseData) SetVote(v string)`

SetVote sets Vote field to given value.

### HasVote

`func (o *EncryptBallot200ResponseData) HasVote() bool`

HasVote returns a boolean if a field has been set.

### GetProposalId

`func (o *EncryptBallot200ResponseData) GetProposalId() string`

GetProposalId returns the ProposalId field if non-nil, zero value otherwise.

### GetProposalIdOk

`func (o *EncryptBallot200ResponseData) GetProposalIdOk() (*string, bool)`

GetProposalIdOk returns a tuple with the ProposalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProposalId

`func (o *EncryptBallot200ResponseData) SetProposalId(v string)`

SetProposalId sets ProposalId field to given value.

### HasProposalId

`func (o *EncryptBallot200ResponseData) HasProposalId() bool`

HasProposalId returns a boolean if a field has been set.

### GetAnonymousId

`func (o *EncryptBallot200ResponseData) GetAnonymousId() string`

GetAnonymousId returns the AnonymousId field if non-nil, zero value otherwise.

### GetAnonymousIdOk

`func (o *EncryptBallot200ResponseData) GetAnonymousIdOk() (*string, bool)`

GetAnonymousIdOk returns a tuple with the AnonymousId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymousId

`func (o *EncryptBallot200ResponseData) SetAnonymousId(v string)`

SetAnonymousId sets AnonymousId field to given value.

### HasAnonymousId

`func (o *EncryptBallot200ResponseData) HasAnonymousId() bool`

HasAnonymousId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


