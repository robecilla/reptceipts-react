import React, { Component } from 'react';
// Components
import { Container, HeroBody, Title } from 'bloomer';

class Register extends Component {

  render() {
    return (
      <HeroBody>
        <Container hasTextAlign='centered'>
          <Title isSize={1}>REGISTER</Title>
        </Container>
      </HeroBody>
    );
  }
}

export default Register;
