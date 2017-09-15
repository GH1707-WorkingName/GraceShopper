import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './client/store.js';
import Index from './client/';
import './client/index.scss';

ReactDOM.render(
<<<<<<< HEAD
  <Provider store = {store}>
=======
  <Provider store={store}>
>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14
    <Router>
      <Index />
    </Router>
  </Provider>,
  document.getElementById('app')
);
