import React, { Component } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="homepage-title">
          <Particles
            className="particles-js"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true
                  }
                }
              }
            }}
          />
          <div className="homepage-left">
            <h3>Billboards</h3>
            <p>
              Auction-based advertisements marketplace built on the Ethereum
              blockchain
            </p>
            <br />
            <br />

            <p className="line">____________</p>
            <br />
            <br />
            <br />

            <div className="auctions-button">
              <Link to="/auction1">Checkout the most recent auction</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
