import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import login from './Reducers/loginNav';
import registerServiceWorker from './registerServiceWorker';

import App from './App/App';

import 'bulma/css/bulma.css';
import './index.css';

let store = createStore(
  login,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
