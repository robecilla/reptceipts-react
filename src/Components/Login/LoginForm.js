import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
import { Field as FieldBloomer, Control, Button, Notification } from 'bloomer';

import BloomerField from './BloomerField';

class LoginForm extends Component {
  renderError() {
    if (this.props.errorMessage) {
      return (
        <Notification isColor="danger" hasTextAlign="centered">
          {this.props.errorMessage}
        </Notification>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {/* If there's an error it will show up here */}

          {this.renderError()}

          <BloomerField
            component="input"
            name="email"
            type="email"
            label="Your e-mail"
            icon="fa fa-at"
            className="input"
          />

          <BloomerField
            component="input"
            name="password"
            type="password"
            label="Your Password"
            icon="fa fa-key"
            className="input"
          />

          <br />

          <FieldBloomer>
            <Control>
              <Button type="submit" isColor="warning" isFullWidth>
                Log in
              </Button>
            </Control>
          </FieldBloomer>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(LoginForm);
