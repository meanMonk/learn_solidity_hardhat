import { ethers } from "hardhat";
const boxAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"

async function main() {
  // code goes here to interact with contract.
  // retrieve list of enabled accounts from the local node.
  const accounts = (await ethers.getSigners()).map((sign) => {
    return sign.address
  })

  console.log(`Accounts`, accounts);

  const Box = await ethers.getContractFactory("Box");

  const box = Box.attach(boxAddress);
  let value = await box.retrieveValue();
  console.log(`box value is ${value} ${value.toString()}`);
  // let input = Number(value) * 2;
  // await box.storeValue([ethers.toBigInt(input)]);
  // value = await box.retrieveValue();̦
  // console.log(`updated box value is ${value.toString()}`);
  // let value = await box.read.retrieveValue();
  // console.log(`update value by 2`);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  })