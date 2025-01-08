import { useEffect, useMemo, useState } from "react";
import { useReadFarmingC2NPoolLength } from "@/abis/generated";
import { useAddresses } from "@/hooks/useAddresses";

export const useFarming = () => {
  const [poolLength, setPoolLength] = useState<number>();

  const { farmingAddress } = useAddresses();
  const { data: farmingC2NPoolLengthData } = useReadFarmingC2NPoolLength({
    address: farmingAddress,
  });

  useEffect(() => {
    if (!farmingC2NPoolLengthData) return;
    setPoolLength(Number(farmingC2NPoolLengthData));
  }, [farmingC2NPoolLengthData]);

  return {
    poolLength,
  };
};
