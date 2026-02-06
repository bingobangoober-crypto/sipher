# SubmitJitoBundleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | **[]string** | Base64-encoded serialized Solana transactions | 
**TipLamports** | Pointer to **string** | Tip amount in lamports (minimum 1000) | [optional] [default to "10000"]
**GasSponsorship** | Pointer to **bool** | Enable gas sponsorship (enterprise tier only) | [optional] [default to false]

## Methods

### NewSubmitJitoBundleRequest

`func NewSubmitJitoBundleRequest(transactions []string, ) *SubmitJitoBundleRequest`

NewSubmitJitoBundleRequest instantiates a new SubmitJitoBundleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitJitoBundleRequestWithDefaults

`func NewSubmitJitoBundleRequestWithDefaults() *SubmitJitoBundleRequest`

NewSubmitJitoBundleRequestWithDefaults instantiates a new SubmitJitoBundleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *SubmitJitoBundleRequest) GetTransactions() []string`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *SubmitJitoBundleRequest) GetTransactionsOk() (*[]string, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *SubmitJitoBundleRequest) SetTransactions(v []string)`

SetTransactions sets Transactions field to given value.


### GetTipLamports

`func (o *SubmitJitoBundleRequest) GetTipLamports() string`

GetTipLamports returns the TipLamports field if non-nil, zero value otherwise.

### GetTipLamportsOk

`func (o *SubmitJitoBundleRequest) GetTipLamportsOk() (*string, bool)`

GetTipLamportsOk returns a tuple with the TipLamports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTipLamports

`func (o *SubmitJitoBundleRequest) SetTipLamports(v string)`

SetTipLamports sets TipLamports field to given value.

### HasTipLamports

`func (o *SubmitJitoBundleRequest) HasTipLamports() bool`

HasTipLamports returns a boolean if a field has been set.

### GetGasSponsorship

`func (o *SubmitJitoBundleRequest) GetGasSponsorship() bool`

GetGasSponsorship returns the GasSponsorship field if non-nil, zero value otherwise.

### GetGasSponsorshipOk

`func (o *SubmitJitoBundleRequest) GetGasSponsorshipOk() (*bool, bool)`

GetGasSponsorshipOk returns a tuple with the GasSponsorship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGasSponsorship

`func (o *SubmitJitoBundleRequest) SetGasSponsorship(v bool)`

SetGasSponsorship sets GasSponsorship field to given value.

### HasGasSponsorship

`func (o *SubmitJitoBundleRequest) HasGasSponsorship() bool`

HasGasSponsorship returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


