# GetSession200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** |  | [optional] 
**defaults** | **object** |  | [optional] 
**created_at** | **int** |  | [optional] 
**expires_at** | **int** |  | [optional] 
**last_accessed_at** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.get_session200_response_data import GetSession200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetSession200ResponseData from a JSON string
get_session200_response_data_instance = GetSession200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetSession200ResponseData.to_json())

# convert the object into a dict
get_session200_response_data_dict = get_session200_response_data_instance.to_dict()
# create an instance of GetSession200ResponseData from a dict
get_session200_response_data_from_dict = GetSession200ResponseData.from_dict(get_session200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


