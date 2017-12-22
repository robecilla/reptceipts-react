import React, { Component } from 'react';
import { NavbarBrand, NavbarItem, NavbarBurger } from 'bloomer';
import { NavLink } from 'react-router-dom';

import brand from '../../logo.svg';

class Brand extends Component {

  constructor() {
    super();
    this.state = {isActiveBurger: false};
    // This binding is necessary to make `this` work in the callback
    this.onClickBurger = this.onClickBurger.bind(this);
  }

  onClickBurger() {
    // Open and closes menu when mobile
    this.setState(prevState => ({
      isActiveBurger: !prevState.isActiveBurger
    }));
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
