import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Menu from '../Menu/Menu';
import Logout from '../Login/Logout';
import { PrivateRoute } from '../Auth/PrivateRoute';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signout" component={Logout} />
        {/* Private Routes */}
        <PrivateRoute path="/menu" component={Menu} />
      </Switch>
    );
  }
}

export default Main;
