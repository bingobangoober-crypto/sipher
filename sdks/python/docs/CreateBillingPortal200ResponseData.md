# CreateBillingPortal200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 

## Example

```python
from sipher_client.models.create_billing_portal200_response_data import CreateBillingPortal200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBillingPortal200ResponseData from a JSON string
create_billing_portal200_response_data_instance = CreateBillingPortal200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateBillingPortal200ResponseData.to_json())

# convert the object into a dict
create_billing_portal200_response_data_dict = create_billing_portal200_response_data_instance.to_dict()
# create an instance of CreateBillingPortal200ResponseData from a dict
create_billing_portal200_response_data_from_dict = CreateBillingPortal200ResponseData.from_dict(create_billing_portal200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


