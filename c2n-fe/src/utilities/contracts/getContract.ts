import { Signer, ZeroAddress, Contract, InterfaceAbi, JsonRpcProvider, ContractRunner, isAddress } from 'ethers'

export function getContract(
  address: string,
  ABI: InterfaceAbi,
  provider: ContractRunner,
): Contract {
  if (!isAddress(address) || address === ZeroAddress) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, provider)
}

