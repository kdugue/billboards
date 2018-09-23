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
          <ul>
            <li>
              <Link to="/">Billboards</Link>
            </li>
            <li>
              <Link to="/">Auctions</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
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
