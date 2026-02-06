# GetAdminKey200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**key** | **str** | Masked key (first 12 + last 4 chars) | [optional] 
**tier** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**revoked_at** | **datetime** |  | [optional] 
**limits** | **object** |  | [optional] 
**usage** | **object** |  | [optional] 

## Example

```python
from sipher_client.models.get_admin_key200_response_data import GetAdminKey200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetAdminKey200ResponseData from a JSON string
get_admin_key200_response_data_instance = GetAdminKey200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetAdminKey200ResponseData.to_json())

# convert the object into a dict
get_admin_key200_response_data_dict = get_admin_key200_response_data_instance.to_dict()
# create an instance of GetAdminKey200ResponseData from a dict
get_admin_key200_response_data_from_dict = GetAdminKey200ResponseData.from_dict(get_admin_key200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


