import React, { Component } from 'react';
// Components
//import Nav from '../Components/Navbar/Navbar';
import LandingPage from '../Components/LandingPage/LandingPage';
import { Container } from 'bloomer';

// Styles
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Container>
            <LandingPage />
          </Container>
      </div>
    );
  }
}

export default App;
