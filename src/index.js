import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reducers from './Reducers';
import { AUTH_USER } from './Actions/Auth';
import App from './App/App';
import 'bulma/css/bulma.css';
import './index.css';

const store = createStore(reducers, applyMiddleware(reduxThunk));
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
