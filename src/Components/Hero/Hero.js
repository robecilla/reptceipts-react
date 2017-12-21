import React from 'react';
import Navbar from '../Navbar/Navbar';
import {
    Hero,
    HeroBody,
    HeroHeader,
    Container,
    Title
} from 'bloomer';


class LandingHero extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Hero isColor='dark' isFullHeight>
          <HeroHeader>
            <Navbar />
          </HeroHeader>

          <HeroBody>
            <Container hasTextAlign='centered'>
                <Title>Landing</Title>
            </Container>
          </HeroBody>
        </Hero>
      </div>
    );
  }
}

export default LandingHero;
