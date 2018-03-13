import React, { Component } from 'react';
// Components
import { Title, Column } from 'bloomer';
import qr1 from '../../../../Assets/img/qr/json_receipt1_qr.png';

class QRExamples extends Component {
  render() {
    return (
      <Column
        isSize={{ desktop: 10 }}
        className="is-fullheight"
        style={{ padding: '40px 20px' }}
      >
        <Title isSize={3}>Example QR Codes</Title>
        <img src={qr1} alt="receipt1" width="200" />
      </Column>
    );
  }
}

export default QRExamples;
