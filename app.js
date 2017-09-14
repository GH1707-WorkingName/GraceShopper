import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './client/store.js';
import Index from './client/';
import './client/index.scss';

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <Index />
    </Router>
  </Provider>,
  document.getElementById('app')
);
