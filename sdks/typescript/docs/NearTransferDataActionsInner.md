
# NearTransferDataActionsInner


## Properties

Name | Type
------------ | -------------
`type` | string
`amount` | string
`methodName` | string
`args` | string
`gas` | string
`deposit` | string

## Example

```typescript
import type { NearTransferDataActionsInner } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "amount": null,
  "methodName": null,
  "args": null,
  "gas": null,
  "deposit": null,
} satisfies NearTransferDataActionsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NearTransferDataActionsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


