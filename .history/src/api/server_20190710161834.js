const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-880339.okta.com/oauth2/default" // required
});

const accessTokenString =
  "eyJraWQiOiI3UWtIbkRUTXc0aHMtTmVGX2NocWhWUzlUWVhhZEcwTmVuTjMzMWRzY2FjIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkREa2U2cjkxQTY5cEFITWxIRHRYNThucUhNaHpmUTlHWllNZFdYR29GWnciLCJpc3MiOiJodHRwczovL2Rldi04ODAzMzkub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTYyNzY0NjIyLCJleHAiOjE1NjI3NjgyMjIsImNpZCI6IjBvYXRvYnZkbkZHczBTa0xJMzU2IiwidWlkIjoiMDB1bTIwdm1vVDlZenhmTjAzNTYiLCJzY3AiOlsib3BlbmlkIiwiZW1haWwiLCJwcm9maWxlIl0sInN1YiI6InNsYXZpc2h0aXBrb3YxOTkzQGdtYWlsLmNvbSJ9.cfMLrMIFbg19YNvyaU_Zw3iqpVg1UWLhdW1ADk1YRdB877qKtEZgR6QGu4cGRq8RYftjuA5yQK9ZgJpiILXSevIneM26dpjL7jXVVqAAoqclk8LcxYW8UK_yV7cUrKWGw8-Lq6ga8XN-Kshd3DbkK-wTkOLmjjwm3pPeVTY_dfhmpo01XQ_3_QSUjluivzZEX_KwAdNIJq2GO7c7kXoRPvYrTCTjrkRBNMItXjYsBBPk7d80eKvTAKNLjSL60akqcMsUUwOjOrW8uLW1gefOxLcPNrecvEXFJXWnbGsb6qVXujK8YQQgWxEeGawBSeLFk_wwmxyXKyTIbGLI5Vm0jA";

oktaJwtVerifier
  .verifyAccessToken(accessTokenString, expectedAud)
  .then(jwt => {
    // the token is valid (per definition of 'valid' above)
    console.log(jwt.claims);
  })
  .catch(err => {
    // a validation failed, inspect the error
  });
