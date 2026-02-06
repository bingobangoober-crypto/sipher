# GetTally200ResponseData


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
**tallied_at** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.get_tally200_response_data import GetTally200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetTally200ResponseData from a JSON string
get_tally200_response_data_instance = GetTally200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetTally200ResponseData.to_json())

# convert the object into a dict
get_tally200_response_data_dict = get_tally200_response_data_instance.to_dict()
# create an instance of GetTally200ResponseData from a dict
get_tally200_response_data_from_dict = GetTally200ResponseData.from_dict(get_tally200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


