import React, { Component } from 'react';
import { HeroBody, Container, Title } from 'bloomer';

class Landing extends Component {

  render() {
    return (
      <HeroBody>
          <Container hasTextAlign='centered'>
              <Title isSize={1}>LANDING</Title>
          </Container>
      </HeroBody>
    );
  }
}

export default Landing;
