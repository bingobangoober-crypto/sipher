# GetJitoBundleStatus200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**progress** | **int** |  | [optional] 
**slot** | **int** |  | [optional] 
**signature** | **str** |  | [optional] 
**confirmed_at** | **int** | Present when status is confirmed | [optional] 

## Example

```python
from sipher_client.models.get_jito_bundle_status200_response_data import GetJitoBundleStatus200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetJitoBundleStatus200ResponseData from a JSON string
get_jito_bundle_status200_response_data_instance = GetJitoBundleStatus200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetJitoBundleStatus200ResponseData.to_json())

# convert the object into a dict
get_jito_bundle_status200_response_data_dict = get_jito_bundle_status200_response_data_instance.to_dict()
# create an instance of GetJitoBundleStatus200ResponseData from a dict
get_jito_bundle_status200_response_data_from_dict = GetJitoBundleStatus200ResponseData.from_dict(get_jito_bundle_status200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


