import React, { Component } from 'react';
import { NavbarBrand, NavbarItem, NavbarBurger } from 'bloomer';
import { NavLink } from 'react-router-dom';

import brand from '../../logo.svg';

class Brand extends Component {

  constructor(props) {
    super();
    this.state = {isActiveBurger: props.isMenuOpen};
    // This binding is necessary to make `this` work in the callback
    this.onClickBurger = this.onClickBurger.bind(this);
  }

  onClickBurger() {
	const newState = !this.state.isActiveBurger;
	this.setState({ isActiveBurger: newState }); // we update our state
	this.props.callbackParent(newState); // we notify our parent
  }

  render() {
    return (
      <NavbarBrand>
        <NavbarItem>
          <img src={brand} alt='Brand'/>
          <NavLink to="/">reptceipts</NavLink>
        </NavbarItem>
        <NavbarBurger isActive={this.state.isActiveBurger} onClick={this.onClickBurger} />
      </NavbarBrand>
    );
  }
}

export default Brand;
