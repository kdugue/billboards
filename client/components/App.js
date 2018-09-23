import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "./Main";
import SingleAuction from "./SingleAuction";
import Auctions from "./Auctions";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <div className="nav-bar">
            <ul>
              <div>
                <li>
                  <Link to="/">Billboards</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/auctions">Auctions</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </div>
            </ul>
          </div>

          <Switch>
            <Route exact path="/auctions" component={Auctions} />
            <Route exact path="/" component={Main} />
            <Route exact path="/auctions/1" component={SingleAuction} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
