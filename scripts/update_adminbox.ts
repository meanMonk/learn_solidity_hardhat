import { ethers, upgrades } from "hardhat";


async function main() {
  const Box = await ethers.getContractFactory("AdminBox");
  console.log('Updating admin box proxy... ');
  const proxyAddress = "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9"
  await upgrades.upgradeProxy(proxyAddress, Box);
  console.log(`Admin Box upgraded`);
}

main();