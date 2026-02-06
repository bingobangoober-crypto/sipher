
# CreateAdminKeyRequest


## Properties

Name | Type
------------ | -------------
`tier` | string
`name` | string
`expiresAt` | Date
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { CreateAdminKeyRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "tier": null,
  "name": null,
  "expiresAt": null,
  "metadata": null,
} satisfies CreateAdminKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


