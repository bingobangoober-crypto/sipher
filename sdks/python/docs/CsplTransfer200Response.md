# CsplTransfer200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**CsplTransfer200ResponseData**](CsplTransfer200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.cspl_transfer200_response import CsplTransfer200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CsplTransfer200Response from a JSON string
cspl_transfer200_response_instance = CsplTransfer200Response.from_json(json)
# print the JSON string representation of the object
print(CsplTransfer200Response.to_json())

# convert the object into a dict
cspl_transfer200_response_dict = cspl_transfer200_response_instance.to_dict()
# create an instance of CsplTransfer200Response from a dict
cspl_transfer200_response_from_dict = CsplTransfer200Response.from_dict(cspl_transfer200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


