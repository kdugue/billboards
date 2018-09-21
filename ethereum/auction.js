import web3 from "./web3";

const address = "0x3C5AD171CC864a2a117BE103B560387FFDd9f8de";

const abi = [
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
    constant: false,
    inputs: [
      { name: "_num", type: "uint256" },
      { name: "_text", type: "string" }
    ],
    name: "setBid",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getBids",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, address);
