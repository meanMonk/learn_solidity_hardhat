import { viem } from "hardhat";

// deploy script.
async function main() {
  // we get the contract to deploy.
  console.log(`deploying box...!`);
  const box = await viem.deployContract("contracts/Box.sol:Box");
  console.log(`box deployed at : `, box.address);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1)
  })