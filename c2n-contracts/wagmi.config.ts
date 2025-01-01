import { defineConfig } from "@wagmi/cli";
import { hardhat, actions } from "@wagmi/cli/plugins";
export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    actions(),
    hardhat({
      project: ".",
    }),
  ],
});
