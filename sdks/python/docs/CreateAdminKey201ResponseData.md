# CreateAdminKey201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**key** | **str** | Raw API key — shown only once | [optional] 
**tier** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**limits** | **object** |  | [optional] 
**notice** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.create_admin_key201_response_data import CreateAdminKey201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAdminKey201ResponseData from a JSON string
create_admin_key201_response_data_instance = CreateAdminKey201ResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateAdminKey201ResponseData.to_json())

# convert the object into a dict
create_admin_key201_response_data_dict = create_admin_key201_response_data_instance.to_dict()
# create an instance of CreateAdminKey201ResponseData from a dict
create_admin_key201_response_data_from_dict = CreateAdminKey201ResponseData.from_dict(create_admin_key201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


