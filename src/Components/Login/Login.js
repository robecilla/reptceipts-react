import React, { Component } from 'react';
import { Container, Columns, Column } from 'bloomer';
import Error from '../Helpers/Error';
import LoginForm from './LoginForm';

import * as actions from '../../Actions/Auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.signinUser(values, this.context.router.history);
  }

  render() {
    return (
      <Container isFluid="isFluid">
        <Columns>
          <Column className="login">
            {this.props.loginError ? (
              <Error error={this.props.loginError} />
            ) : (
              false
            )}
            <LoginForm onSubmit={this.handleSubmit} />
          </Column>
        </Columns>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { loginError: state.auth.loginError };
}

export default connect(mapStateToProps, actions)(Login);
