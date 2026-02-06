
# ComplianceReportRequest


## Properties

Name | Type
------------ | -------------
`viewingKey` | [ViewingKey](ViewingKey.md)
`startTime` | number
`endTime` | number
`auditorId` | string
`auditorVerification` | [ComplianceDiscloseRequestAuditorVerification](ComplianceDiscloseRequestAuditorVerification.md)
`includeCounterparties` | boolean

## Example

```typescript
import type { ComplianceReportRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "viewingKey": null,
  "startTime": null,
  "endTime": null,
  "auditorId": null,
  "auditorVerification": null,
  "includeCounterparties": null,
} satisfies ComplianceReportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComplianceReportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


