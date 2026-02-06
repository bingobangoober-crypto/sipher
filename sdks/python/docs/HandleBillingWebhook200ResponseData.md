# HandleBillingWebhook200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**processed** | **bool** |  | [optional] 

## Example

```python
from sipher_client.models.handle_billing_webhook200_response_data import HandleBillingWebhook200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of HandleBillingWebhook200ResponseData from a JSON string
handle_billing_webhook200_response_data_instance = HandleBillingWebhook200ResponseData.from_json(json)
# print the JSON string representation of the object
print(HandleBillingWebhook200ResponseData.to_json())

# convert the object into a dict
handle_billing_webhook200_response_data_dict = handle_billing_webhook200_response_data_instance.to_dict()
# create an instance of HandleBillingWebhook200ResponseData from a dict
handle_billing_webhook200_response_data_from_dict = HandleBillingWebhook200ResponseData.from_dict(handle_billing_webhook200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


