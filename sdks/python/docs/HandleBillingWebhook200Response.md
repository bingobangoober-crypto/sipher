# HandleBillingWebhook200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**HandleBillingWebhook200ResponseData**](HandleBillingWebhook200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.handle_billing_webhook200_response import HandleBillingWebhook200Response

# TODO update the JSON string below
json = "{}"
# create an instance of HandleBillingWebhook200Response from a JSON string
handle_billing_webhook200_response_instance = HandleBillingWebhook200Response.from_json(json)
# print the JSON string representation of the object
print(HandleBillingWebhook200Response.to_json())

# convert the object into a dict
handle_billing_webhook200_response_dict = handle_billing_webhook200_response_instance.to_dict()
# create an instance of HandleBillingWebhook200Response from a dict
handle_billing_webhook200_response_from_dict = HandleBillingWebhook200Response.from_dict(handle_billing_webhook200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


