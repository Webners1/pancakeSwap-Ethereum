import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'Shaolin-NT',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      1: '0x06da0fd433C1A5d7a4faa01111c044910A184553',
    },
    token: serializedTokens.bnb,
    quoteToken: serializedTokens.USDT,
  },
  {
    pid: 251,
    lpSymbol: 'Shaolin-NT-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      1: '0x804Be24f625C7E23eDd9Fa68e4582590c57ad2B3',
    },
    token: serializedTokens.DAI,
    quoteToken: serializedTokens.USDC,
  },
    {
    pid: 1,
    lpSymbol: 'ETH-USDC LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
    },
    token: serializedTokens.bnb,
    quoteToken: serializedTokens.USDC,
  },
  
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
 
]

export default farms
