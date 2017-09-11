import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './client/store.js';
import './client/index.scss';

ReactDOM.render(
  <Provider store = {store}>
  <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app')
);