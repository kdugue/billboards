import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import auction from "../../ethereum/auction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      adMessage: "",
      bidAmount: "",
      bidders: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log("accounts", accounts);
    this.setState({ message: "Waiting for transaction to process" });
    await auction.methods
      .setBid(this.state.bidAmount, this.state.adMessage)
      .send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.bidAmount, "ether")
      });
    this.setState({ message: "Bid sucessfully submitted" });
    const bids = await auction.methods.getBids().call({
      from: accounts[0]
    });
    console.log("bids", bids);
    this.setState({ bidders: bids });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state);

    return (
      <div className="bid-form">
        <h1>Welcome to Billboards</h1>
        <div className="test-board">Box</div>
        <br />
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
          <br />

          <input type="submit" value="Submit" />
        </form>
        <hr />

        <h2>
          {this.state.message}
          {this.state.bidders}
        </h2>
      </div>
    );
  }
}

export default App;
