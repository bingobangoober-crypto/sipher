# GetArciumComputationStatus200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | Option<**String**> |  | [optional]
**circuit_id** | Option<**String**> |  | [optional]
**chain** | Option<**String**> |  | [optional]
**status** | Option<**Status**> |  (enum: submitted, encrypting, processing, finalizing, completed) | [optional]
**progress** | Option<**i32**> |  | [optional]
**output** | Option<**String**> | Only present when status is completed | [optional]
**proof** | Option<**String**> | Only present when status is completed | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


