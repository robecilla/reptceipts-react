import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import * as actions from '../../Actions/User';

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

  componentWillMount() {
    /* Avoids fetching the user everythime this component gets rendered */
    if (
      typeof this.props.authenticated !== 'undefined' &&
      typeof this.props.user === 'undefined'
    ) {
      this.props.getUser();
    }
  }

  links() {
    let loggedin;
    if (typeof this.props.user === 'undefined') {
      loggedin = 'Loading...';
    } else {
      loggedin = this.props.user.username;
    }

    if (this.props.authenticated) {
      return (
        <NavbarEnd>
          <NavbarItem>
            <NavLink to="/menu/dashboard">Menu</NavLink>
          </NavbarItem>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink> {loggedin} </NavbarLink>
            <NavbarDropdown isHidden="mobile" isBoxed>
              <NavbarItem>
                <NavLink to="/signout">Log Out</NavLink>
              </NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarEnd>
      );
    } else {
      return (
        <NavbarEnd>
          <NavbarItem>
            <Link smooth to="#howitworks">
              How It Works
            </Link>
          </NavbarItem>
          <NavbarItem
            hasDropdown
            isHoverable
            isActive={this.props.isLoginActive}
          >
            <NavbarLink>Login</NavbarLink>
            <NavbarDropdown className={'is-right'} isBoxed>
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
      <Navbar className="is-warning has-shadow">
        <Brand
          isMenuOpen={this.state.isMenuOpen}
          callbackParent={newState => this.burgerClick(newState)}
        />
        {/* Injecting links */}
        <NavbarMenu isActive={this.state.isActive}>{this.links()}</NavbarMenu>
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

export default connect(mapStateToProps, actions)(Nav);
