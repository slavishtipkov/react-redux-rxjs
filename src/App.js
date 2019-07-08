import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Auth from "./Auth";
import Protected from "./Protected";

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-880339.okta.com/oauth2/default"
          client_id="0oatobvdnFGs0SkLI356"
          redirect_uri={window.location.origin + "/implicit/callback"}
        >
          <Route path="/" exact={true} component={Auth} />
          <SecureRoute path="/protected" component={Protected} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;
