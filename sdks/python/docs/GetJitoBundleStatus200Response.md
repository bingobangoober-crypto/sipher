# GetJitoBundleStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**GetJitoBundleStatus200ResponseData**](GetJitoBundleStatus200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_jito_bundle_status200_response import GetJitoBundleStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetJitoBundleStatus200Response from a JSON string
get_jito_bundle_status200_response_instance = GetJitoBundleStatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetJitoBundleStatus200Response.to_json())

# convert the object into a dict
get_jito_bundle_status200_response_dict = get_jito_bundle_status200_response_instance.to_dict()
# create an instance of GetJitoBundleStatus200Response from a dict
get_jito_bundle_status200_response_from_dict = GetJitoBundleStatus200Response.from_dict(get_jito_bundle_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


