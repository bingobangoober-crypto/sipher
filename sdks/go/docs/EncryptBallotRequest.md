# EncryptBallotRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProposalId** | **string** | Unique proposal identifier | 
**Vote** | **string** | Vote choice | 
**VoterSecret** | **string** | Private entropy for nullifier derivation (never stored) | 
**StealthAddress** | Pointer to **string** | Optional stealth address for voter anonymity (from /stealth/derive) | [optional] 

## Methods

### NewEncryptBallotRequest

`func NewEncryptBallotRequest(proposalId string, vote string, voterSecret string, ) *EncryptBallotRequest`

NewEncryptBallotRequest instantiates a new EncryptBallotRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEncryptBallotRequestWithDefaults

`func NewEncryptBallotRequestWithDefaults() *EncryptBallotRequest`

NewEncryptBallotRequestWithDefaults instantiates a new EncryptBallotRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProposalId

`func (o *EncryptBallotRequest) GetProposalId() string`

GetProposalId returns the ProposalId field if non-nil, zero value otherwise.

### GetProposalIdOk

`func (o *EncryptBallotRequest) GetProposalIdOk() (*string, bool)`

GetProposalIdOk returns a tuple with the ProposalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProposalId

`func (o *EncryptBallotRequest) SetProposalId(v string)`

SetProposalId sets ProposalId field to given value.


### GetVote

`func (o *EncryptBallotRequest) GetVote() string`

GetVote returns the Vote field if non-nil, zero value otherwise.

### GetVoteOk

`func (o *EncryptBallotRequest) GetVoteOk() (*string, bool)`

GetVoteOk returns a tuple with the Vote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVote

`func (o *EncryptBallotRequest) SetVote(v string)`

SetVote sets Vote field to given value.


### GetVoterSecret

`func (o *EncryptBallotRequest) GetVoterSecret() string`

GetVoterSecret returns the VoterSecret field if non-nil, zero value otherwise.

### GetVoterSecretOk

`func (o *EncryptBallotRequest) GetVoterSecretOk() (*string, bool)`

GetVoterSecretOk returns a tuple with the VoterSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoterSecret

`func (o *EncryptBallotRequest) SetVoterSecret(v string)`

SetVoterSecret sets VoterSecret field to given value.


### GetStealthAddress

`func (o *EncryptBallotRequest) GetStealthAddress() string`

GetStealthAddress returns the StealthAddress field if non-nil, zero value otherwise.

### GetStealthAddressOk

`func (o *EncryptBallotRequest) GetStealthAddressOk() (*string, bool)`

GetStealthAddressOk returns a tuple with the StealthAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStealthAddress

`func (o *EncryptBallotRequest) SetStealthAddress(v string)`

SetStealthAddress sets StealthAddress field to given value.

### HasStealthAddress

`func (o *EncryptBallotRequest) HasStealthAddress() bool`

HasStealthAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


