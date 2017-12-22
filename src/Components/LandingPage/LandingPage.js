import React from 'react';
import Navbar from '../Navbar/Navbar';
import {
    Hero,
    HeroBody,
    HeroHeader,
    Container,
    Title
} from 'bloomer';


class LandingPage extends React.Component {

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

            </Container>
          </HeroBody>

        </Hero>
      </div>
    );
  }
}

export default LandingPage;
