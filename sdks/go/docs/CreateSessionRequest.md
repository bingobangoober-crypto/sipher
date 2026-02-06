# CreateSessionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Defaults** | [**CreateSessionRequestDefaults**](CreateSessionRequestDefaults.md) |  | 
**TtlSeconds** | Pointer to **int32** | Session TTL in seconds (default: 3600, max: 86400) | [optional] 

## Methods

### NewCreateSessionRequest

`func NewCreateSessionRequest(defaults CreateSessionRequestDefaults, ) *CreateSessionRequest`

NewCreateSessionRequest instantiates a new CreateSessionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateSessionRequestWithDefaults

`func NewCreateSessionRequestWithDefaults() *CreateSessionRequest`

NewCreateSessionRequestWithDefaults instantiates a new CreateSessionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaults

`func (o *CreateSessionRequest) GetDefaults() CreateSessionRequestDefaults`

GetDefaults returns the Defaults field if non-nil, zero value otherwise.

### GetDefaultsOk

`func (o *CreateSessionRequest) GetDefaultsOk() (*CreateSessionRequestDefaults, bool)`

GetDefaultsOk returns a tuple with the Defaults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaults

`func (o *CreateSessionRequest) SetDefaults(v CreateSessionRequestDefaults)`

SetDefaults sets Defaults field to given value.


### GetTtlSeconds

`func (o *CreateSessionRequest) GetTtlSeconds() int32`

GetTtlSeconds returns the TtlSeconds field if non-nil, zero value otherwise.

### GetTtlSecondsOk

`func (o *CreateSessionRequest) GetTtlSecondsOk() (*int32, bool)`

GetTtlSecondsOk returns a tuple with the TtlSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtlSeconds

`func (o *CreateSessionRequest) SetTtlSeconds(v int32)`

SetTtlSeconds sets TtlSeconds field to given value.

### HasTtlSeconds

`func (o *CreateSessionRequest) HasTtlSeconds() bool`

HasTtlSeconds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


