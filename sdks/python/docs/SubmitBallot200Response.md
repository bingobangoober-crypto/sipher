# SubmitBallot200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**data** | [**SubmitBallot200ResponseData**](SubmitBallot200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.submit_ballot200_response import SubmitBallot200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitBallot200Response from a JSON string
submit_ballot200_response_instance = SubmitBallot200Response.from_json(json)
# print the JSON string representation of the object
print(SubmitBallot200Response.to_json())

# convert the object into a dict
submit_ballot200_response_dict = submit_ballot200_response_instance.to_dict()
# create an instance of SubmitBallot200Response from a dict
submit_ballot200_response_from_dict = SubmitBallot200Response.from_dict(submit_ballot200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


