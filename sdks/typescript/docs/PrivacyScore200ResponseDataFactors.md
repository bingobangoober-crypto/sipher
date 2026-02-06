
# PrivacyScore200ResponseDataFactors


## Properties

Name | Type
------------ | -------------
`addressReuse` | [PrivacyScore200ResponseDataFactorsAddressReuse](PrivacyScore200ResponseDataFactorsAddressReuse.md)
`amountPatterns` | [PrivacyScore200ResponseDataFactorsAddressReuse](PrivacyScore200ResponseDataFactorsAddressReuse.md)
`timingCorrelation` | [PrivacyScore200ResponseDataFactorsAddressReuse](PrivacyScore200ResponseDataFactorsAddressReuse.md)
`counterpartyExposure` | [PrivacyScore200ResponseDataFactorsAddressReuse](PrivacyScore200ResponseDataFactorsAddressReuse.md)

## Example

```typescript
import type { PrivacyScore200ResponseDataFactors } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "addressReuse": null,
  "amountPatterns": null,
  "timingCorrelation": null,
  "counterpartyExposure": null,
} satisfies PrivacyScore200ResponseDataFactors

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrivacyScore200ResponseDataFactors
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


