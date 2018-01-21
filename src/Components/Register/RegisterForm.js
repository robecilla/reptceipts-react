import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { OPEN_LOGIN } from '../../Actions';
import { connect } from 'react-redux';
import { Field as FieldBloomer, Control, Button, Notification } from 'bloomer';
import BloomerField from '../Login/BloomerField';
import './Register.css';

class RegisterForm extends Component {
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
      <form onSubmit={handleSubmit}>
        {/* If there's an error it will show up here */}

        {this.renderError()}

        <BloomerField
          component="input"
          name="name"
          type="text"
          heading="Pick a username"
          icon="fa fa-user"
          className="input"
        />

        <BloomerField
          component="input"
          name="email"
          type="email"
          heading="Your e-mail"
          icon="fa fa-at"
          className="input"
        />

        <BloomerField
          component="input"
          name="password"
          type="password"
          heading="Create a password"
          icon="fa fa-key"
          className="input"
        />

        <br />

        <FieldBloomer>
          <Control>
            <Button type="submit" isColor="warning" isOutlined isFullWidth>
              Sign Up
            </Button>
          </Control>
        </FieldBloomer>
        <FieldBloomer>
          <Control>
            <Button
              isColor="dark"
              isFullWidth
              onClick={() =>
                this.props.dispatch({
                  type: OPEN_LOGIN
                })
              }
            >
              .. or Log In
            </Button>
          </Control>
        </FieldBloomer>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register'
})(RegisterForm);
