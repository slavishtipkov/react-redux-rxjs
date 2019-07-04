import React from "react";
import { connect } from "react-redux";
import { dashboardLoadAttempt } from "./dashboardActions";

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = {
  loadAttempt: payload => dashboardLoadAttempt(payload)
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

class Dashboard extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="dashboard">
        <h1>DASHBOARD COMPONENT</h1>
      </div>
    );
  }
}

const connectedComponent = connectToStore(Dashboard);

export default connectedComponent;
