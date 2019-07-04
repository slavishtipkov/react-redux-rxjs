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

class App extends React.Component {
  state = {
    form: {
      username: "",
      password: ""
    }
  };

  loginAttempt = () => {};

  render() {
    return (
      <div className="App">
        <form onSubmit={this.loginAttempt}>
          <input type="text" />
          <input type="password" />
          <input type="submit" value={"Log in"} />
        </form>
      </div>
    );
  }
}

const connectedComponent = connectToStore(App);

export default connectedComponent;
