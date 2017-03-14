import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/app';
import reducers from './reducers';

import styles from '../style/style.scss';


ReactDOM.render(
  <Provider store={createStore}>
    <App />
  </Provider>
  , document.querySelector('.container'));
