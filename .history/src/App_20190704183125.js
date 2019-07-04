import React from "react";

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = {
  attemptLogin: payload => attemptLogin(payload)
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
