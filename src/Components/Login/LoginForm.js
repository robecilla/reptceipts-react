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
      <div>
        <Delete
          isPulled="right"
          onClick={() =>
            this.props.dispatch({
              type: TOGGLE_LOGIN,
              isLoginActive: false
            })
          }
        />
        <form onSubmit={handleSubmit}>
          {/* If there's an error it will show up here */}

          {this.renderError()}

          <Field
            name="email"
            type="email"
            component={BloomerField}
            label="Your e-mail"
            icon="fa fa-at"
          />

          <Field
            name="password"
            type="password"
            component={BloomerField}
            label="Your Password"
            icon="fa fa-key"
          />

          <br />

          <FieldBloomer>
            <Control>
              <Button
                type="submit"
                isColor="warning"
                isLoading={submitting}
                isFullWidth
              >
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
  form: 'signin',
  validate
})(LoginForm);
