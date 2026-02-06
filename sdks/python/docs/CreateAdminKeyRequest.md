# CreateAdminKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tier** | **str** |  | 
**name** | **str** |  | 
**expires_at** | **datetime** |  | [optional] 
**metadata** | **Dict[str, object]** |  | [optional] 

## Example

```python
from sipher_client.models.create_admin_key_request import CreateAdminKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAdminKeyRequest from a JSON string
create_admin_key_request_instance = CreateAdminKeyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAdminKeyRequest.to_json())

# convert the object into a dict
create_admin_key_request_dict = create_admin_key_request_instance.to_dict()
# create an instance of CreateAdminKeyRequest from a dict
create_admin_key_request_from_dict = CreateAdminKeyRequest.from_dict(create_admin_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


