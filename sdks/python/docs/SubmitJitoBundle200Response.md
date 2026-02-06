# SubmitJitoBundle200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**SubmitJitoBundle200ResponseData**](SubmitJitoBundle200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.submit_jito_bundle200_response import SubmitJitoBundle200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitJitoBundle200Response from a JSON string
submit_jito_bundle200_response_instance = SubmitJitoBundle200Response.from_json(json)
# print the JSON string representation of the object
print(SubmitJitoBundle200Response.to_json())

# convert the object into a dict
submit_jito_bundle200_response_dict = submit_jito_bundle200_response_instance.to_dict()
# create an instance of SubmitJitoBundle200Response from a dict
submit_jito_bundle200_response_from_dict = SubmitJitoBundle200Response.from_dict(submit_jito_bundle200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


