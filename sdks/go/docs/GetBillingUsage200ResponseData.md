# GetBillingUsage200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** |  | [optional] 
**Tier** | Pointer to **string** |  | [optional] 
**Total** | Pointer to **int32** |  | [optional] 
**QuotaTotal** | Pointer to **int32** |  | [optional] 
**Categories** | Pointer to [**map[string]GetBillingUsage200ResponseDataCategoriesValue**](GetBillingUsage200ResponseDataCategoriesValue.md) |  | [optional] 

## Methods

### NewGetBillingUsage200ResponseData

`func NewGetBillingUsage200ResponseData() *GetBillingUsage200ResponseData`

NewGetBillingUsage200ResponseData instantiates a new GetBillingUsage200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetBillingUsage200ResponseDataWithDefaults

`func NewGetBillingUsage200ResponseDataWithDefaults() *GetBillingUsage200ResponseData`

NewGetBillingUsage200ResponseDataWithDefaults instantiates a new GetBillingUsage200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *GetBillingUsage200ResponseData) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *GetBillingUsage200ResponseData) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *GetBillingUsage200ResponseData) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *GetBillingUsage200ResponseData) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetTier

`func (o *GetBillingUsage200ResponseData) GetTier() string`

GetTier returns the Tier field if non-nil, zero value otherwise.

### GetTierOk

`func (o *GetBillingUsage200ResponseData) GetTierOk() (*string, bool)`

GetTierOk returns a tuple with the Tier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTier

`func (o *GetBillingUsage200ResponseData) SetTier(v string)`

SetTier sets Tier field to given value.

### HasTier

`func (o *GetBillingUsage200ResponseData) HasTier() bool`

HasTier returns a boolean if a field has been set.

### GetTotal

`func (o *GetBillingUsage200ResponseData) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *GetBillingUsage200ResponseData) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *GetBillingUsage200ResponseData) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *GetBillingUsage200ResponseData) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetQuotaTotal

`func (o *GetBillingUsage200ResponseData) GetQuotaTotal() int32`

GetQuotaTotal returns the QuotaTotal field if non-nil, zero value otherwise.

### GetQuotaTotalOk

`func (o *GetBillingUsage200ResponseData) GetQuotaTotalOk() (*int32, bool)`

GetQuotaTotalOk returns a tuple with the QuotaTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuotaTotal

`func (o *GetBillingUsage200ResponseData) SetQuotaTotal(v int32)`

SetQuotaTotal sets QuotaTotal field to given value.

### HasQuotaTotal

`func (o *GetBillingUsage200ResponseData) HasQuotaTotal() bool`

HasQuotaTotal returns a boolean if a field has been set.

### GetCategories

`func (o *GetBillingUsage200ResponseData) GetCategories() map[string]GetBillingUsage200ResponseDataCategoriesValue`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *GetBillingUsage200ResponseData) GetCategoriesOk() (*map[string]GetBillingUsage200ResponseDataCategoriesValue, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *GetBillingUsage200ResponseData) SetCategories(v map[string]GetBillingUsage200ResponseDataCategoriesValue)`

SetCategories sets Categories field to given value.

### HasCategories

`func (o *GetBillingUsage200ResponseData) HasCategories() bool`

HasCategories returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


