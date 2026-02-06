# ProofsFundingGenerate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**ProofsFundingGenerate200ResponseData**](ProofsFundingGenerate200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.proofs_funding_generate200_response import ProofsFundingGenerate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsFundingGenerate200Response from a JSON string
proofs_funding_generate200_response_instance = ProofsFundingGenerate200Response.from_json(json)
# print the JSON string representation of the object
print(ProofsFundingGenerate200Response.to_json())

# convert the object into a dict
proofs_funding_generate200_response_dict = proofs_funding_generate200_response_instance.to_dict()
# create an instance of ProofsFundingGenerate200Response from a dict
proofs_funding_generate200_response_from_dict = ProofsFundingGenerate200Response.from_dict(proofs_funding_generate200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


