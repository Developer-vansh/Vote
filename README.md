This application implement blockchain based voting in solidity smart contract using ReactJS. 

## Installation

After you cloned the repository, you want to install the packages using

```shell
npm install
```

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
npx hardhat compile
npx hardhat run --network sepolia scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address from the console and copy it in the .env file. 
Once you have pasted your private key and contract address in the .env file, simply run command

```shell
npm start

To run using docker container
```shell
docker build -t vansh2213/sit315 .
docker run -p 3000:3000 vansh2213/sit315
```
