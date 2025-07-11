require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
