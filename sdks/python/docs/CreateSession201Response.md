# CreateSession201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**CreateSession201ResponseData**](CreateSession201ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.create_session201_response import CreateSession201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSession201Response from a JSON string
create_session201_response_instance = CreateSession201Response.from_json(json)
# print the JSON string representation of the object
print(CreateSession201Response.to_json())

# convert the object into a dict
create_session201_response_dict = create_session201_response_instance.to_dict()
# create an instance of CreateSession201Response from a dict
create_session201_response_from_dict = CreateSession201Response.from_dict(create_session201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


