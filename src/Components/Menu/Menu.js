import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import {
  Menu,
  MenuLabel,
  MenuList,
  Columns,
  Column,
  HeroBody,
  Container,
  Box,
  Content
} from 'bloomer';
import Dashboard from './Dashboard/Dashboard';

import './Menu.css';

class MenuBar extends Component {
  render() {
    return (
      <HeroBody style={{ alignItems: 'initial' }}>
        <Container isMarginless>
          <Columns>
            <Column isSize={{ desktop: 2 }} isHidden="mobile">
              <Menu>
                <MenuLabel>General</MenuLabel>
                <MenuList>
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
            <Column isSize={{ desktop: 10 }}>
              <Box>
                <Content>
                  <Switch>
                    <Route path="/menu/dashboard" component={Dashboard} />
                  </Switch>
                </Content>
              </Box>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    );
  }
}

export default MenuBar;
