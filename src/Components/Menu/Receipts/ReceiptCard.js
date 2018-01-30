import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../../../Actions/User';

import { Card, CardContent, Content, Title, Subtitle } from 'bloomer';

class ReceiptCard extends Component {
  render() {
    const { id, location, subtotal, datetime } = this.props;
    return (
      <Link to={'/menu/receipts/' + id}>
        <Card>
          <CardContent>
            <Content>
              <Title isSize={4}>{location}</Title>
              <Subtitle isSize={6}>Subtotal: £{subtotal}</Subtitle>
              <small>When: {datetime}</small>
            </Content>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

export default ReceiptCard;
