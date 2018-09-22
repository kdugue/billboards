import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import auction from "../../ethereum/auction";
import img from "../../public/images/ad1.png";

class SingleAuction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      adMessage: "",
      bidAmount: "",
      bidders: [],
      allBids: [],
      winningBidMessage: "",
      bidMessages: [],
      clicked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.winningBid = this.winningBid.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ clicked: true });
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "Waiting for transaction to process" });
    await auction.methods.setBid(this.state.adMessage).send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.bidAmount, "ether")
    });
    this.setState({ message: "Bid sucessfully submitted" });
    const bids = await auction.methods.getBids().call({
      from: accounts[0]
    });
    await this.setState({
      clicked: false,
      bidders: bids["0"],
      allBids: bids["1"],
      bidMessages: this.state.bidMessages.concat(this.state.adMessage)
    });
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  }

  winningBid() {
    const highestBid = Math.max.apply(null, this.state.allBids);
    this.setState({ winningBidMessage: highestBid });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1 className="header-title">Tennis World</h1>
        <p className="header-title">
          Description: Website dedicated to bringing you the latest in
          professional tennis{" "}
        </p>
        <a href="https://www.tennisworldusa.org/tennis_news/">View website</a>
        <br />
        <br />
        <img src={img} />

        <div className="test-board">
          <p>
            Sample text here Sample text here Sample text here Sample text here
            Sample text here Sample text here Sample text here Sample text here
            Sample text here Sample text here Sample text here Sample text here
            Sample text here Sample text here Sample text here Sample text here
            Sample text here{" "}
          </p>
        </div>
        <div className="bid-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Make a bid
              <input
                value={this.state.bidAmount}
                onChange={this.handleChange}
                type="text"
                name="bidAmount"
              />
            </label>
            <label>
              Text for ad
              <input
                value={this.state.adMessage}
                type="text"
                name="adMessage"
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <h2 className={this.state.clicked ? "loader" : ""}>
          {this.state.message}
        </h2>
        <button className="bid-form" type="button" onClick={this.winningBid}>
          Get winning bid
        </button>
        <h1>{this.state.winningBidMessage}</h1>
      </div>
    );
  }
}

export default SingleAuction;
