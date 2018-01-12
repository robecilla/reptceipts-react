import React, { Component } from 'react';
import { Container, Columns, Column } from 'bloomer';
import * as actions from '../../Actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

const loginStyle = {
  width: '250px',
  margin: '20px 0px'
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errorMessage) {
      this.props.authError(null);
    }
  }

  handleSubmit(values) {
    console.log(this.props.history);
    this.props.signinUser(values, this.props.history);
  }

  render() {
    return (
      <Container isFluid>
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
  return {
    errorMessage: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(Login);
