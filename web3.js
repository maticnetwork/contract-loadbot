const Web3 = require("web3")
const ethers = require("ethers");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()

let provider = new HDWalletProvider({
  mnemonic: {
    phrase: process.env.MNEMONIC
  },
   providerOrUrl: process.env.RPC_SERVER
});

const web3 = new Web3(provider);

module.exports = web3;
