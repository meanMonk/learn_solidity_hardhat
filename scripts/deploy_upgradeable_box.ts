import { ethers, upgrades } from "hardhat";

async function main() {
  const Box = await ethers.getContractFactory("BoxV1");
  console.log('Deploying box with upgradeable... ');
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  await box.waitForDeployment();
  const address = await box.getAddress();
  console.log(`Box deployed to:`, address);
}

main();