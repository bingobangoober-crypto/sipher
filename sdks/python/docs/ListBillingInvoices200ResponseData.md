# ListBillingInvoices200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoices** | **List[object]** |  | [optional] 
**total** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.list_billing_invoices200_response_data import ListBillingInvoices200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListBillingInvoices200ResponseData from a JSON string
list_billing_invoices200_response_data_instance = ListBillingInvoices200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ListBillingInvoices200ResponseData.to_json())

# convert the object into a dict
list_billing_invoices200_response_data_dict = list_billing_invoices200_response_data_instance.to_dict()
# create an instance of ListBillingInvoices200ResponseData from a dict
list_billing_invoices200_response_data_from_dict = ListBillingInvoices200ResponseData.from_dict(list_billing_invoices200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


