import redirectUri from './securityRedirectUri';
import clientId from './clientId';

export default {
  oidc: {
    clientId: clientId(),
    oktaDomain: 'https://dev-289513.oktapreview.com',
    issuer: 'https://dev-289513.oktapreview.com/oauth2/default',//TODO(Damian.Szwed) reuse domain from oktaDomain
    redirectUri: redirectUri(),
    scope: 'openid profile email',
    idps: [
      {
        type: "FACEBOOK",
        id: "0oaripeglyAwpSriK0h7"
      },
      {
        type: "GOOGLE",
        id: "0oarjdwkwb3dmewEW0h7"
      },
      {
        type: "LINKEDIN",
        id: "0oa15of4fyvljFisK0h8"
      }
    ]
  }
};
