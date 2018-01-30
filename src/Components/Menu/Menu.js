import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Menu, MenuList, Columns, Column } from 'bloomer';
import Dashboard from './Dashboard/Dashboard';
import ReceiptList from './Receipts/ReceiptList';
import Receipt from './Receipts/Receipt';

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
            isSize={{ tablet: 2, desktop: 2, default: 2 }}
            isHidden="mobile"
            className="hero is-fullheight"
          >
            <Menu hasTextAlign="centered">
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
            <Route path="/menu/receipts" component={ReceiptList} />
          </Switch>
          <Route path="/menu/receipts/:id" component={Receipt} />
        </Columns>
      </div>
    );
  }
}

export default MenuBar;
