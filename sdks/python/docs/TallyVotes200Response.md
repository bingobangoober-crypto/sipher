# TallyVotes200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**data** | [**TallyVotes200ResponseData**](TallyVotes200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.tally_votes200_response import TallyVotes200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TallyVotes200Response from a JSON string
tally_votes200_response_instance = TallyVotes200Response.from_json(json)
# print the JSON string representation of the object
print(TallyVotes200Response.to_json())

# convert the object into a dict
tally_votes200_response_dict = tally_votes200_response_instance.to_dict()
# create an instance of TallyVotes200Response from a dict
tally_votes200_response_from_dict = TallyVotes200Response.from_dict(tally_votes200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


