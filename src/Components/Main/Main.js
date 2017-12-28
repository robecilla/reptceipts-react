import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Menu from '../Menu/Menu';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/menu" component={Menu} />
      </Switch>
    );
  }
}

export default Main;
