import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { TOGGLE_LOGIN } from '../../Actions';
// import { connect } from 'react-redux';
import {
  Field as FieldBloomer,
  Control,
  Button,
  Notification,
  Delete
} from 'bloomer';

import BloomerField from './BloomerField';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less';
  }

  return errors;
};

class LoginForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          placeholder="your email"
          component={BloomerField}
          icon="fa fa-at"
        />

        <Field
          name="password"
          type="password"
          placeholder="your password"
          component={BloomerField}
          icon="fa fa-key"
        />

        <FieldBloomer>
          <Control>
            <Button
              type="submit"
              isColor="info"
              isLoading={submitting}
              isFullWidth
            >
              Log in
            </Button>
          </Control>
        </FieldBloomer>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  validate
})(LoginForm);
