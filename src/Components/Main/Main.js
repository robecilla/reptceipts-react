import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Register from '../Register/Register';

class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/register' component={Register}/>
      </Switch>
    );
  }

}

export default Main;
