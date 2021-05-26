import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

export default class OktaSignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      language: 'en',
      baseUrl: this.props.baseUrl,
      authParams: {
        pkce: true,
        responseMode: 'query',
        issuer: this.props.issuer,
        scope: [
          'openid',
          'email'
        ]
      },
      features: {
        registration: true
      },
      redirectUri: this.props.redirectUri,
      clientId: this.props.clientId,
      idps: this.props.idps,
      idpDisplay: "PRIMARY"
    });
    this.widget.renderEl({el}, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div/>;
  }
};
