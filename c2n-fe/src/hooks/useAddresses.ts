import { appConfig } from "@/config";
import { getWagmiAddress } from "@/utilities/wagmi/getWagmiAddress";

export const useAddresses = () => {
  const c2nTokenAddress = getWagmiAddress(appConfig.c2nToken.address!);
  const airDropAddress = getWagmiAddress(appConfig.airDrop.address!);
  const farmingAddress = getWagmiAddress(appConfig.farming.address!);
  return {
    c2nTokenAddress,
    airDropAddress,
    farmingAddress,
  };
};
