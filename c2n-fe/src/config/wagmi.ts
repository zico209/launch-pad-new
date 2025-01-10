import { http, createConfig } from "wagmi";
import { mainnet, sepolia, localhost } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, localhost],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [localhost.id]: http(),
  },
});
declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}
export type ConfigChainId = (typeof wagmiConfig)["chains"][number]["id"];
