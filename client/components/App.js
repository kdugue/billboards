import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "./Main";
import SingleAuction from "./SingleAuction";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="homepage-links">
          <h1>
            <Link to="/">Billboards - Advtisements Marketplace</Link>
          </h1>
          <div>
            <Link to="/auction1">Checkout the most recent auction</Link>
          </div>
          <br />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/auction1" component={SingleAuction} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
