# CreateBillingSubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | **str** |  | 

## Example

```python
from sipher_client.models.create_billing_subscription_request import CreateBillingSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBillingSubscriptionRequest from a JSON string
create_billing_subscription_request_instance = CreateBillingSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBillingSubscriptionRequest.to_json())

# convert the object into a dict
create_billing_subscription_request_dict = create_billing_subscription_request_instance.to_dict()
# create an instance of CreateBillingSubscriptionRequest from a dict
create_billing_subscription_request_from_dict = CreateBillingSubscriptionRequest.from_dict(create_billing_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


