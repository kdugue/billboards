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

    function setBid(uint _num, string _text) public payable {
        require(msg.value > 0.2 ether);
        var bidder = bidders[msg.sender];
        bidder.bidAmount = _num;
        bidder.adMessage = _text;
        bidderAccounts.push(msg.sender) - 1;
    }

    function getBids() public view returns (address[]) {
        return bidderAccounts;
    }


}
