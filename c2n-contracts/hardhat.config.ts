import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomicfoundation/hardhat-ethers'
import '@nomicfoundation/hardhat-chai-matchers'
import { HardhatNetworkAccountsUserConfig, HardhatUserConfig } from "hardhat/types";

const accounts: HardhatNetworkAccountsUserConfig = {
  mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
  initialIndex: 0,
  path: "m/44'/60'/0'/0"
}

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  typechain: {
    outDir: "../c2n-fe/src/contract-types",
  },
  networks: {
    hardhat: {
      chainId: 31337,
      accounts: accounts
    }
  }
};

export default config;
