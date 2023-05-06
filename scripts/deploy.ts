import { ethers } from "hardhat";

async function main() {
  const MoyuCoin = await ethers.getContractFactory("MoyuCoin");
  const coin = await MoyuCoin.deploy();

  
  await coin.deployed();
  
  console.log(
    `MoyuCoin deployed to: ${coin.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
