
# ComputeIncoCiphertexts200ResponseData


## Properties

Name | Type
------------ | -------------
`computationId` | string
`operation` | string
`scheme` | string
`operandCount` | number
`resultCiphertext` | string
`noiseBudgetRemaining` | number
`status` | string

## Example

```typescript
import type { ComputeIncoCiphertexts200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "computationId": null,
  "operation": null,
  "scheme": null,
  "operandCount": null,
  "resultCiphertext": null,
  "noiseBudgetRemaining": null,
  "status": null,
} satisfies ComputeIncoCiphertexts200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComputeIncoCiphertexts200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


