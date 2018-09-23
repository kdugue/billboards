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
          <h2>
            <Link to="/">Billboards</Link>
          </h2>
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
