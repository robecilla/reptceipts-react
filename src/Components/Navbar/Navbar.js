import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Navbar,
  NavbarItem,
  NavbarMenu,
  NavbarLink,
  NavbarDropdown,
  NavbarEnd
} from 'bloomer';

import Brand from './Brand';
import Login from '../Login/Login';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isLoginActive: false
    };
    this.burgerClick = this.burgerClick.bind(this);
  }

  burgerClick(newState) {
    // Open and closes menu when mobile
    this.setState({ isActive: newState });
  }

  render() {
    return (
      <Navbar isTransparent>
        <Brand
          isMenuOpen={this.state.isMenuOpen}
          callbackParent={newState => this.burgerClick(newState)}
        />
        <NavbarMenu isActive={this.state.isActive}>
          <NavbarEnd>
            <NavbarItem isHoverable>
              <NavLink to="/menu">Menu</NavLink>
            </NavbarItem>
            <NavbarItem isHoverable isActive={this.context}>
              <NavbarLink>Login</NavbarLink>
              <NavbarDropdown className={'is-right'} isHidden="mobile" isBoxed>
                <Login />
              </NavbarDropdown>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default Nav;
