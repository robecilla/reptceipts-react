import React, { Component } from 'react';
import { Container, Columns, Column, Delete } from 'bloomer';
import * as actions from '../../Actions/Auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';

const loginStyle = {
  width: '250px',
  margin: '20px 0px'
};

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errorMessage) {
      this.props.authError(null);
    }
  }

  handleSubmit(values) {
    this.props.signinUser(values, this.context.router.history);
  }

  render() {
    return (
      <Container isFluid="isFluid">
        <Columns>
          <Column style={loginStyle}>
            <LoginForm
              onSubmit={this.handleSubmit}
              errorMessage={this.props.errorMessage}
            />
          </Column>
        </Columns>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(Login);
