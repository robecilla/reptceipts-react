import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Menu from '../Menu/Menu';
import Logout from '../Login/Logout';
import { PrivateRoute } from '../Auth/PrivateRoute';

import NotFound from './NotFound.js';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signout" component={Logout} />
        {/* Private Routes */}
        <PrivateRoute path="/menu" component={Menu} />
        {/* Not found */}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Main;
