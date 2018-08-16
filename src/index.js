import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './store';

const appRoot = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appRoot,
);
