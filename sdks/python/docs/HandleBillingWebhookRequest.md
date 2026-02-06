# HandleBillingWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**data** | **object** |  | 

## Example

```python
from sipher_client.models.handle_billing_webhook_request import HandleBillingWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HandleBillingWebhookRequest from a JSON string
handle_billing_webhook_request_instance = HandleBillingWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(HandleBillingWebhookRequest.to_json())

# convert the object into a dict
handle_billing_webhook_request_dict = handle_billing_webhook_request_instance.to_dict()
# create an instance of HandleBillingWebhookRequest from a dict
handle_billing_webhook_request_from_dict = HandleBillingWebhookRequest.from_dict(handle_billing_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


