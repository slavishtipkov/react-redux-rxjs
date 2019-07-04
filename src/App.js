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

  loginAttempt = e => {
    this.props.loginAttempt({
      username: this.state.form.username,
      password: this.state.form.password
    });
    e.preventDefault();
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.loginAttempt}>
          <input
            type="text"
            name="username"
            value={this.state.form.username || ""}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.form.password || ""}
            onChange={this.handleInputChange}
          />
          <input type="submit" value={"Log in"} />
        </form>
        <hr />
        <div>
          <h1>Display</h1>
          <div>{this.state.form.username}</div>
          <div>{this.state.form.password}</div>
        </div>
      </div>
    );
  }
}

const connectedComponent = connectToStore(App);

export default connectedComponent;
