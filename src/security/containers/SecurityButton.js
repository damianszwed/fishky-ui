import React from 'react';
import {withOktaAuth} from '@okta/okta-react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as securityActions from '../actions/securityActions';
import {loadFlashcardFolders} from '../../folders/actions/flashcardFoldersActions';
import toastr from 'toastr';

/**
 * this.props.authState and this.props.oktaAuth are automatically injected by withOktaAuth function.
 * @returns {Promise<void>}
 */
async function checkUser() {
  if (this.props.authState?.isAuthenticated) {
    const accessToken = await this.props.authState.accessToken.accessToken;
    this.props.actions.setAuthenticated(true);
    this.props.actions.setAccessToken(accessToken);
    let loadFlashcardFoldersPromise = this.props.actions.loadFlashcardFolders();
    loadFlashcardFoldersPromise.then(function(message) {
      console.log(message);
    }, function(err) {
      toastr.error("Cannot load flashcard folders. Please contact with the administrator.");
    });
  } else {
    this.props.actions.setAuthenticated(false);
    this.props.actions.setAccessToken('');
  }
}

export class SecurityButton extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.checkUser = checkUser.bind(this);
  }

  async login() {
    await this.props.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.props.oktaAuth.signOut();
  }

  async componentDidMount() {
    this.checkUser();
  }

  async componentDidUpdate() {
    this.checkUser();
  }

  render() {
    const authenticated = this.props.authState?.isAuthenticated;

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
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.security.authenticated,
  actions: PropTypes.object.isRequired,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...securityActions, loadFlashcardFolders: loadFlashcardFolders}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withOktaAuth(SecurityButton))
