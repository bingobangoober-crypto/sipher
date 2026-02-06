# UpdateSession200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** |  | [optional] 
**defaults** | **object** |  | [optional] 
**expires_at** | **int** |  | [optional] 
**last_accessed_at** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.update_session200_response_data import UpdateSession200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSession200ResponseData from a JSON string
update_session200_response_data_instance = UpdateSession200ResponseData.from_json(json)
# print the JSON string representation of the object
print(UpdateSession200ResponseData.to_json())

# convert the object into a dict
update_session200_response_data_dict = update_session200_response_data_instance.to_dict()
# create an instance of UpdateSession200ResponseData from a dict
update_session200_response_data_from_dict = UpdateSession200ResponseData.from_dict(update_session200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


