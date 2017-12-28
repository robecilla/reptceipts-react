import React, { Component } from 'react';
import { Hero, HeroHeader, HeroBody, Title, Container } from 'bloomer';

import Navbar from '../Components/Navbar/Navbar';
import Main from '../Components/Main/Main';

class Layout extends Component {
  render() {
    return (
      <div>
        <Hero isColor="dark" isFullHeight>
          <HeroHeader>
            <Navbar />
          </HeroHeader>

          <Main />
        </Hero>

        <Hero isColor="light" isFullHeight>
          <HeroBody>
            <Container hasTextAlign="centered">
              <Title isSize={3}>How it works, etc ... </Title>
            </Container>
          </HeroBody>
        </Hero>
      </div>
    );
  }
}

export default Layout;
