import React, {Component} from 'react'

import Footer from '../../navbar/components/Footer'
import Navbar from '../../navbar/components/Navbar'
import Main from '../components/Main'
import {Security} from '@okta/okta-react';
import securityConfig from '../../security/securityConfiguration';

export default class App extends Component {

  render() {
    return (
      <div>
        <Security
          issuer={securityConfig.oidc.issuer}
          client_id={securityConfig.oidc.clientId}
          redirect_uri={securityConfig.oidc.redirectUri}
        >
          <header><Navbar/></header>
          <Main/>
          <Footer/>
        </Security>
      </div>
    );
  }
}
