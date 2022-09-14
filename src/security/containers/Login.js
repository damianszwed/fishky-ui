import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {withOktaAuth} from '@okta/okta-react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as securityActions from "../actions/securityActions";
import {connect} from "react-redux";

/**
 * @deprecated don't use it, because there will be used different security flow
 */
export class Login extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.state = {
      authenticated: null
    };
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.oktaAuth.isAuthenticated;
    if (authenticated !== this.state.authenticated) {
      this.setState({authenticated});

    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
    if (res.status === 'SUCCESS') {
      return this.props.oktaAuth.redirect({
        sessionToken: res.idToken
      });
    } else {
      // The user can be in another authentication state that requires further action.
      // For more information about these states, see:
      //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  }

  onError(err) {
    console.log('error logging in', err);
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Redirect to={{pathname: '/'}}/> :
      <OktaSignInWidget
        baseUrl={this.props.securityConfiguration.oidc.oktaDomain}
        issuer={this.props.securityConfiguration.oidc.issuer}
        idps={this.props.securityConfiguration.oidc.idps}
        redirectUri={this.props.securityConfiguration.oidc.redirectUri}
        clientId={this.props.securityConfiguration.oidc.clientId}
        onSuccess={this.onSuccess}
        onError={this.onError}/>;
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  securityConfiguration: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.security.authenticated,
  actions: PropTypes.object.isRequired
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(securityActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withOktaAuth(Login))


