import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = {
  loadAttempt: payload => loginAttempt(payload)
};

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1>DASHBOARD COMPONENT</h1>
      </div>
    );
  }
}

export default connect();
