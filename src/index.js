import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {loadFlashcards} from "./actions/flashcardActions";
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './components/sticky-footer-navbar.css';
import './components/styles.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(loadFlashcards());

render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
  document.getElementById('root')
);
