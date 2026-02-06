# CreateAdminKey201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**CreateAdminKey201ResponseData**](CreateAdminKey201ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.create_admin_key201_response import CreateAdminKey201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAdminKey201Response from a JSON string
create_admin_key201_response_instance = CreateAdminKey201Response.from_json(json)
# print the JSON string representation of the object
print(CreateAdminKey201Response.to_json())

# convert the object into a dict
create_admin_key201_response_dict = create_admin_key201_response_instance.to_dict()
# create an instance of CreateAdminKey201Response from a dict
create_admin_key201_response_from_dict = CreateAdminKey201Response.from_dict(create_admin_key201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


