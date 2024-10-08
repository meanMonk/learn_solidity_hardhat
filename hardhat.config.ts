import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: {
        mnemonic: process.env.PHRASE
      }
    }
  }
};

export default config;
