# TransferShield200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transaction** | Pointer to **string** | Base64-encoded unsigned transaction | [optional] 
**StealthAddress** | Pointer to **string** |  | [optional] 
**EphemeralPublicKey** | Pointer to **string** | 0x-prefixed 32-byte hex string | [optional] 
**ViewTag** | Pointer to **int32** |  | [optional] 
**Commitment** | Pointer to **string** | 0x-prefixed 32-byte hex string | [optional] 
**BlindingFactor** | Pointer to **string** | 0x-prefixed 32-byte hex string | [optional] 
**ViewingKeyHash** | Pointer to **string** | 0x-prefixed 32-byte hex string | [optional] 
**SharedSecret** | Pointer to **string** | 0x-prefixed 32-byte hex string | [optional] 
**ProgramId** | Pointer to **string** | SIP Privacy program ID | [optional] 
**NoteId** | Pointer to **string** | Transfer record PDA (base58). Null when using SystemProgram fallback. | [optional] 
**InstructionType** | Pointer to **string** | Which program path was used for the transaction. | [optional] 
**EncryptedAmount** | Pointer to **string** | Amount encrypted with viewing key hash (hex). Only present on Anchor path. | [optional] 

## Methods

### NewTransferShield200ResponseData

`func NewTransferShield200ResponseData() *TransferShield200ResponseData`

NewTransferShield200ResponseData instantiates a new TransferShield200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferShield200ResponseDataWithDefaults

`func NewTransferShield200ResponseDataWithDefaults() *TransferShield200ResponseData`

NewTransferShield200ResponseDataWithDefaults instantiates a new TransferShield200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransaction

`func (o *TransferShield200ResponseData) GetTransaction() string`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *TransferShield200ResponseData) GetTransactionOk() (*string, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *TransferShield200ResponseData) SetTransaction(v string)`

SetTransaction sets Transaction field to given value.

### HasTransaction

`func (o *TransferShield200ResponseData) HasTransaction() bool`

HasTransaction returns a boolean if a field has been set.

### GetStealthAddress

`func (o *TransferShield200ResponseData) GetStealthAddress() string`

GetStealthAddress returns the StealthAddress field if non-nil, zero value otherwise.

### GetStealthAddressOk

`func (o *TransferShield200ResponseData) GetStealthAddressOk() (*string, bool)`

GetStealthAddressOk returns a tuple with the StealthAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStealthAddress

`func (o *TransferShield200ResponseData) SetStealthAddress(v string)`

SetStealthAddress sets StealthAddress field to given value.

### HasStealthAddress

`func (o *TransferShield200ResponseData) HasStealthAddress() bool`

HasStealthAddress returns a boolean if a field has been set.

### GetEphemeralPublicKey

`func (o *TransferShield200ResponseData) GetEphemeralPublicKey() string`

GetEphemeralPublicKey returns the EphemeralPublicKey field if non-nil, zero value otherwise.

### GetEphemeralPublicKeyOk

`func (o *TransferShield200ResponseData) GetEphemeralPublicKeyOk() (*string, bool)`

GetEphemeralPublicKeyOk returns a tuple with the EphemeralPublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEphemeralPublicKey

`func (o *TransferShield200ResponseData) SetEphemeralPublicKey(v string)`

SetEphemeralPublicKey sets EphemeralPublicKey field to given value.

### HasEphemeralPublicKey

`func (o *TransferShield200ResponseData) HasEphemeralPublicKey() bool`

HasEphemeralPublicKey returns a boolean if a field has been set.

### GetViewTag

`func (o *TransferShield200ResponseData) GetViewTag() int32`

GetViewTag returns the ViewTag field if non-nil, zero value otherwise.

### GetViewTagOk

`func (o *TransferShield200ResponseData) GetViewTagOk() (*int32, bool)`

GetViewTagOk returns a tuple with the ViewTag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViewTag

`func (o *TransferShield200ResponseData) SetViewTag(v int32)`

SetViewTag sets ViewTag field to given value.

### HasViewTag

`func (o *TransferShield200ResponseData) HasViewTag() bool`

HasViewTag returns a boolean if a field has been set.

### GetCommitment

`func (o *TransferShield200ResponseData) GetCommitment() string`

GetCommitment returns the Commitment field if non-nil, zero value otherwise.

### GetCommitmentOk

`func (o *TransferShield200ResponseData) GetCommitmentOk() (*string, bool)`

GetCommitmentOk returns a tuple with the Commitment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommitment

`func (o *TransferShield200ResponseData) SetCommitment(v string)`

SetCommitment sets Commitment field to given value.

### HasCommitment

`func (o *TransferShield200ResponseData) HasCommitment() bool`

HasCommitment returns a boolean if a field has been set.

### GetBlindingFactor

`func (o *TransferShield200ResponseData) GetBlindingFactor() string`

GetBlindingFactor returns the BlindingFactor field if non-nil, zero value otherwise.

### GetBlindingFactorOk

`func (o *TransferShield200ResponseData) GetBlindingFactorOk() (*string, bool)`

GetBlindingFactorOk returns a tuple with the BlindingFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlindingFactor

`func (o *TransferShield200ResponseData) SetBlindingFactor(v string)`

SetBlindingFactor sets BlindingFactor field to given value.

### HasBlindingFactor

`func (o *TransferShield200ResponseData) HasBlindingFactor() bool`

HasBlindingFactor returns a boolean if a field has been set.

### GetViewingKeyHash

`func (o *TransferShield200ResponseData) GetViewingKeyHash() string`

GetViewingKeyHash returns the ViewingKeyHash field if non-nil, zero value otherwise.

### GetViewingKeyHashOk

`func (o *TransferShield200ResponseData) GetViewingKeyHashOk() (*string, bool)`

GetViewingKeyHashOk returns a tuple with the ViewingKeyHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViewingKeyHash

`func (o *TransferShield200ResponseData) SetViewingKeyHash(v string)`

SetViewingKeyHash sets ViewingKeyHash field to given value.

### HasViewingKeyHash

`func (o *TransferShield200ResponseData) HasViewingKeyHash() bool`

HasViewingKeyHash returns a boolean if a field has been set.

### GetSharedSecret

`func (o *TransferShield200ResponseData) GetSharedSecret() string`

GetSharedSecret returns the SharedSecret field if non-nil, zero value otherwise.

### GetSharedSecretOk

`func (o *TransferShield200ResponseData) GetSharedSecretOk() (*string, bool)`

GetSharedSecretOk returns a tuple with the SharedSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedSecret

`func (o *TransferShield200ResponseData) SetSharedSecret(v string)`

SetSharedSecret sets SharedSecret field to given value.

### HasSharedSecret

`func (o *TransferShield200ResponseData) HasSharedSecret() bool`

HasSharedSecret returns a boolean if a field has been set.

### GetProgramId

`func (o *TransferShield200ResponseData) GetProgramId() string`

GetProgramId returns the ProgramId field if non-nil, zero value otherwise.

### GetProgramIdOk

`func (o *TransferShield200ResponseData) GetProgramIdOk() (*string, bool)`

GetProgramIdOk returns a tuple with the ProgramId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgramId

`func (o *TransferShield200ResponseData) SetProgramId(v string)`

SetProgramId sets ProgramId field to given value.

### HasProgramId

`func (o *TransferShield200ResponseData) HasProgramId() bool`

HasProgramId returns a boolean if a field has been set.

### GetNoteId

`func (o *TransferShield200ResponseData) GetNoteId() string`

GetNoteId returns the NoteId field if non-nil, zero value otherwise.

### GetNoteIdOk

`func (o *TransferShield200ResponseData) GetNoteIdOk() (*string, bool)`

GetNoteIdOk returns a tuple with the NoteId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteId

`func (o *TransferShield200ResponseData) SetNoteId(v string)`

SetNoteId sets NoteId field to given value.

### HasNoteId

`func (o *TransferShield200ResponseData) HasNoteId() bool`

HasNoteId returns a boolean if a field has been set.

### GetInstructionType

`func (o *TransferShield200ResponseData) GetInstructionType() string`

GetInstructionType returns the InstructionType field if non-nil, zero value otherwise.

### GetInstructionTypeOk

`func (o *TransferShield200ResponseData) GetInstructionTypeOk() (*string, bool)`

GetInstructionTypeOk returns a tuple with the InstructionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructionType

`func (o *TransferShield200ResponseData) SetInstructionType(v string)`

SetInstructionType sets InstructionType field to given value.

### HasInstructionType

`func (o *TransferShield200ResponseData) HasInstructionType() bool`

HasInstructionType returns a boolean if a field has been set.

### GetEncryptedAmount

`func (o *TransferShield200ResponseData) GetEncryptedAmount() string`

GetEncryptedAmount returns the EncryptedAmount field if non-nil, zero value otherwise.

### GetEncryptedAmountOk

`func (o *TransferShield200ResponseData) GetEncryptedAmountOk() (*string, bool)`

GetEncryptedAmountOk returns a tuple with the EncryptedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncryptedAmount

`func (o *TransferShield200ResponseData) SetEncryptedAmount(v string)`

SetEncryptedAmount sets EncryptedAmount field to given value.

### HasEncryptedAmount

`func (o *TransferShield200ResponseData) HasEncryptedAmount() bool`

HasEncryptedAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


