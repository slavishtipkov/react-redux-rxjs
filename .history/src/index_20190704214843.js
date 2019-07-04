import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { Provider } from "react-redux";

import store, { history } from "./redux/store";

ReactDOM.render(
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={DashboardComponent} />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
