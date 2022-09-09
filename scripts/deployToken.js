const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("KashCoin");
  const token = await Token.deploy();

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



  // Token deployed to: 0x948FBe515fC4758dd1683e7e6D1ae7f85eE843D1