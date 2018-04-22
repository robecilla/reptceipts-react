import React, { Component } from 'react';
import { Content, Subtitle } from 'bloomer';

/* Displays basically retailer information */
export default class Header extends Component {
  render() {
    const { retailer } = this.props;
    return (
      <Content hasTextAlign="centered">
        <Subtitle>{retailer.name}</Subtitle>
        <div>
          {retailer.address1}, {retailer.address2}
        </div>
        <div>
          {retailer.address3} - {retailer.postcode}
        </div>
        <div>
          {retailer.phone_number} - {retailer.mobile_number}
        </div>
        <div>
          <a href={`mailto:${retailer.email}`}>{retailer.email}</a>
        </div>
      </Content>
    );
  }
}
