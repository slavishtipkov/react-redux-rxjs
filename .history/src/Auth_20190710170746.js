import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class Auth extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: null,
        accessToken: null,
        idToken: null,
        user: null,
        data: null,
        showInfo: true
      };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.setAccessToken = this.setAccessToken.bind(this);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.checkSession = this.checkSession.bind(this);
      this.openIdConfig = this.openIdConfig.bind(this);
      this.customScopes = this.customScopes.bind(this);
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
        this.setAccessToken();
      }
    }

    async setAccessToken() {
      const accessToken = await this.props.auth.getAccessToken();
      const idToken = await this.props.auth.getIdToken();
      const user = await this.props.auth.getUser();
      if (accessToken) {
        this.setState({
          accessToken: accessToken,
          idToken: idToken,
          user: user
        });
      }
    }

    async login() {
      this.props.auth.login("/");
    }

    async logout() {
      const loginRedirect = this.login;

      this.props.auth
        .logout("/")
        .then(function(out) {
          console.log("session is deleted");
        })
        .catch(function(error) {
          loginRedirect();
        });
    }

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    async checkSession() {
      fetch("https://dev-880339.okta.com/api/v1/sessions/me", {
        method: "GET",
        credentials: "include"
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ data });
          console.log(data);
        })
        .catch(error => console.log(error));
    }

    async openIdConfig() {
      fetch(
        "https://dev-880339.okta.com/oauth2/default/.well-known/openid-configuration",
        {
          method: "GET",
          credentials: "include"
        }
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.log(error));
    }

    async customScopes() {
      fetch("https://dev-880339.okta.com/api/v1/authorizationServers/default", {
        method: "GET",
        credentials: "include",
        mode: "cors"
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.log(error));
    }

    render() {
      if (this.state.authenticated === null) return null;
      return this.state.authenticated ? (
        <div>
          <button onClick={this.logout}>Logout</button>
          <button onClick={this.checkSession}>Check Session</button>
          <button onClick={this.openIdConfig}>OIDC config</button>
          <button onClick={this.customScopes}>Custom Scopes</button>
          {this.state.showInfo ? (
            <InfoComponent
              accessToken={this.state.accessToken}
              idToken={this.state.idToken}
              user={this.state.user}
              data={this.state.data}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <button onClick={this.login}>Login</button>
      );
    }
  }
);

const InfoComponent = ({ accessToken, idToken, user, data }) => (
  <div className="info">
    <hr />
    <hr />
    <div className="row">
      <div className="info-label">Access Token</div>
      <div className="info-value">{accessToken ? accessToken : ""}</div>
    </div>
    <hr />
    <hr />
    <div className="row">
      <div className="info-label">Id Token</div>
      <div className="info-value">{idToken ? idToken : ""}</div>
    </div>
    <hr />
    <hr />
    <div className="row">
      <div>{data && data.createdAt}</div>
      <div>{data && data.expiresAt}</div>
    </div>
    <hr />
    <hr />
    <div className="row">{user && <UserInfo user={user} />}</div>
  </div>
);

const UserInfo = ({ user }) =>
  Object.keys(user).map((keyName, i) => {
    return (
      <li className="userInfo" key={keyName}>
        <span className="input-label">
          {keyName} => {user[keyName]}
        </span>
        <hr />
      </li>
    );
  });
