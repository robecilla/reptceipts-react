import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarItem,
    NavbarBurger,
    NavbarMenu,
    NavbarStart,
    NavbarLink,
    NavbarDropdown,
    NavbarDivider,
    NavbarEnd,
    Button,
    Icon,
    Field,
    Control,
    Tile,
    Box,
    Title,
    Container,
    Columns,
    Column,
    Notification,
    Label,
    Input,
    Checkbox
} from 'bloomer';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import Brand from './Brand';

class Nav extends Component {

  constructor() {
    super();
    this.state = {isActive: false};
    // This binding is necessary to make `this` work in the callback
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav() {
    // Open and closes menu when mobile
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    return (
      <Navbar isTransparent>

        <Brand />

        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarEnd>
            <NavbarItem isHoverable hasDropdown>
              <NavbarLink>Login</NavbarLink>
              <NavbarDropdown>
                <Container isFluid>
                    <Column style={{ width: '300px' }}>
                      <Field>
                          <Label>Username</Label>
                          <Control hasIcons>
                              <Input placeholder='Username'/>
                              <Icon isSize='small' isAlign='left'>
                                  <span className="fa fa-user" aria-hidden="true" />
                              </Icon>
                          </Control>
                      </Field>
                      <Field>
                          <Label>Password</Label>
                          <Control hasIcons>
                              <Input placeholder='Password' type='password' />
                              <Icon isSize='small' isAlign='left'>
                                  <span className="fa fa-user" aria-hidden="true" />
                              </Icon>
                          </Control>
                      </Field>
                      <Field>
                          <Control>
                              <Checkbox> Remember me? </Checkbox>
                          </Control>
                      </Field>
                      <Field isGrouped>
                          <Control>
                              <Button isColor='primary' isPulled='left'>Log in</Button>
                          </Control>
                      </Field>
                    </Column>
                </Container>
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
