# CreateSessionRequestDefaults


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **str** |  | [optional] 
**privacy_level** | **str** |  | [optional] 
**rpc_provider** | **str** |  | [optional] 
**backend** | **str** |  | [optional] 
**default_viewing_key** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.create_session_request_defaults import CreateSessionRequestDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSessionRequestDefaults from a JSON string
create_session_request_defaults_instance = CreateSessionRequestDefaults.from_json(json)
# print the JSON string representation of the object
print(CreateSessionRequestDefaults.to_json())

# convert the object into a dict
create_session_request_defaults_dict = create_session_request_defaults_instance.to_dict()
# create an instance of CreateSessionRequestDefaults from a dict
create_session_request_defaults_from_dict = CreateSessionRequestDefaults.from_dict(create_session_request_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


