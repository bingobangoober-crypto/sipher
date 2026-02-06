# GetArciumComputationStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**GetArciumComputationStatus200ResponseData**](GetArciumComputationStatus200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_arcium_computation_status200_response import GetArciumComputationStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetArciumComputationStatus200Response from a JSON string
get_arcium_computation_status200_response_instance = GetArciumComputationStatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetArciumComputationStatus200Response.to_json())

# convert the object into a dict
get_arcium_computation_status200_response_dict = get_arcium_computation_status200_response_instance.to_dict()
# create an instance of GetArciumComputationStatus200Response from a dict
get_arcium_computation_status200_response_from_dict = GetArciumComputationStatus200Response.from_dict(get_arcium_computation_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


