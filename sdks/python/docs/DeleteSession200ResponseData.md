# DeleteSession200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** |  | [optional] 
**deleted** | **bool** |  | [optional] 

## Example

```python
from sipher_client.models.delete_session200_response_data import DeleteSession200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteSession200ResponseData from a JSON string
delete_session200_response_data_instance = DeleteSession200ResponseData.from_json(json)
# print the JSON string representation of the object
print(DeleteSession200ResponseData.to_json())

# convert the object into a dict
delete_session200_response_data_dict = delete_session200_response_data_instance.to_dict()
# create an instance of DeleteSession200ResponseData from a dict
delete_session200_response_data_from_dict = DeleteSession200ResponseData.from_dict(delete_session200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


