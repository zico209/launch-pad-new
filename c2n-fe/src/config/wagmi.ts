import { http, createConfig } from "wagmi";
import { mainnet, sepolia, localhost } from "wagmi/chains";
declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, localhost],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [localhost.id]: http(),
  },
});
