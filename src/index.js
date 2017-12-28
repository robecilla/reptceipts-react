import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './index.css';

import Layout from './Layout/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
