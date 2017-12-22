import React, { Component } from 'react';
// Components
import { Container, HeroBody, Title } from 'bloomer';

// Styles

class Login extends Component {

  render() {
    return (
      <HeroBody>
        <Container hasTextAlign='centered'>
          <Title isSize={1}>LOGIN</Title>
        </Container>
      </HeroBody>
    );
  }
}

export default Login;
