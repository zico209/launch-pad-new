import { useEffect, useMemo, useState } from "react";
import {
  useReadErc20BalanceOf,
  useReadFarmingC2NDeposited,
  useReadFarmingC2NPoolInfo,
  useReadErc20Symbol,
} from "@/abis/generated";
import { getWagmiAddress } from "@/utilities/wagmi/getWagmiAddress";
import { useAddresses } from "@/hooks/useAddresses";
import { useAccount } from "wagmi";

export const useFarmingForm = () => {
  const { address } = useAccount();
  const [depositTokenBalance, setDepositTokenBalance] = useState<number>();
  const [depositTokenSymbol, setDepositTokenSymbol] = useState<string>();
  const [farmingDepositedAmount, setFarmingDepositedAmount] =
    useState<number>();
  const [poolId, setPoolId] = useState<number>();
  const [poolInfo, setPoolInfo] = useState<{
    lpToken: string;
    allocPoint: number;
    lastRewardTimestamp: number;
    accERC20PerShare: number;
    totalDeposits: number;
  }>();

  const { farmingAddress } = useAddresses();
  const depositTokenAddress = useMemo(() => {
    if (!poolInfo?.lpToken) return;
    return getWagmiAddress(poolInfo?.lpToken!);
  }, [poolInfo?.lpToken]);

  const { data: depositTokenBalanceData } = useReadErc20BalanceOf({
    address: depositTokenAddress,
    query: { enabled: !!depositTokenAddress },
    args: [address!],
  });

  useEffect(() => {
    if (!depositTokenBalanceData) return;
    setDepositTokenBalance(Number(depositTokenBalanceData));
  }, [depositTokenBalanceData]);

  const { data: depositTokenSymbolData } = useReadErc20Symbol({
    address: depositTokenAddress,
    query: { enabled: !!depositTokenAddress },
  });

  useEffect(() => {
    if (!depositTokenSymbolData) return;
    setDepositTokenSymbol(depositTokenSymbolData);
  }, [depositTokenSymbolData]);

  const { data: farmingC2NDepositedData } = useReadFarmingC2NDeposited({
    address: farmingAddress,
    query: { enabled: poolId !== undefined },
    args: poolId !== undefined ? [BigInt(poolId), address!] : undefined,
  });

  useEffect(() => {
    if (farmingC2NDepositedData === undefined) return;
    setFarmingDepositedAmount(Number(farmingC2NDepositedData));
  }, [farmingC2NDepositedData]);

  const getPoolInfo = (id: number) => {
    setPoolId(id);
  };

  const { data: farmingC2NPoolInfoData } = useReadFarmingC2NPoolInfo({
    address: farmingAddress,
    query: { enabled: poolId !== undefined },
    args: poolId !== undefined ? [BigInt(poolId)] : undefined,
  });

  useEffect(() => {
    console.log(farmingC2NPoolInfoData);
    if (!farmingC2NPoolInfoData) return;
    const [
      lpToken,
      allocPoint,
      lastRewardTimestamp,
      accERC20PerShare,
      totalDeposits,
    ] = farmingC2NPoolInfoData!;
    setPoolInfo({
      lpToken: lpToken,
      allocPoint: Number(allocPoint),
      lastRewardTimestamp: Number(lastRewardTimestamp),
      accERC20PerShare: Number(accERC20PerShare),
      totalDeposits: Number(totalDeposits),
    });
  }, [farmingC2NPoolInfoData]);

  return {
    depositTokenBalance,
    depositTokenSymbol,
    farmingDepositedAmount,
    poolInfo,
    getPoolInfo,
  };
};
