# SubmitBallotRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposal_id** | **str** |  | 
**commitment** | **str** | 0x-prefixed 32-byte hex string | 
**blinding_factor** | **str** | 0x-prefixed 32-byte hex string | 
**nullifier** | **str** | 0x-prefixed 32-byte hex string | 
**vote** | **str** |  | 
**stealth_address** | **str** | Optional stealth address for voter anonymity | [optional] 

## Example

```python
from sipher_client.models.submit_ballot_request import SubmitBallotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitBallotRequest from a JSON string
submit_ballot_request_instance = SubmitBallotRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitBallotRequest.to_json())

# convert the object into a dict
submit_ballot_request_dict = submit_ballot_request_instance.to_dict()
# create an instance of SubmitBallotRequest from a dict
submit_ballot_request_from_dict = SubmitBallotRequest.from_dict(submit_ballot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


