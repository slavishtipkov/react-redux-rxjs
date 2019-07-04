import React from "react";
import { connect } from "react-redux";

import { loginAttempt } from "./auth/actions";

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = {
  loginAttempt: payload => loginAttempt(payload)
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MAIN APP COMPONENT WOO</h1>
      </header>
    </div>
  );
}

const connectedComponent = connectToStore(App);

export default connectedComponent;
