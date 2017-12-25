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
    this.state = {isActive: false};
    // This binding is necessary to make `this` work in the callback
    this.burgerClick = this.burgerClick.bind(this);
  }

  burgerClick(newState) {
    // Open and closes menu when mobile
	this.setState({ isActive: newState })
  }

  render() {
    return (
		<Navbar isTransparent>

			<Brand isMenuOpen={this.state.isActive}
				   callbackParent={(newState) => this.burgerClick(newState)} />

			<NavbarMenu isActive={this.state.isActive} >
				<NavbarEnd>
					<NavbarItem isHoverable hasDropdown >
						<NavbarLink>Login</NavbarLink>
						<NavbarDropdown isBoxed className={'is-right'} isHidden='mobile'>
							<Login />
						</NavbarDropdown>
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
