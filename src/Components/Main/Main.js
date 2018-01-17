import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Menu from '../Menu/Menu';
import Logout from '../Login/Logout';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/menu" component={Menu} />
        <Route path="/signout" component={Logout} />
      </Switch>
    );
  }
}

export default Main;
