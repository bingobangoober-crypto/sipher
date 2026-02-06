# SubmitJitoBundleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions** | **List[str]** | Base64-encoded serialized Solana transactions | 
**tip_lamports** | **str** | Tip amount in lamports (minimum 1000) | [optional] [default to '10000']
**gas_sponsorship** | **bool** | Enable gas sponsorship (enterprise tier only) | [optional] [default to False]

## Example

```python
from sipher_client.models.submit_jito_bundle_request import SubmitJitoBundleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitJitoBundleRequest from a JSON string
submit_jito_bundle_request_instance = SubmitJitoBundleRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitJitoBundleRequest.to_json())

# convert the object into a dict
submit_jito_bundle_request_dict = submit_jito_bundle_request_instance.to_dict()
# create an instance of SubmitJitoBundleRequest from a dict
submit_jito_bundle_request_from_dict = SubmitJitoBundleRequest.from_dict(submit_jito_bundle_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


