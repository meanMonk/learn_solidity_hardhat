import { ethers } from "hardhat";


// deploy script.
async function main() {
  // we get the contract to deploy.
  const Box = await ethers.getContractFactory("contracts/Box.sol:Box");
  console.log(`deploying box...!`);
  const box = await Box.deploy();
  console.log(`Box contract deployed...!`);
  await box.waitForDeployment();
  console.log(`box deployed at: `, await box.getAddress());
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1)
  })