# TallyVotesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposal_id** | **str** |  | 

## Example

```python
from sipher_client.models.tally_votes_request import TallyVotesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TallyVotesRequest from a JSON string
tally_votes_request_instance = TallyVotesRequest.from_json(json)
# print the JSON string representation of the object
print(TallyVotesRequest.to_json())

# convert the object into a dict
tally_votes_request_dict = tally_votes_request_instance.to_dict()
# create an instance of TallyVotesRequest from a dict
tally_votes_request_from_dict = TallyVotesRequest.from_dict(tally_votes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


