import React, { Component } from 'react';

// Components
import { Title, Column, Box } from 'bloomer';

class QRExamples extends Component {
  render() {
    return (
      <Column
        isSize={{ desktop: 10 }}
        className="hero is-fullheight"
        style={{ padding: '40px 20px' }}
      >
        <Title isSize={3}>Example QR Codes</Title>
      </Column>
    );
  }
}

export default QRExamples;
