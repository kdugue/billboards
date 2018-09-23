import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homepage-title">
        <div className="homepage-left">
          <h3>Billboards</h3>
          <p>
            Auction-based advertisement marketplace built on the Ethereum
            blockchain
          </p>
        </div>
        <div>
          <p>
            <Link to="/auction1">Checkout the most recent auction</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
