import React from "react";
import { connect } from "react-redux";

import { loginAttempt } from "./auth/actions";

import { Provider } from "react-redux";

import store from "./redux/store";

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
    return <Provider store={store} />;
  }
}

const connectedComponent = connectToStore(App);

export default connectedComponent;
