const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");

  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(["BJP", "AAP", "INC", "Sawtantra Party"], 200);
  console.log("Contract address:", Voting_.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});