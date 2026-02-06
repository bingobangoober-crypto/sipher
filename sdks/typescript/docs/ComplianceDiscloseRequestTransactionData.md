
# ComplianceDiscloseRequestTransactionData


## Properties

Name | Type
------------ | -------------
`txHash` | string
`amount` | string
`sender` | string
`receiver` | string

## Example

```typescript
import type { ComplianceDiscloseRequestTransactionData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "txHash": null,
  "amount": null,
  "sender": null,
  "receiver": null,
} satisfies ComplianceDiscloseRequestTransactionData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComplianceDiscloseRequestTransactionData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


