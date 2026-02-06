# UpdateSession200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**UpdateSession200ResponseData**](UpdateSession200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.update_session200_response import UpdateSession200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSession200Response from a JSON string
update_session200_response_instance = UpdateSession200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateSession200Response.to_json())

# convert the object into a dict
update_session200_response_dict = update_session200_response_instance.to_dict()
# create an instance of UpdateSession200Response from a dict
update_session200_response_from_dict = UpdateSession200Response.from_dict(update_session200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


