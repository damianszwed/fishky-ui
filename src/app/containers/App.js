import React, {Component} from 'react'

import Footer from '../../navbar/components/Footer'
import Navbar from '../../navbar/components/Navbar'
import Router from '../components/Router'
import {Security} from '@okta/okta-react';
import securityConfig from '../../security/securityConfiguration';
import {withRouter} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <Security
          issuer={securityConfig.oidc.issuer}
          clientId={securityConfig.oidc.clientId}
          redirectUri={securityConfig.oidc.redirectUri}
          onAuthRequired={this.onAuthRequired}
          pkce={true}
        >
          <header><Navbar/></header>
          <Router/>
          <Footer/>
        </Security>
      </div>
    );
  }
}

export default withRouter(App);
