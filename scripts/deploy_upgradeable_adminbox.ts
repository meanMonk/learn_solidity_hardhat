import { ethers, upgrades } from "hardhat";

const hre = require("hardhat")
async function main() {
  const accounts = (await ethers.getSigners()).map((sign) => {
    return sign.address
  })

  const provider = ethers.provider
  const network = hre.network

  console.log(`Network name=${network?.name}`)

  console.log(`Accounts`, accounts);
  const Box = await ethers.getContractFactory("AdminBox");
  console.log('Deploying admin box with upgradeable... ');
  const box = await upgrades.deployProxy(Box, [accounts[0]], { initializer: 'initialize' });
  await box.waitForDeployment();
  const address = await box.getAddress();
  console.log(`Admin Box deployed to:`, address);
}

main();