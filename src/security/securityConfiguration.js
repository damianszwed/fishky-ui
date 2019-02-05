import redirectUri from './securityRedirectUri';
import clientId from './clientId';

export default {
  oidc: {
    clientId: clientId(),
    issuer: 'https://dev-289513.oktapreview.com/oauth2/default',
    redirectUri: redirectUri(),
    scope: 'openid profile email',
  }
};
