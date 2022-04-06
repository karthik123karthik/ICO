
const hre = require("hardhat");
const {CRYPTODEVS_ADDRESS} = require("../constants");

async function main() {
  
  const contractFactory = await hre.ethers.getContractFactory("CryptoDevToken");
  const contract = await contractFactory.deploy(CRYPTODEVS_ADDRESS);
  await contract.deployed();
  console.log("contract deployed to:",contract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
