import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarItem,
    NavbarBurger,
    NavbarMenu,
    NavbarStart,
    NavbarLink,
    NavbarDropdown,
    NavbarDivider,
    NavbarEnd,
    Button,
    Icon,
    Field,
    Control
} from 'bloomer';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import brand from '../../logo.svg';

class Nav extends Component {

  constructor() {
    super();
    this.state = {isActive: false};
    // This binding is necessary to make `this` work in the callback
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav() {
    // Open and closes menu when mobile
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    return (
      <Navbar isTransparent>
        <NavbarBrand>
          <NavbarItem style={{ marginRight: 40 }}>
            <img src={brand} alt='Brand'/>
            <NavLink to="/">reptceipts</NavLink>
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
            <Icon icon='github' />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
            <Icon
              icon='twitter'
              style={{ color: '#55acee' }} />
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav} />
        </NavbarBrand>
        <NavbarMenu
          isActive={this.state.isActive}
          onClick={this.onClickNav}>
          <NavbarEnd>
            <NavbarItem isHoverable>
              <NavLink to="/login">Login</NavLink>
            </NavbarItem>
            <NavbarItem isHoverable>
              <NavLink to="/register">Register</NavLink>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default Nav;
