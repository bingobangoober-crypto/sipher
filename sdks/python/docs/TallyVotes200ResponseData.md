# TallyVotes200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tally_id** | **str** |  | [optional] 
**proposal_id** | **str** |  | [optional] 
**total_votes** | **int** |  | [optional] 
**yes_votes** | **int** |  | [optional] 
**no_votes** | **int** |  | [optional] 
**abstain_votes** | **int** |  | [optional] 
**tally_commitment** | **str** |  | [optional] 
**tally_blinding** | **str** |  | [optional] 
**verification_hash** | **str** |  | [optional] 
**verified** | **bool** |  | [optional] 

## Example

```python
from sipher_client.models.tally_votes200_response_data import TallyVotes200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TallyVotes200ResponseData from a JSON string
tally_votes200_response_data_instance = TallyVotes200ResponseData.from_json(json)
# print the JSON string representation of the object
print(TallyVotes200ResponseData.to_json())

# convert the object into a dict
tally_votes200_response_data_dict = tally_votes200_response_data_instance.to_dict()
# create an instance of TallyVotes200ResponseData from a dict
tally_votes200_response_data_from_dict = TallyVotes200ResponseData.from_dict(tally_votes200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


