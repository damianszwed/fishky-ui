import redirectUri from './securityRedirectUri';

export default {
  oidc: {
    clientId: '0oaj6j6hohhywaE450h7',
    issuer: 'https://dev-289513.oktapreview.com/oauth2/default',
    redirectUri: redirectUri(),
    scope: 'openid profile email',
  }
};
