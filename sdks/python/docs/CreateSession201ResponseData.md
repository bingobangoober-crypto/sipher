# CreateSession201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** |  | [optional] 
**defaults** | **object** |  | [optional] 
**created_at** | **int** |  | [optional] 
**expires_at** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.create_session201_response_data import CreateSession201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSession201ResponseData from a JSON string
create_session201_response_data_instance = CreateSession201ResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateSession201ResponseData.to_json())

# convert the object into a dict
create_session201_response_data_dict = create_session201_response_data_instance.to_dict()
# create an instance of CreateSession201ResponseData from a dict
create_session201_response_data_from_dict = CreateSession201ResponseData.from_dict(create_session201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


