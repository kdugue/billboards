import web3 from "./web3";

const address = "0xaD4Dd0dEE09E346c7EB7D2ca2939D523291568eE";

const abi = [
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "bids",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "bidderAccounts",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getBids",
    outputs: [{ name: "", type: "address[]" }, { name: "", type: "uint256[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_text", type: "string" }],
    name: "setBid",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "adText",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
export default new web3.eth.Contract(abi, address);
