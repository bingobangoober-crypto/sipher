# EncryptBallotRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposal_id** | **str** | Unique proposal identifier | 
**vote** | **str** | Vote choice | 
**voter_secret** | **str** | Private entropy for nullifier derivation (never stored) | 
**stealth_address** | **str** | Optional stealth address for voter anonymity (from /stealth/derive) | [optional] 

## Example

```python
from sipher_client.models.encrypt_ballot_request import EncryptBallotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptBallotRequest from a JSON string
encrypt_ballot_request_instance = EncryptBallotRequest.from_json(json)
# print the JSON string representation of the object
print(EncryptBallotRequest.to_json())

# convert the object into a dict
encrypt_ballot_request_dict = encrypt_ballot_request_instance.to_dict()
# create an instance of EncryptBallotRequest from a dict
encrypt_ballot_request_from_dict = EncryptBallotRequest.from_dict(encrypt_ballot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


