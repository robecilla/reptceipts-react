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
    // This binding is necessary to make `this` work in the callback
    this.burgerClick = this.burgerClick.bind(this);
	this.openLogin = this.openLogin.bind(this);
  }

  burgerClick(newState) {
    // Open and closes menu when mobile
	this.setState({ isActive: newState });
  }

  openLogin(e) {
	  e.preventDefault();
	console.log('function called');
	let newState = !this.state.isLoginActive;
	this.setState({ isLoginActive: newState });
  }

  render() {
    return (
		<Navbar isTransparent>
			<Brand isMenuOpen={this.state.isMenuOpen}
				   callbackParent={(newState) => this.burgerClick(newState)} />
			<NavbarMenu isActive={this.state.isActive} >
				<NavbarEnd>
					<NavbarItem isHoverable>
						<NavLink to="/menu">Menu</NavLink>
					</NavbarItem>
					<NavbarItem isHoverable isActive={this.state.isLoginActive} >
						<NavbarLink>Login</NavbarLink>
						<NavbarDropdown className={'is-right'} isHidden='mobile' isBoxed >
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
