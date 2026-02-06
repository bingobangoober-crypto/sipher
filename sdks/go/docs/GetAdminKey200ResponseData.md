# GetAdminKey200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Key** | Pointer to **string** | Masked key (first 12 + last 4 chars) | [optional] 
**Tier** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**ExpiresAt** | Pointer to **time.Time** |  | [optional] 
**RevokedAt** | Pointer to **time.Time** |  | [optional] 
**Limits** | Pointer to **map[string]interface{}** |  | [optional] 
**Usage** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewGetAdminKey200ResponseData

`func NewGetAdminKey200ResponseData() *GetAdminKey200ResponseData`

NewGetAdminKey200ResponseData instantiates a new GetAdminKey200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAdminKey200ResponseDataWithDefaults

`func NewGetAdminKey200ResponseDataWithDefaults() *GetAdminKey200ResponseData`

NewGetAdminKey200ResponseDataWithDefaults instantiates a new GetAdminKey200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetAdminKey200ResponseData) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetAdminKey200ResponseData) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetAdminKey200ResponseData) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetAdminKey200ResponseData) HasId() bool`

HasId returns a boolean if a field has been set.

### GetKey

`func (o *GetAdminKey200ResponseData) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *GetAdminKey200ResponseData) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *GetAdminKey200ResponseData) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *GetAdminKey200ResponseData) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetTier

`func (o *GetAdminKey200ResponseData) GetTier() string`

GetTier returns the Tier field if non-nil, zero value otherwise.

### GetTierOk

`func (o *GetAdminKey200ResponseData) GetTierOk() (*string, bool)`

GetTierOk returns a tuple with the Tier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTier

`func (o *GetAdminKey200ResponseData) SetTier(v string)`

SetTier sets Tier field to given value.

### HasTier

`func (o *GetAdminKey200ResponseData) HasTier() bool`

HasTier returns a boolean if a field has been set.

### GetName

`func (o *GetAdminKey200ResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetAdminKey200ResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetAdminKey200ResponseData) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GetAdminKey200ResponseData) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreatedAt

`func (o *GetAdminKey200ResponseData) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetAdminKey200ResponseData) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetAdminKey200ResponseData) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GetAdminKey200ResponseData) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *GetAdminKey200ResponseData) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *GetAdminKey200ResponseData) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *GetAdminKey200ResponseData) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *GetAdminKey200ResponseData) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetRevokedAt

`func (o *GetAdminKey200ResponseData) GetRevokedAt() time.Time`

GetRevokedAt returns the RevokedAt field if non-nil, zero value otherwise.

### GetRevokedAtOk

`func (o *GetAdminKey200ResponseData) GetRevokedAtOk() (*time.Time, bool)`

GetRevokedAtOk returns a tuple with the RevokedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevokedAt

`func (o *GetAdminKey200ResponseData) SetRevokedAt(v time.Time)`

SetRevokedAt sets RevokedAt field to given value.

### HasRevokedAt

`func (o *GetAdminKey200ResponseData) HasRevokedAt() bool`

HasRevokedAt returns a boolean if a field has been set.

### GetLimits

`func (o *GetAdminKey200ResponseData) GetLimits() map[string]interface{}`

GetLimits returns the Limits field if non-nil, zero value otherwise.

### GetLimitsOk

`func (o *GetAdminKey200ResponseData) GetLimitsOk() (*map[string]interface{}, bool)`

GetLimitsOk returns a tuple with the Limits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimits

`func (o *GetAdminKey200ResponseData) SetLimits(v map[string]interface{})`

SetLimits sets Limits field to given value.

### HasLimits

`func (o *GetAdminKey200ResponseData) HasLimits() bool`

HasLimits returns a boolean if a field has been set.

### GetUsage

`func (o *GetAdminKey200ResponseData) GetUsage() map[string]interface{}`

GetUsage returns the Usage field if non-nil, zero value otherwise.

### GetUsageOk

`func (o *GetAdminKey200ResponseData) GetUsageOk() (*map[string]interface{}, bool)`

GetUsageOk returns a tuple with the Usage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsage

`func (o *GetAdminKey200ResponseData) SetUsage(v map[string]interface{})`

SetUsage sets Usage field to given value.

### HasUsage

`func (o *GetAdminKey200ResponseData) HasUsage() bool`

HasUsage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


