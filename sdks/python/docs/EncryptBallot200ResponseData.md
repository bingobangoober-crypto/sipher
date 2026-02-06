# EncryptBallot200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment** | **str** | Pedersen commitment to the vote value | [optional] 
**blinding_factor** | **str** | Blinding factor for the commitment | [optional] 
**nullifier** | **str** | Deterministic nullifier (prevents double-voting) | [optional] 
**vote** | **str** |  | [optional] 
**proposal_id** | **str** |  | [optional] 
**anonymous_id** | **str** | Anonymous voter identifier (stealth address or hash) | [optional] 

## Example

```python
from sipher_client.models.encrypt_ballot200_response_data import EncryptBallot200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptBallot200ResponseData from a JSON string
encrypt_ballot200_response_data_instance = EncryptBallot200ResponseData.from_json(json)
# print the JSON string representation of the object
print(EncryptBallot200ResponseData.to_json())

# convert the object into a dict
encrypt_ballot200_response_data_dict = encrypt_ballot200_response_data_instance.to_dict()
# create an instance of EncryptBallot200ResponseData from a dict
encrypt_ballot200_response_data_from_dict = EncryptBallot200ResponseData.from_dict(encrypt_ballot200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


