import React, {Component} from 'react'

import Footer from '../../navbar/components/Footer'
import Navbar from '../../navbar/components/Navbar'
import Main from '../components/Main'
import {Security} from '@okta/okta-react';
import config from '../../security/localhostConfiguration';

export default class App extends Component {

  render() {
    return (
      <div>
        <Security
          issuer={config.oidc.issuer}
          client_id={config.oidc.clientId}
          redirect_uri={config.oidc.redirectUri}
        >
          <header><Navbar/></header>
          <Main/>
          <Footer/>
        </Security>
      </div>
    );
  }
}
