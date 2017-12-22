import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import {
    Hero,
    HeroBody,
    HeroHeader
} from 'bloomer';


import Navbar from '../Components/Navbar/Navbar';
import Main from '../Components/Main/Main';

class Layout extends Component {

  render() {
    return (
      <Hero isColor='dark' isFullHeight>
        <HeroHeader>
          <Navbar />
        </HeroHeader>
        <Main />
      </Hero>
    );
  }
}

export default Layout;
