
# GetComplianceReport200ResponseData


## Properties

Name | Type
------------ | -------------
`reportId` | string
`status` | string
`generatedAt` | number
`expiresAt` | number
`summary` | object
`encryptedReport` | string
`reportHash` | string

## Example

```typescript
import type { GetComplianceReport200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "reportId": null,
  "status": null,
  "generatedAt": null,
  "expiresAt": null,
  "summary": null,
  "encryptedReport": null,
  "reportHash": null,
} satisfies GetComplianceReport200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetComplianceReport200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


