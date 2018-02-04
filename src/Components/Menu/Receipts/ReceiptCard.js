import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../../../Actions/User';

import { Card, CardContent, Content, Title, Subtitle } from 'bloomer';

class ReceiptCard extends Component {
  render() {
    const {
      id,
      retailer_name,
      subtotal,
      payment_method,
      datetime
    } = this.props;
    return (
      <Link to={'/menu/receipts/' + id}>
        <Card>
          <CardContent>
            <Content>
              <Title isSize={4}>{retailer_name}</Title>
              <Subtitle isSize={6}>Subtotal: £{subtotal}</Subtitle>
              <small>When: {datetime}</small>
              <br />
              <small>Payment Method: {payment_method}</small>
            </Content>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

export default ReceiptCard;
