import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Login from '../Login/Login';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
      </Switch>
    );
  }

}

export default Main;
