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
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    return (
        <div>
            <Navbar isTransparent style={{ border: 'solid 1px #00D1B2', margin: '5' }}>
                <NavbarBrand>
                        <NavbarItem style={{ marginRight: 40 }}>
                        <img src={brand} alt='Brand'/>
                        repceipts
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
                            <NavbarItem href='#/'>Home</NavbarItem>
                            <NavbarItem hasDropdown isHoverable>
                                <NavbarLink href='#/documentation'>Documentation</NavbarLink>
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
                            <NavbarItem
                                href="https://github.com/AlgusDark/bloomer"
                                isHidden='touch'>
                                <Icon icon='github' />
                            </NavbarItem>
                            <NavbarItem
                                href="https://twitter.com/AlgusDark"
                                isHidden='touch'>
                                <Icon
                                    icon='twitter'
                                    style={{ color: '#55acee' }} />
                            </NavbarItem>
                            <NavbarItem>
                                <Field isGrouped>
                                    <Control>
                                        <Button
                                            id="twitter"
                                            data-social-network="Twitter"
                                            data-social-action="tweet"
                                            data-social-target="http://bloomer.js.org"
                                            target="_blank"
                                            href="https://twitter.com/intent/tweet?text=bloomer:
                                            a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                            <Icon>
                                                <span
                                                    className="fa fa-twitter"
                                                    aria-hidden="true" />
                                            </Icon>
                                            <span>Tweet</span>
                                        </Button>
                                    </Control>
                                </Field>
                            </NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                </Navbar>
            </div>
    );
  }
}

export default Nav;
