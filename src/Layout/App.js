import React, { Component } from 'react';
// Components
//import Nav from '../Components/Navbar/Navbar';
import LandingHero from '../Components/Hero/Hero';

// Styles
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <LandingHero />
      </div>
    );
  }
}

export default App;
