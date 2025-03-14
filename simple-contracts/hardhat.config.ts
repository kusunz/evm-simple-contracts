import { HardhatUserConfig } from "hardhat/config";
require("@nomicfoundation/hardhat-ethers");
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

export default config;
const chains = {
  base: {
    url: process.env.BASE_RPC_URL || "https://sepolia.base.org",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    chainId: 84532,
  },
  sepolia: {
    url: process.env.SEPOLIA_RPC_URL || "https://rpc.sepolia.org",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    chainId: 11155111,
  },
  mumbai: {
    url: process.env.MUMBAI_RPC_URL || "https://rpc-mumbai.maticvigil.com",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    chainId: 80001,
  },
};

module.exports = {
  solidity: "0.8.28",
  networks: chains,
};