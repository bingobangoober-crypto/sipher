# ListAdminTiers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ListAdminTiers200ResponseData**](ListAdminTiers200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.list_admin_tiers200_response import ListAdminTiers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdminTiers200Response from a JSON string
list_admin_tiers200_response_instance = ListAdminTiers200Response.from_json(json)
# print the JSON string representation of the object
print(ListAdminTiers200Response.to_json())

# convert the object into a dict
list_admin_tiers200_response_dict = list_admin_tiers200_response_instance.to_dict()
# create an instance of ListAdminTiers200Response from a dict
list_admin_tiers200_response_from_dict = ListAdminTiers200Response.from_dict(list_admin_tiers200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


