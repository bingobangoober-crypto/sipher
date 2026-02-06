# CsplWrap200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**CsplWrap200ResponseData**](CsplWrap200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.cspl_wrap200_response import CsplWrap200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CsplWrap200Response from a JSON string
cspl_wrap200_response_instance = CsplWrap200Response.from_json(json)
# print the JSON string representation of the object
print(CsplWrap200Response.to_json())

# convert the object into a dict
cspl_wrap200_response_dict = cspl_wrap200_response_instance.to_dict()
# create an instance of CsplWrap200Response from a dict
cspl_wrap200_response_from_dict = CsplWrap200Response.from_dict(cspl_wrap200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


