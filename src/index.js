import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {applyMiddleware, createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './app/reducers'
import App from './app/containers/App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'toastr/build/toastr.min.css';
import './navbar/sticky-footer-navbar.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV === 'remove-this-statement') {
  middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
