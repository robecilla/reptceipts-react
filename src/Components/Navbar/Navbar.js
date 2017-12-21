import React from 'react';
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
    Control
} from 'bloomer';

import brand from '../../logo.svg';

class Nav extends React.Component {

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
      <div>
        <Navbar isTransparent>
            <NavbarBrand>
                <NavbarItem style={{ marginRight: 40 }} href='#/'>
                <img src={brand} alt='Brand'/>
                reptceipts
                </NavbarItem>

                <NavbarItem isHidden='desktop'>
                    <Icon icon='github' />
                </NavbarItem>
                <NavbarItem isHidden='desktop'>
                    <Icon
                        icon='twitter'
                        style={{ color: '#55acee' }} />
                </NavbarItem>
                <NavbarBurger
                    isActive={this.state.isActive}
                    onClick={this.onClickNav} />
            </NavbarBrand>
                <NavbarMenu
                    isActive={this.state.isActive}
                    onClick={this.onClickNav}>
                    <NavbarStart>
                        <NavbarItem href='#/' isHoverable>Home</NavbarItem>
                        <NavbarItem hasDropdown isHoverable>
                            <NavbarLink href='#/'>Documentation</NavbarLink>
                            <NavbarDropdown>
                                <NavbarItem href='#/'>
                                    One A
                                </NavbarItem>
                                <NavbarItem href='#/'>
                                    Two B
                                </NavbarItem>
                                <NavbarDivider />
                                <NavbarItem href='#/'>
                                    Two A
                                </NavbarItem>
                            </NavbarDropdown>
                        </NavbarItem>
                    </NavbarStart>
                    <NavbarEnd>

                    </NavbarEnd>
                </NavbarMenu>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
