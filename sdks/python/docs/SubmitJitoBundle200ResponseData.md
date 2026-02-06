# SubmitJitoBundle200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**tip_account** | **str** | Jito tip account address | [optional] 
**tip_lamports** | **str** |  | [optional] 
**gas_sponsored** | **bool** |  | [optional] 
**slot** | **int** |  | [optional] 
**signature** | **str** |  | [optional] 
**estimated_confirmation** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.submit_jito_bundle200_response_data import SubmitJitoBundle200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitJitoBundle200ResponseData from a JSON string
submit_jito_bundle200_response_data_instance = SubmitJitoBundle200ResponseData.from_json(json)
# print the JSON string representation of the object
print(SubmitJitoBundle200ResponseData.to_json())

# convert the object into a dict
submit_jito_bundle200_response_data_dict = submit_jito_bundle200_response_data_instance.to_dict()
# create an instance of SubmitJitoBundle200ResponseData from a dict
submit_jito_bundle200_response_data_from_dict = SubmitJitoBundle200ResponseData.from_dict(submit_jito_bundle200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


