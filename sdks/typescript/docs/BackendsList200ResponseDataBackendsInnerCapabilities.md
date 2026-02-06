
# BackendsList200ResponseDataBackendsInnerCapabilities


## Properties

Name | Type
------------ | -------------
`hiddenAmount` | boolean
`hiddenSender` | boolean
`hiddenRecipient` | boolean
`hiddenCompute` | boolean
`complianceSupport` | boolean
`setupRequired` | boolean
`latencyEstimate` | string
`supportedTokens` | string
`minAmount` | string
`maxAmount` | string

## Example

```typescript
import type { BackendsList200ResponseDataBackendsInnerCapabilities } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "hiddenAmount": null,
  "hiddenSender": null,
  "hiddenRecipient": null,
  "hiddenCompute": null,
  "complianceSupport": null,
  "setupRequired": null,
  "latencyEstimate": null,
  "supportedTokens": null,
  "minAmount": null,
  "maxAmount": null,
} satisfies BackendsList200ResponseDataBackendsInnerCapabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsList200ResponseDataBackendsInnerCapabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


