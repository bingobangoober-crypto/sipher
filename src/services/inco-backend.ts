import type { PrivacyBackend } from '@sip-protocol/sdk'
import { computeOnCiphertexts } from './inco-provider.js'

export class IncoFHEBackend implements PrivacyBackend {
  readonly version = 2 as const
  readonly name = 'inco-fhe'
  readonly type = 'compute' as const
  readonly chains = ['solana']

  async checkAvailability() {
    return {
      available: true,
      estimatedCost: 3000n,
      estimatedTime: 2000,
    }
  }

  getCapabilities() {
    return {
      hiddenAmount: false,
      hiddenSender: false,
      hiddenRecipient: false,
      hiddenCompute: true,
      complianceSupport: false,
      setupRequired: true,
      latencyEstimate: 'medium' as const,
      supportedTokens: 'native' as const,
    }
  }

  async execute(): Promise<never> {
    throw new Error('Inco is a compute backend. Use executeComputation() instead.')
  }

  async executeComputation(params: {
    circuitId: string
    encryptedInputs: Uint8Array[]
    chain?: string
    options?: Record<string, unknown>
  }) {
    const result = computeOnCiphertexts({
      operation: params.circuitId,
      ciphertexts: Array.from(params.encryptedInputs).map(
        (buf) => '0x' + Buffer.from(buf).toString('hex')
      ),
      scheme: (params.options?.scheme as string) ?? 'tfhe',
    })

    return {
      success: true,
      computationId: result.computationId,
      backend: this.name,
      status: result.status as 'completed',
      metadata: {
        operation: result.operation,
        scheme: result.scheme,
        operandCount: result.operandCount,
        noiseBudgetRemaining: result.noiseBudgetRemaining,
      },
    }
  }

  async estimateCost(): Promise<bigint> {
    return 3000n
  }
}
