import { defineConfig } from '@wagmi/cli'
import { hardhat, react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/abis/generated.ts',
  plugins: [
    hardhat({
      project: '../c2n-contracts',
    }),
    react(),
  ],
})