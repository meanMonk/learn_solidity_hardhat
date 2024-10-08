# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

## Build the contracts.

```shell
pnpm build:contracts
```



## Interact with Console.

```shell
# get contract deployed.
const box = await viem.getContractAt("Box", "0x5fbdb2315678afecb367f032d93f642f64180aa3");

# send tx to store value
await box.write.storeValue([20]);
# retrieve value
await box.write.retrieveValue();

````

## To run the script
```shell
  pnpm run deploy
```

## To run test 
```shell
  pnpm run test
```

## Sepolia. 

```shell
account: 0x344fFFaD1923C5431C7c55858d144546c5fEc04b

deploying box...!
Box contract deployed...!
box deployed at:  0xefA5CB15D375d9B697b3C07D09e0059d15b0aD16
```
## To deploy contract on sepolia.
```shell
pnpm run deploy
```

## To verify contract on sepolia.
```shell
npx hardhat verify --network sepolia $DEPLOYED_CONTRACT_ADDRESS
```

## To upgradeable local.

```shell
npx hardhat deploy:u:l
```