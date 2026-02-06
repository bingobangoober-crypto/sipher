# SubmitJitoBundle200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BundleId** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**TipAccount** | Pointer to **string** | Jito tip account address | [optional] 
**TipLamports** | Pointer to **string** |  | [optional] 
**GasSponsored** | Pointer to **bool** |  | [optional] 
**Slot** | Pointer to **int32** |  | [optional] 
**Signature** | Pointer to **string** |  | [optional] 
**EstimatedConfirmation** | Pointer to **int32** |  | [optional] 

## Methods

### NewSubmitJitoBundle200ResponseData

`func NewSubmitJitoBundle200ResponseData() *SubmitJitoBundle200ResponseData`

NewSubmitJitoBundle200ResponseData instantiates a new SubmitJitoBundle200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitJitoBundle200ResponseDataWithDefaults

`func NewSubmitJitoBundle200ResponseDataWithDefaults() *SubmitJitoBundle200ResponseData`

NewSubmitJitoBundle200ResponseDataWithDefaults instantiates a new SubmitJitoBundle200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBundleId

`func (o *SubmitJitoBundle200ResponseData) GetBundleId() string`

GetBundleId returns the BundleId field if non-nil, zero value otherwise.

### GetBundleIdOk

`func (o *SubmitJitoBundle200ResponseData) GetBundleIdOk() (*string, bool)`

GetBundleIdOk returns a tuple with the BundleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBundleId

`func (o *SubmitJitoBundle200ResponseData) SetBundleId(v string)`

SetBundleId sets BundleId field to given value.

### HasBundleId

`func (o *SubmitJitoBundle200ResponseData) HasBundleId() bool`

HasBundleId returns a boolean if a field has been set.

### GetStatus

`func (o *SubmitJitoBundle200ResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SubmitJitoBundle200ResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SubmitJitoBundle200ResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SubmitJitoBundle200ResponseData) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTipAccount

`func (o *SubmitJitoBundle200ResponseData) GetTipAccount() string`

GetTipAccount returns the TipAccount field if non-nil, zero value otherwise.

### GetTipAccountOk

`func (o *SubmitJitoBundle200ResponseData) GetTipAccountOk() (*string, bool)`

GetTipAccountOk returns a tuple with the TipAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTipAccount

`func (o *SubmitJitoBundle200ResponseData) SetTipAccount(v string)`

SetTipAccount sets TipAccount field to given value.

### HasTipAccount

`func (o *SubmitJitoBundle200ResponseData) HasTipAccount() bool`

HasTipAccount returns a boolean if a field has been set.

### GetTipLamports

`func (o *SubmitJitoBundle200ResponseData) GetTipLamports() string`

GetTipLamports returns the TipLamports field if non-nil, zero value otherwise.

### GetTipLamportsOk

`func (o *SubmitJitoBundle200ResponseData) GetTipLamportsOk() (*string, bool)`

GetTipLamportsOk returns a tuple with the TipLamports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTipLamports

`func (o *SubmitJitoBundle200ResponseData) SetTipLamports(v string)`

SetTipLamports sets TipLamports field to given value.

### HasTipLamports

`func (o *SubmitJitoBundle200ResponseData) HasTipLamports() bool`

HasTipLamports returns a boolean if a field has been set.

### GetGasSponsored

`func (o *SubmitJitoBundle200ResponseData) GetGasSponsored() bool`

GetGasSponsored returns the GasSponsored field if non-nil, zero value otherwise.

### GetGasSponsoredOk

`func (o *SubmitJitoBundle200ResponseData) GetGasSponsoredOk() (*bool, bool)`

GetGasSponsoredOk returns a tuple with the GasSponsored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGasSponsored

`func (o *SubmitJitoBundle200ResponseData) SetGasSponsored(v bool)`

SetGasSponsored sets GasSponsored field to given value.

### HasGasSponsored

`func (o *SubmitJitoBundle200ResponseData) HasGasSponsored() bool`

HasGasSponsored returns a boolean if a field has been set.

### GetSlot

`func (o *SubmitJitoBundle200ResponseData) GetSlot() int32`

GetSlot returns the Slot field if non-nil, zero value otherwise.

### GetSlotOk

`func (o *SubmitJitoBundle200ResponseData) GetSlotOk() (*int32, bool)`

GetSlotOk returns a tuple with the Slot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlot

`func (o *SubmitJitoBundle200ResponseData) SetSlot(v int32)`

SetSlot sets Slot field to given value.

### HasSlot

`func (o *SubmitJitoBundle200ResponseData) HasSlot() bool`

HasSlot returns a boolean if a field has been set.

### GetSignature

`func (o *SubmitJitoBundle200ResponseData) GetSignature() string`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *SubmitJitoBundle200ResponseData) GetSignatureOk() (*string, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *SubmitJitoBundle200ResponseData) SetSignature(v string)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *SubmitJitoBundle200ResponseData) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetEstimatedConfirmation

`func (o *SubmitJitoBundle200ResponseData) GetEstimatedConfirmation() int32`

GetEstimatedConfirmation returns the EstimatedConfirmation field if non-nil, zero value otherwise.

### GetEstimatedConfirmationOk

`func (o *SubmitJitoBundle200ResponseData) GetEstimatedConfirmationOk() (*int32, bool)`

GetEstimatedConfirmationOk returns a tuple with the EstimatedConfirmation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedConfirmation

`func (o *SubmitJitoBundle200ResponseData) SetEstimatedConfirmation(v int32)`

SetEstimatedConfirmation sets EstimatedConfirmation field to given value.

### HasEstimatedConfirmation

`func (o *SubmitJitoBundle200ResponseData) HasEstimatedConfirmation() bool`

HasEstimatedConfirmation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


