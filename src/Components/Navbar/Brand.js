import React, { Component } from 'react';
import { NavbarBrand, NavbarItem, NavbarBurger, Title } from 'bloomer';
import { NavLink } from 'react-router-dom';

class Brand extends Component {
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
      </NavbarBrand>
    );
  }
}

export default Brand;
