# ListAdminTiers200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tiers** | [**List[ListAdminTiers200ResponseDataTiersInner]**](ListAdminTiers200ResponseDataTiersInner.md) |  | [optional] 

## Example

```python
from sipher_client.models.list_admin_tiers200_response_data import ListAdminTiers200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdminTiers200ResponseData from a JSON string
list_admin_tiers200_response_data_instance = ListAdminTiers200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ListAdminTiers200ResponseData.to_json())

# convert the object into a dict
list_admin_tiers200_response_data_dict = list_admin_tiers200_response_data_instance.to_dict()
# create an instance of ListAdminTiers200ResponseData from a dict
list_admin_tiers200_response_data_from_dict = ListAdminTiers200ResponseData.from_dict(list_admin_tiers200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


