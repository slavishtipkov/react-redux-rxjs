import React from "react";

import { loginAttempt } from "./auth/actions";

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = {
  loginAttempt: payload => loginAttempt(payload)
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MAIN APP COMPONENT</h1>
      </header>
    </div>
  );
}

export default App;
