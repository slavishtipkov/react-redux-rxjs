const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-880339.okta.com/oauth2/default" // required
});
