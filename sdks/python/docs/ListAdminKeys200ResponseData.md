# ListAdminKeys200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | **List[object]** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.list_admin_keys200_response_data import ListAdminKeys200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdminKeys200ResponseData from a JSON string
list_admin_keys200_response_data_instance = ListAdminKeys200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ListAdminKeys200ResponseData.to_json())

# convert the object into a dict
list_admin_keys200_response_data_dict = list_admin_keys200_response_data_instance.to_dict()
# create an instance of ListAdminKeys200ResponseData from a dict
list_admin_keys200_response_data_from_dict = ListAdminKeys200ResponseData.from_dict(list_admin_keys200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


