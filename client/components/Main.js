import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Welcome to Billboards, a premier ads marketplace</h1>
        <div>
          <Link to="/auction1">Checkout the most recent auction</Link>
        </div>
      </div>
    );
  }
}

export default Main;
