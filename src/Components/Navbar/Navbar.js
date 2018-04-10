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
import UpdateUserDetail from './UpdateUserDetail';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdateActive: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.props.getUser();
  }

  handleClick() {
    this.setState({ isUpdateActive: true });
  }

  closeModal() {
    this.props.getUser();
    this.setState({ isUpdateActive: false });
  }

  links() {
    if (this.props.authenticated) {
      return (
        <NavbarEnd>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink>
              <i className="fas fa-user-circle" />&nbsp;&nbsp;{' '}
              {this.props.user ? this.props.user.username : 'Loading ..'}
            </NavbarLink>
            <NavbarDropdown isHidden="mobile" isBoxed>
              <NavbarItem href="#/" onClick={this.handleClick}>
                <i className="fas fa-edit" />&nbsp;&nbsp;My details
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/signout">
                  <i className="fas fa-sign-out-alt" />&nbsp;&nbsp;Log Out
                </NavLink>
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
              <i className="fas fa-book" />&nbsp;&nbsp;How It Works
            </Link>
          </NavbarItem>
          <NavbarItem
            hasDropdown
            isHoverable
            isActive={this.props.isLoginActive}
          >
            <NavbarLink>
              <i className="fas fa-sign-in-alt" />&nbsp;&nbsp;Login
            </NavbarLink>
            <NavbarDropdown className={'is-right'} isBoxed>
              <Login />
            </NavbarDropdown>
          </NavbarItem>
        </NavbarEnd>
      );
    }
  }

  render() {
    return (
      <Navbar className="is-info has-shadow">
        <Brand />
        {/* Injecting links */}
        <NavbarMenu isActive={this.state.isActive}>{this.links()}</NavbarMenu>
        <UpdateUserDetail
          isActive={this.state.isUpdateActive}
          closeModal={() => this.closeModal()}
        />
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
