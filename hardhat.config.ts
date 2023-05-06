import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";


const envConfig = dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${envConfig?.parsed!.ALCHEMY_API_KEY}`,
      accounts: [envConfig?.parsed!.SEPOLIA_PRIVATE_KEY]
    }
  }
};

export default config;
