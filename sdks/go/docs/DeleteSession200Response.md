# DeleteSession200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**DeleteSession200ResponseData**](DeleteSession200ResponseData.md) |  | [optional] 

## Methods

### NewDeleteSession200Response

`func NewDeleteSession200Response() *DeleteSession200Response`

NewDeleteSession200Response instantiates a new DeleteSession200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteSession200ResponseWithDefaults

`func NewDeleteSession200ResponseWithDefaults() *DeleteSession200Response`

NewDeleteSession200ResponseWithDefaults instantiates a new DeleteSession200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *DeleteSession200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *DeleteSession200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *DeleteSession200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *DeleteSession200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *DeleteSession200Response) GetData() DeleteSession200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *DeleteSession200Response) GetDataOk() (*DeleteSession200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *DeleteSession200Response) SetData(v DeleteSession200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *DeleteSession200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


