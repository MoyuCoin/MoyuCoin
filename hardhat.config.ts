import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";


const envConfig = dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    test: {
      url: envConfig?.parsed!.RPC_URL,
      accounts: [envConfig?.parsed!.PRIVATE_KEY]
    }
  }
};

export default config;
