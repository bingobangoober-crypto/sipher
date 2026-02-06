# GetBillingSubscription200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**plan** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**current_period_start** | **datetime** |  | [optional] 
**current_period_end** | **datetime** |  | [optional] 

## Example

```python
from sipher_client.models.get_billing_subscription200_response_data import GetBillingSubscription200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetBillingSubscription200ResponseData from a JSON string
get_billing_subscription200_response_data_instance = GetBillingSubscription200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetBillingSubscription200ResponseData.to_json())

# convert the object into a dict
get_billing_subscription200_response_data_dict = get_billing_subscription200_response_data_instance.to_dict()
# create an instance of GetBillingSubscription200ResponseData from a dict
get_billing_subscription200_response_data_from_dict = GetBillingSubscription200ResponseData.from_dict(get_billing_subscription200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


