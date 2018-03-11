import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { TOGGLE_LOGIN } from '../../Actions';
// import { connect } from 'react-redux';
import { Control, Button, Notification } from 'bloomer';
import BloomerField from '../Login/BloomerField';
import './Register.css';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Please choose an username';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'We need your e-mail!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Please create a password';
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less';
  }

  return errors;
};

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
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {/* If there's an error it will show up here */}

        {this.renderError()}

        <Field
          name="username"
          type="text"
          component={BloomerField}
          heading="Username"
          icon="fa fa-user"
        />

        <Field
          name="email"
          type="email"
          component={BloomerField}
          heading="Your e-mail"
          icon="fa fa-at"
        />

        <Field
          name="password"
          type="password"
          component={BloomerField}
          heading="Create a password"
          icon="fa fa-key"
        />

        <br />

        <Control>
          <Button
            type="submit"
            isLoading={submitting}
            isColor="warning"
            isPulled="left"
          >
            Sign Up
          </Button>
        </Control>
        <Control>
          <Button
            isColor="dark"
            isPulled="right"
            onClick={() =>
              this.props.dispatch({
                type: TOGGLE_LOGIN,
                isLoginActive: true
              })
            }
          >
            Log In
          </Button>
        </Control>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm);
