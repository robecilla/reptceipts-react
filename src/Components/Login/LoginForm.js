import React, { Component } from 'react';
import { Field, Label, Control, Input, Icon, Checkbox, Button } from 'bloomer';

class LoginForm extends Component {

	constructor() {
  	  super();
  	  this.state = {isButtonLoading: false};
  	  // This binding is necessary to make `this` work in the callback
  	  this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
  	  e.preventDefault();

  	  // do validation here, if all passed the continue

  	  // button loading
  	  this.setState({ isButtonLoading: true })
  	  // Simulated for now
  	  setTimeout(function() {
  		  console.log('submitted!');

  		  //redirect here to user dashboard
  		  window.location = '/';

  	  }, 2000);
    }


  render() {
    return (
		<form onSubmit={this.handleSubmit}>
		<Field>
			<Label> Your Email </Label>
			<Control hasIcons='left'>
				<Input type='email' />
				<Icon isSize='small' isAlign='left'>
					<span className="fa fa-at" aria-hidden="true" />
				</Icon>
			</Control>
		</Field>
		<Field>
			<Label>Your Password</Label>
			<Control hasIcons='left'>
				<Input type='password' />
				<Icon isSize='small' isAlign='left'>
					<span className="fa fa-key" aria-hidden="true" />
				</Icon>
			</Control>
		</Field>
		<Field>
			<Control hasTextAlign='centered'>
				<Checkbox hasTextColor='dark'> Remember me? </Checkbox>
			</Control>
		</Field>
		<Field>
			<Control>
				<Button type="submit" isColor='warning' isFullWidth isLoading={this.state.isButtonLoading}>
					Log in
				</Button>
			</Control>
		</Field>
	 </form>
    );
  }
}

export default LoginForm;
