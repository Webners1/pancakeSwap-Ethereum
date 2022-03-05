import useSWRImmutable from 'swr/immutable'
import ifoV3Abi from '../config/abi/ifoV3.json'
import ifoV2Abi from '../config/abi/ifoV2.json'
import { multicallv2 } from '../utils/multicall'
import { Ifo } from '../config/constants/types'



export const useActiveIfoWithBlocks = (): Ifo & { startBlock: number; endBlock: number } => {


  return  null
}
