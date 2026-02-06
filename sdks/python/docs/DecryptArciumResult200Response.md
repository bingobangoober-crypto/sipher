# DecryptArciumResult200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**DecryptArciumResult200ResponseData**](DecryptArciumResult200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.decrypt_arcium_result200_response import DecryptArciumResult200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DecryptArciumResult200Response from a JSON string
decrypt_arcium_result200_response_instance = DecryptArciumResult200Response.from_json(json)
# print the JSON string representation of the object
print(DecryptArciumResult200Response.to_json())

# convert the object into a dict
decrypt_arcium_result200_response_dict = decrypt_arcium_result200_response_instance.to_dict()
# create an instance of DecryptArciumResult200Response from a dict
decrypt_arcium_result200_response_from_dict = DecryptArciumResult200Response.from_dict(decrypt_arcium_result200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


