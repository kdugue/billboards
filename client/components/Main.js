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
            <br />
            <br />
            <br />
            <br />
            <br />

            <p className="header-tagline">
              Auction-based marketplace for online advertisements built on the
              Ethereum blockchain
            </p>
            <p className="line">______________</p>
            <br />

            <div className="auctions-button">
              <Link to="/auctions">View all auctions</Link>
            </div>
            <br />

            <div className="auctions-button">
              <Link to="/auctions/1">Checkout the most recent auction</Link>
            </div>
            <br />

            <div className="auctions-button">
              <Link to="/about">How it works</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
