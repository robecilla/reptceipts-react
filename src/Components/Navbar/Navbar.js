import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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

  links() {
    if (this.props.authenticated) {
      return (
        <NavbarEnd>
          <NavbarItem isHoverable isActive={this.state.isLoginActive}>
            <NavbarLink>User Name</NavbarLink>
            <NavbarDropdown className={'is-right'} isHidden="mobile" isBoxed />
          </NavbarItem>
          <NavbarItem isHoverable>
            <NavLink to="/signout">Log Out</NavLink>
          </NavbarItem>
        </NavbarEnd>
      );
    } else {
      return (
        <NavbarEnd>
          <NavbarItem isHoverable>
            <NavLink to="/menu">Menu</NavLink>
          </NavbarItem>
          <NavbarItem isHoverable isActive={this.state.isLoginActive}>
            <NavbarLink>Login</NavbarLink>
            <NavbarDropdown className={'is-right'} isHidden="mobile" isBoxed>
              <Login />
            </NavbarDropdown>
          </NavbarItem>
        </NavbarEnd>
      );
    }
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
        <NavbarMenu isActive={this.state.isActive}>{this.links()}</NavbarMenu>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Nav);
