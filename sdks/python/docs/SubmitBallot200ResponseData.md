# SubmitBallot200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposal_id** | **str** |  | [optional] 
**nullifier** | **str** |  | [optional] 
**accepted** | **bool** |  | [optional] 
**total_ballots** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.submit_ballot200_response_data import SubmitBallot200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitBallot200ResponseData from a JSON string
submit_ballot200_response_data_instance = SubmitBallot200ResponseData.from_json(json)
# print the JSON string representation of the object
print(SubmitBallot200ResponseData.to_json())

# convert the object into a dict
submit_ballot200_response_data_dict = submit_ballot200_response_data_instance.to_dict()
# create an instance of SubmitBallot200ResponseData from a dict
submit_ballot200_response_data_from_dict = SubmitBallot200ResponseData.from_dict(submit_ballot200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


