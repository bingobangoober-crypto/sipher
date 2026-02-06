# CreateBillingPortal200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**CreateBillingPortal200ResponseData**](CreateBillingPortal200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.create_billing_portal200_response import CreateBillingPortal200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBillingPortal200Response from a JSON string
create_billing_portal200_response_instance = CreateBillingPortal200Response.from_json(json)
# print the JSON string representation of the object
print(CreateBillingPortal200Response.to_json())

# convert the object into a dict
create_billing_portal200_response_dict = create_billing_portal200_response_instance.to_dict()
# create an instance of CreateBillingPortal200Response from a dict
create_billing_portal200_response_from_dict = CreateBillingPortal200Response.from_dict(create_billing_portal200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


