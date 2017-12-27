import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../Register/Register';
import Menu from '../Menu/Menu';

class Main extends Component {

  render() {
    return (
		<Switch>
			<Route exact path='/' component={Register} />
			<Route path='/menu' component={Menu} />
		</Switch>
    );
  }
}

export default Main;
