# GetBillingUsage200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** |  | [optional] 
**tier** | **str** |  | [optional] 
**total** | **int** |  | [optional] 
**quota_total** | **int** |  | [optional] 
**categories** | [**Dict[str, GetBillingUsage200ResponseDataCategoriesValue]**](GetBillingUsage200ResponseDataCategoriesValue.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_billing_usage200_response_data import GetBillingUsage200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetBillingUsage200ResponseData from a JSON string
get_billing_usage200_response_data_instance = GetBillingUsage200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetBillingUsage200ResponseData.to_json())

# convert the object into a dict
get_billing_usage200_response_data_dict = get_billing_usage200_response_data_instance.to_dict()
# create an instance of GetBillingUsage200ResponseData from a dict
get_billing_usage200_response_data_from_dict = GetBillingUsage200ResponseData.from_dict(get_billing_usage200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


