require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */

// const INFURA_URL = process.env.REACT_APP_URL;

module.exports = {
  solidity: "0.8.9",

  paths: {
    artifacts: "./src/artifacts",
  },

  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: process.env.REACT_APP_URL,
      accounts: [process.env.REACT_APP_ACCOUNT_KEY],
    },
  },
};

//
