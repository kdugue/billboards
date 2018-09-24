pragma solidity ^0.4.17;

contract AuctionFactory {
    address[] public deployedAuctions;

    function createAuction() public {
        address newAuction = new Auction();
        deployedAuctions.push(newAuction);
    }

    function getDeployedAuctions() public view returns (address[]) {
        return deployedAuctions;
    }
}

contract Auction {

    struct Bid {
        uint  bidAmount;
        string adMessage;
    }

    mapping(address => Bid) bidders;
    address[] public bidderAccounts;
    uint[] public bids;
    string[] public adText;
    uint public highestBid;
    string public winningMessage;
    address public highestBidder;


    function setBid(string memory _text) public payable {
        require(msg.value > 0.1 ether);
        if(msg.value > highestBid) {
            highestBid = msg.value;
            winningMessage = _text;
            highestBidder = msg.sender;
        }
        var bidder = bidders[msg.sender];
        bidder.bidAmount = msg.value;
        bidder.adMessage = _text;
        bids.push(msg.value);
        adText.push(_text);
        bidderAccounts.push(msg.sender) - 1;
    }

    function getBids() public view returns (address[], uint[]) {
        return (bidderAccounts, bids);
    }

    function getWinner() public view returns (address, uint, string) {
        return (highestBidder, highestBid, winningMessage);
    }

}
