import React, { Component } from 'react';
import { NavbarBrand, NavbarItem, NavbarBurger, Title } from 'bloomer';
import { NavLink } from 'react-router-dom';

class Brand extends Component {
  constructor(props) {
    super();
    this.state = { isBurgerActive: props.isBurgerActive };
    // This binding is necessary to make `this` work in the callback
    this.onClickBurger = this.onClickBurger.bind(this);
  }

  onClickBurger() {
    const newState = !this.state.isBurgerActive;
    this.setState({ isBurgerActive: newState }); // we update our state
    this.props.callbackParent(newState); // we notify our parent
  }

  render() {
    return (
      <NavbarBrand>
        <NavbarItem>
          <NavLink style={{ marginRight: '15px' }} to="/">
            <Title hasTextColor="light" style={{ fontSize: '30px' }}>
              reptceipts
            </Title>
          </NavLink>
        </NavbarItem>
        <NavbarBurger
          isActive={this.state.isBurgerActive}
          onClick={this.onClickBurger}
        />
      </NavbarBrand>
    );
  }
}

export default Brand;
