const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

/*
HDWalletProvider will help us with two things:
1. speicfy which account to unlock and use which account for ether to use
2. specify what outside node to connect two

*/

const provider = new HDWalletProvider(
  "onion merit manual expose head tobacco bitter mean champion define skin post",
  "https://rinkeby.infura.io/v3/cd5c35c5472b495b9e4d0c353b537813"
);

//this web3 instance will interact with the specified network
const web3 = new Web3(provider);

//write a function only because we need to use async/await functionality
const deploy = async () => {
  //obtain all the accounts that have been unlocked from the provider
  const accounts = await web3.eth.getAccounts();
  console.log("all accounts", accounts);
  var firstNonce = await web3.eth.getTransactionCount(accounts[0]);
  console.log("Attemping to deploy from account: ", accounts[0]);

  //interface === ABI
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      //contains bytecode and additional data for contract
      data: bytecode
    })
    .send({
      gas: "1000000",
      from: accounts[0]
    });

  console.log("INTERFACE:", interface);
  console.log("Contract deployed to", result.options.address);
};
deploy();
