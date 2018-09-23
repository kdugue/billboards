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
            <p className="line">___________</p>
            <br />
            <br />

            <div className="auctions-button">
              <Link to="/auctions/1">Checkout the most recent auction</Link>
            </div>
            <br />
            <br />
            <div className="auctions-button">
              <Link to="/auctions">View all auctions</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
