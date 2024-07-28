require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "e40c89312c4f9afe90f81ef83e7fc57df72d4108d5c44f6f97fb5dada175b74e";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
