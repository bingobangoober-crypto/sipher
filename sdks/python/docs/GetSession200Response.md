# GetSession200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetSession200ResponseData**](GetSession200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_session200_response import GetSession200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetSession200Response from a JSON string
get_session200_response_instance = GetSession200Response.from_json(json)
# print the JSON string representation of the object
print(GetSession200Response.to_json())

# convert the object into a dict
get_session200_response_dict = get_session200_response_instance.to_dict()
# create an instance of GetSession200Response from a dict
get_session200_response_from_dict = GetSession200Response.from_dict(get_session200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


