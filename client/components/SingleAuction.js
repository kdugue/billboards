import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import auction from "../../ethereum/auction";
import ad1 from "../../public/images/ad1.png";
import Countdown from "react-countdown-now";

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
    this.renderer = this.renderer.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({
      message: "",
      clicked: true
    });
    await auction.methods.setBid(this.state.adMessage).send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.bidAmount, "ether")
    });

    this.setState({
      message: "Bid sucessfully submitted"
    });

    const bids = await auction.methods.getBids().call({
      from: accounts[0]
    });

    await this.setState({
      clicked: false,
      bidders: bids["0"],
      allBids: bids["1"],
      bidMessages: this.state.bidMessages.concat(this.state.adMessage)
    });

    await this.setState({
      bidAmount: "",
      adMessage: ""
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async renderer() {
    const accounts = await web3.eth.getAccounts();
    const winnerInfo = await auction.methods.getWinner().call({
      from: accounts[0]
    });
    await alert(
      `
        WINNER is: ${winnerInfo["0"]}
        Winning bid is: ${winnerInfo["1"] / 1000000000000000000} ether
        AD Content is: ${winnerInfo["2"]}`
    );
  }

  render() {
    const { bidAmount, adMessage, clicked, message } = this.state;

    return (
      <div>
        <br />
        <h3 className="header-title">
          Bidding Period ends in{" "}
          <Countdown
            date={"Mon, 24 Sep 2018 15:13:00"}
            onComplete={this.renderer}
          />
        </h3>
        <br /> <br />
        <div className="flexed">
          <div className="flexed-left">
            <p className="header-title">
              <a href="https://www.tennisworldusa.org/tennis_news/">
                Tennis World
              </a>
            </p>
            <p className="header-title">
              Description: Website dedicated to
              <br />
              bringing you the latest news in professional tennis
              <br />
              <br />
              <img src={ad1} />
            </p>
          </div>

          <div>
            <p>
              <u>Your Bid Selection</u>
            </p>
            <div className="bid-form">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Ad #1: Make a bid
                  <input
                    value={bidAmount}
                    onChange={this.handleChange}
                    type="text"
                    name="bidAmount"
                  />
                </label>
                <label>
                  Ad information
                  <input
                    value={adMessage}
                    type="text"
                    name="adMessage"
                    onChange={this.handleChange}
                  />
                </label>
                <input className="submit-button" type="submit" value="Submit" />
                <br /> <br /> <br />
                <div className="loader-container">
                  <h3 className={clicked ? "loader" : ""}>{message}</h3>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default SingleAuction;
