import React, { Component } from 'react';
import {
    Hero,
    HeroBody,
    HeroHeader,
    Container,
    Title
} from 'bloomer';


class WillRename extends Component {

  constructor() {
    super();
  }

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

export default WillRename;
