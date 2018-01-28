import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import {
  Menu,
  MenuLabel,
  MenuList,
  Columns,
  Column,
  HeroBody,
  Container
} from 'bloomer';
import Dashboard from './Dashboard/Dashboard';
import Receipts from './Receipts/Receipts';

import './Menu.css';

class MenuBar extends Component {
  render() {
    return (
      <div style={{ alignItems: 'initial' }}>
        <Columns>
          <Column
            style={{
              display: 'block',
              backgroundColor: '#F9F9F9',
              borderRight: '1px solid #DEDEDE'
            }}
            isSize={{ desktop: 2 }}
            isHidden="mobile"
            className="hero is-fullheight"
          >
            <Menu>
              <br />
              <MenuList style={{ padding: '40px' }}>
                <li>
                  <NavLink to="/menu/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/menu/receipts">Receipts</NavLink>
                </li>
                <li>
                  <NavLink to="/menu/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/menu/settings">Settings</NavLink>
                </li>
              </MenuList>
            </Menu>
          </Column>
          <Switch>
            <Route path="/menu/dashboard" component={Dashboard} />
            <Route path="/menu/receipts" component={Receipts} />
          </Switch>
        </Columns>
      </div>
    );
  }
}

export default MenuBar;
