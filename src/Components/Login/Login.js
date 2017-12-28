import React, { Component } from 'react';
// Components
import { Container, Columns, Column } from 'bloomer';
import LoginForm from './LoginForm';

const loginStyle = {
  width: '250px',
  margin: '20px 0px'
};

class Login extends Component {
  render() {
    return (
      <Container isFluid>
        <Columns>
          <Column style={loginStyle}>
            <LoginForm />
          </Column>
        </Columns>
      </Container>
    );
  }
}

export default Login;
