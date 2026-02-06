# GetAdminKey200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetAdminKey200ResponseData**](GetAdminKey200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_admin_key200_response import GetAdminKey200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAdminKey200Response from a JSON string
get_admin_key200_response_instance = GetAdminKey200Response.from_json(json)
# print the JSON string representation of the object
print(GetAdminKey200Response.to_json())

# convert the object into a dict
get_admin_key200_response_dict = get_admin_key200_response_instance.to_dict()
# create an instance of GetAdminKey200Response from a dict
get_admin_key200_response_from_dict = GetAdminKey200Response.from_dict(get_admin_key200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


