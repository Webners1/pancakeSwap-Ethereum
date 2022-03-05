import { Token } from '@pancakeswap/sdk'
import tokens from 'config/constants/tokens'

const {  safemoon } = tokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
}

export default SwapWarningTokens
