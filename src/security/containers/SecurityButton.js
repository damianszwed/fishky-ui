import React from 'react';
import {withOktaAuth} from '@okta/okta-react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as securityActions from '../actions/securityActions';
import {loadFlashcardFolders} from '../../folders/actions/flashcardFoldersActions';

async function checkUser() {
  if (this.props.authState.isAuthenticated && !this.state.userInfo) {
    const accessToken = await this.props.authService.getAccessToken();
    this.props.actions.setAuthenticated(true);
    this.props.actions.setAccessToken(accessToken);
    this.props.actions.loadFlashcardFolders();
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
    this.state = {userInfo: null};
    this.checkUser = checkUser.bind(this);
  }

  async login() {
    await this.props.authService.login('/');
  }

  async logout() {
    await this.props.authService.logout('/');
  }

  async componentDidMount() {
    this.checkUser();
  }

  async componentDidUpdate() {
    this.checkUser();
  }

  render() {
    const {authenticated} = this.props;

    if (this.props.authState.isPending) return (
      <div>
        <button className="btn btn-outline-secondary">Pending</button>
      </div>
    );

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
