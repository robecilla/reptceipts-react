import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Columns } from 'bloomer';
import { PrivateRoute } from '../Auth/PrivateRoute';

import Landing from '../Landing/Landing';
import Console from './Components/Console/Console';
import Receipts from './Components/Receipts/ReceiptList';
import Receipt from './Components/Receipts/Receipt';
import Logout from '../Login/Logout';
import NotFound from './Components/NotFound';

class Main extends Component {
  render() {
    return (
      <Columns isMultiline>
        <Switch>
          {/* Public Routes */}
          <Route exact path="/" component={Landing} />
          <Route path="/signout" component={Logout} />
          {/* Private Routes */}
          <PrivateRoute path="/receipts" component={Receipts} />
          <PrivateRoute path="/console" component={Console} />
          {/* Not found */}
          <Route component={NotFound} />
        </Switch>
        <PrivateRoute path="/receipts/:id" component={Receipt} />
      </Columns>
    );
  }
}

export default Main;
