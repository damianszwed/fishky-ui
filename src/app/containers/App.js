import React from 'react'

import Footer from '../../navbar/components/Footer'
import Navbar from '../../navbar/components/Navbar'
import Router from '../components/Router'
import {useHistory} from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import {Security} from '@okta/okta-react';
import securityConfig from '../../security/securityConfiguration';
import {withRouter} from "react-router-dom";

const oktaAuth = new OktaAuth(securityConfig.oidc);

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <header>
          <Navbar/>
        </header>
        <Router/>
        <Footer/>
      </Security>
    </div>
  );
}

export default withRouter(App);
