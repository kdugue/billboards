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
        <div>
          <div>
            <ul>
              <div>
                <li>
                  <Link to="/">billboards</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/">auctions</Link>
                </li>
                <li>
                  <Link to="/">about</Link>
                </li>
              </div>
            </ul>
          </div>

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
