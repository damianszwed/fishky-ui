import React from 'react'

import Footer from '../../navbar/components/Footer'
import Navbar from '../../navbar/components/Navbar'
import Main from '../components/Main'
import {Security} from '@okta/okta-react';
import config from '../../security/localhostConfiguration';
import PropTypes from "prop-types";
import {connect} from "react-redux";

class App extends React.Component {

  render() {
    return (
      <div>
        <Security
          issuer={config.oidc.issuer}
          client_id={config.oidc.clientId}
          redirect_uri={config.oidc.redirectUri}
        >
          <header><Navbar authenticated={this.props.authenticated}/></header>
          <Main/>
          <Footer/>
        </Security>
      </div>
    );
  }
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.security.authenticated
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
