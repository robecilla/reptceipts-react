import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { TOGGLE_LOGIN } from '../../Actions';
import {
  Control,
  Button,
  Notification,
  Field as FieldBloom,
  Column
} from 'bloomer';

import divider from 'bulma-divider/dist/bulma-divider.min.css';

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
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
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

        <FieldBloom>
          <Button
            type="submit"
            isLoading={submitting}
            isColor="info"
            isFullWidth
          >
            Sign Up
          </Button>
          <div className="is-divider" data-content="OR" />
          <Button
            isColor="dark"
            isFullWidth
            onClick={() =>
              this.props.dispatch({
                type: TOGGLE_LOGIN,
                isLoginActive: true
              })
            }
          >
            Log In
          </Button>
        </FieldBloom>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm);
