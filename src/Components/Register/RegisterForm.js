import React, { Component } from 'react';
import { Field, Label, Control, Input, Icon, Checkbox, Button } from 'bloomer';

import './Register.css';

class RegisterForm extends Component {

  // constructor(props) {
  //   super();
  //   this.state = {isActiveBurger: props.isMenuOpen};
  //   // This binding is necessary to make `this` work in the callback
  //   this.onClickBurger = this.onClickBurger.bind(this);
  // }


  render() {
    return (
		<div>
			<Field>
				<Label className={'has-text-white-bis'}>Email</Label>
				<Control hasIcons>
				  <Input  className={'input-black'}
						  placeholder='Username'
						  isColor='light'
						   />
				  <Icon isSize='small' isAlign='left'>
					  <span className="fa fa-user" aria-hidden="true" />
				  </Icon>
				</Control>
			</Field>
			<Field>
				<Label className={'has-text-white-bis'}>Password</Label>
				<Control hasIcons>
				  <Input  className={'input-black'}
						  placeholder='Password'
						  isColor='light'
						  type='password'
						   />
				  <Icon isSize='small' isAlign='left'>
					  <span className="fa fa-key" aria-hidden="true" />
				  </Icon>
				</Control>
			</Field>
			<Field>
				<Control>
				  <Checkbox hasTextColor='white'> I agree the terms and conditons </Checkbox>
				</Control>
			</Field>
			<hr />
			<Field>
				<Control>
				  <Button isColor='light' isOutlined  isPulled='left'>Sign Up</Button>
				</Control>
				<Control>
				  <Button isColor='dark' isPulled='right'>Already registered?</Button>
				</Control>
			</Field>
  		</div>
    );
  }
}

export default RegisterForm;
