# DecryptIncoResult200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**DecryptIncoResult200ResponseData**](DecryptIncoResult200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.decrypt_inco_result200_response import DecryptIncoResult200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DecryptIncoResult200Response from a JSON string
decrypt_inco_result200_response_instance = DecryptIncoResult200Response.from_json(json)
# print the JSON string representation of the object
print(DecryptIncoResult200Response.to_json())

# convert the object into a dict
decrypt_inco_result200_response_dict = decrypt_inco_result200_response_instance.to_dict()
# create an instance of DecryptIncoResult200Response from a dict
decrypt_inco_result200_response_from_dict = DecryptIncoResult200Response.from_dict(decrypt_inco_result200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


