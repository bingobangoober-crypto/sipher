# CsplUnwrap200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**CsplUnwrap200ResponseData**](CsplUnwrap200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.cspl_unwrap200_response import CsplUnwrap200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CsplUnwrap200Response from a JSON string
cspl_unwrap200_response_instance = CsplUnwrap200Response.from_json(json)
# print the JSON string representation of the object
print(CsplUnwrap200Response.to_json())

# convert the object into a dict
cspl_unwrap200_response_dict = cspl_unwrap200_response_instance.to_dict()
# create an instance of CsplUnwrap200Response from a dict
cspl_unwrap200_response_from_dict = CsplUnwrap200Response.from_dict(cspl_unwrap200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


