import React from 'react';
import { withAuth } from '@okta/okta-react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as securityActions from '../actions/securityActions';
import delay from '../securityDelay';

export class SecurityButton extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }


  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/');
    setTimeout(function() {
      this.checkAuthentication();
    }.bind(this), delay);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    this.props.actions.setAuthenticated(authenticated);
    const accessToken = await this.props.auth.getAccessToken();
    this.props.actions.setAccessToken(accessToken);
  }

  async componentDidMount() {
    this.checkAuthentication();
    setTimeout(function() {
      this.checkAuthentication();
    }.bind(this), delay);
  }

  async componentDidUpdate() {
    this.checkAuthentication();
    setTimeout(function() {
      this.checkAuthentication();
    }.bind(this), delay);
  }

  render() {
    const {authenticated} = this.props;

    return (
      <div>
        {!authenticated &&
        <button className={this.props.className} onClick={this.login}>{this.props.signInText}</button>}
        {authenticated &&
        this.props.signOutText &&
        <button className={this.props.className} onClick={this.logout}>{this.props.signOutText}</button>}
      </div>
    )
  }
}

SecurityButton.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  signInText: PropTypes.string.isRequired,
  signOutText: PropTypes.string,
};

const mapStateToProps = state => ({
  authenticated: state.security.authenticated
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(securityActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(SecurityButton))
