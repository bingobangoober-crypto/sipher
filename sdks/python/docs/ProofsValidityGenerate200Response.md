# ProofsValidityGenerate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**ProofsValidityGenerate200ResponseData**](ProofsValidityGenerate200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.proofs_validity_generate200_response import ProofsValidityGenerate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsValidityGenerate200Response from a JSON string
proofs_validity_generate200_response_instance = ProofsValidityGenerate200Response.from_json(json)
# print the JSON string representation of the object
print(ProofsValidityGenerate200Response.to_json())

# convert the object into a dict
proofs_validity_generate200_response_dict = proofs_validity_generate200_response_instance.to_dict()
# create an instance of ProofsValidityGenerate200Response from a dict
proofs_validity_generate200_response_from_dict = ProofsValidityGenerate200Response.from_dict(proofs_validity_generate200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


