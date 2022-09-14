import clientId from './clientId';

const OKTA_TESTING_DISABLE_HTTPS_CHECK = process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development';
const REDIRECT_URI = `${window.location.origin}/login/callback`;

export default {
  oidc: {
    clientId: clientId(),
    issuer: 'https://login.fishky.pl/oauth2/default',
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLE_HTTPS_CHECK,
  }
};
