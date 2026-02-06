# EncryptBallot200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**EncryptBallot200ResponseData**](EncryptBallot200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.encrypt_ballot200_response import EncryptBallot200Response

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptBallot200Response from a JSON string
encrypt_ballot200_response_instance = EncryptBallot200Response.from_json(json)
# print the JSON string representation of the object
print(EncryptBallot200Response.to_json())

# convert the object into a dict
encrypt_ballot200_response_dict = encrypt_ballot200_response_instance.to_dict()
# create an instance of EncryptBallot200Response from a dict
encrypt_ballot200_response_from_dict = EncryptBallot200Response.from_dict(encrypt_ballot200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


