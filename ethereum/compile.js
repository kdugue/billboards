//need to read contents off the file first
//use path module -- guaranteed to get cross platform compatibility

const path = require("path");
const fs = require("fs");

const solc = require("solc");

const auctionPath = path.resolve(__dirname, "contracts", "Auction.sol");

//read contents of file
const source = fs.readFileSync(auctionPath, "utf-8");

module.exports = solc.compile(source, 1).contracts[":Auction"];
