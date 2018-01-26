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
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.burgerClick = this.burgerClick.bind(this);
  }

  links() {
    let loggedin;
    if (typeof this.props.user === 'undefined') {
      loggedin = 'Loading...';
    } else {
      loggedin = this.props.user.name;
    }

    if (this.props.authenticated) {
      return (
        <NavbarEnd>
          <NavbarItem isHoverable>
            <NavLink to="/menu/dashboard">Menu</NavLink>
          </NavbarItem>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink> {loggedin} </NavbarLink>
            <NavbarDropdown isHidden="mobile" isBoxed>
              <NavbarItem hasTextColor="dark">
                <NavLink to="/signout">Log Out</NavLink>
              </NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarEnd>
      );
    } else {
      return (
        <NavbarEnd>
          <NavbarItem
            hasDropdown
            isHoverable
            isActive={this.props.isLoginActive}
          >
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
        {/* Injecting links */}
        <NavbarMenu isActive={this.state.isActive}> {this.links()} </NavbarMenu>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.user.user,
    isLoginActive: state.ui.isLoginActive
  };
}

export default connect(mapStateToProps)(Nav);
