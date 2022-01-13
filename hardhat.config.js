require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const ALCHEMY_API_KEY = "92hnrLmR4KE0kyVFGNFTJXyNavPMR6ob";
 
 // Replace this private key with your Ropsten account private key
 // To export your private key from Metamask, open Metamask and
 // go to Account Details > Export Private Key
 // Be aware of NEVER putting real Ether into testing accounts
 const ROPSTEN_PRIVATE_KEY = "be4a344e7757a96f5f14b2a8cadc23d2846819076b8fc4665e349de03769e259";
 
 module.exports = {
   solidity: "0.8.0",
   networks: {
     ropsten: {
       url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
       accounts: [`${ROPSTEN_PRIVATE_KEY}`]
     }
   }
 };
