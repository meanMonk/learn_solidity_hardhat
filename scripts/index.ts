import { viem } from "hardhat";

const BoxContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

async function main() {
  // code goes here to interact with contract.
  // retrieve list of enabled accounts from the local node.

  const accounts = await viem.getWalletClients()
  // console.log(`list of accounts`, accounts);
  const addresses = accounts.map((acc) => {
    return acc.account.address;
  })
  console.log(`addresses`, addresses);

  const box = await viem.getContractAt("contracts/Box.sol:Box", BoxContractAddress);

  let value = await box.read.retrieveValue();
  console.log(`box value is ${value.toString()}`);
  console.log(`update value by 2`);
  let input = BigInt(Number(value) * 2);
  await box.write.storeValue([input]);
  value = await box.read.retrieveValue();
  console.log(`updated box value is ${value.toString()}`);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  })