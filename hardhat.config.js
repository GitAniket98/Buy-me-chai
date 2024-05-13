require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const { SEPOLIA_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: "0.8.0",
};

