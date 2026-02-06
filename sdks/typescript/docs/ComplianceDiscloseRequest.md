
# ComplianceDiscloseRequest


## Properties

Name | Type
------------ | -------------
`viewingKey` | [ViewingKey](ViewingKey.md)
`transactionData` | [ComplianceDiscloseRequestTransactionData](ComplianceDiscloseRequestTransactionData.md)
`scope` | [ComplianceDiscloseRequestScope](ComplianceDiscloseRequestScope.md)
`auditorId` | string
`auditorVerification` | [ComplianceDiscloseRequestAuditorVerification](ComplianceDiscloseRequestAuditorVerification.md)

## Example

```typescript
import type { ComplianceDiscloseRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "viewingKey": null,
  "transactionData": null,
  "scope": null,
  "auditorId": null,
  "auditorVerification": null,
} satisfies ComplianceDiscloseRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComplianceDiscloseRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


