import React, { Component } from 'react';
import { Field, Label, Control, Input, Icon, Checkbox, Button } from 'bloomer';

import './Register.css';

class RegisterForm extends Component {

  constructor(props) {
    super();
    this.state = {isActiveBurger: props.isMenuOpen};
    // This binding is necessary to make `this` work in the callback
    //this.showLogin = this.showLogin.bind(this);
  }

  render() {
    return (
		<div>
			<Field>
				<Label className={'has-text-white-bis'}>Pick a username</Label>
				<Control hasIcons>
				  <Input  className={'input-black'}
						  isColor='light'
						  type='text'
						   />
				  <Icon isSize='small' isAlign='left'>
					  <span className="fa fa-user" aria-hidden="true" />
				  </Icon>
				</Control>
			</Field>
			<Field>
				<Label className={'has-text-white-bis'}>Your e-mail</Label>
				<Control hasIcons>
				  <Input  className={'input-black'}
						  isColor='light'
						  type='email'
						   />
				  <Icon isSize='small' isAlign='left'>
					  <span className="fa fa-at" aria-hidden="true" />
				  </Icon>
				</Control>
			</Field>
			<Field>
				<Label className={'has-text-white-bis'}>Create a password</Label>
				<Control hasIcons>
				  <Input  className={'input-black'}
						  isColor='light'
						  type='password'
						   />
				  <Icon isSize='small' isAlign='left'>
					  <span className="fa fa-key" aria-hidden="true" />
				  </Icon>
				</Control>
			</Field>
			<br/>
			<Field>
				<Control>
				  <Button isColor='warning' isOutlined  isFullWidth>Sign Up</Button>
				</Control>
			</Field>
			<Field>
				<Control>
				  <Button isColor='dark' isFullWidth onClick={this.showLogin}>.. or Log In</Button>
				</Control>
			</Field>
  		</div>
    );
  }
}

export default RegisterForm;
