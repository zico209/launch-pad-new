import { wagmiConfig, ConfigChainId } from "@/config/wagmi";
import { Address } from "viem";
import { erc20Abi } from "@/abis/generated";
import { readContract } from "wagmi/actions";

export async function getTokenBalanceOf(
  tokenAddr: Address,
  account: Address,
  chainId: ConfigChainId
): Promise<bigint> {
  const data = await readContract(wagmiConfig, {
    address: tokenAddr,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [account],
    chainId: chainId,
  });
  return data;
}
