import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import store, { history } from "./redux/store";
import App from "./App";
import Dashboard from "./dashboard/dashboardComponent";

export default () => (
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
      </>
    </ConnectedRouter>
  </Provider>
);
