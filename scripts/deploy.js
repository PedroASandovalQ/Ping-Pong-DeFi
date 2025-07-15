const { ethers } = require("hardhat");

async function main() {
    const DAI_ADDRESS = "0x3e622317f8C93f7328350cF0B56d9eD4C620C5d6";     // fDAI
    const CDAI_ADDRESS = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643";   // cDAI


  const PingPong = await ethers.getContractFactory("PingPong");
  const pingpong = await PingPong.deploy(DAI_ADDRESS, CDAI_ADDRESS);

  await pingpong.deployed();

  console.log("✅ PingPong contract deployed to:", pingpong.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
