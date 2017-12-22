import React, { Component } from 'react';
// Components
import Layout from './Layout/Layout';
import { Container } from 'bloomer';

// Styles
import './App.css';

class App extends Component {

  render() {
    return (
        <Container>
          <Layout />
        </Container>
    );
  }
}

export default App;
