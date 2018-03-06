import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/User';

import { Container, Column, Title } from 'bloomer';
import ReceiptCard from './ReceiptCard';

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

class ReceiptList extends Component {
  /* This gets called before rendering */
  componentWillMount() {
    /* Avoids fetching the user everythime this component gets rendered */
    if (typeof this.props.receipts === 'undefined') {
      this.props.getUserReceipts();
    }
  }

  render() {
    const receipts = this.props.receipts;
    /* Waits until user data gets fetched from API */
    if (!receipts) {
      return (
        <Column
          className="is-fullheight"
          isSize={{ desktop: 4 }}
          style={{
            padding: '40px 20px',
            display: 'block'
          }}
        >
          <Title>Loading...</Title>
        </Column>
      );
    }

    if (isEmpty(receipts)) {
      return (
        <Column
          className="is-fullheight"
          isSize={{ desktop: 4 }}
          style={{
            padding: '40px 20px',
            display: 'block'
          }}
        >
          <Title>
            Sorry, you appear to not have any receipt! Download the app!
          </Title>
        </Column>
      );
    }

    return (
      <Column
        className="is-fullheight"
        isSize={{ desktop: 4 }}
        style={{
          padding: '40px 20px',
          display: 'block',
          borderRight: '1px solid #DEDEDE'
        }}
      >
        {/* Loops through user receipts and render */
        receipts.map(receipt => (
          <ReceiptCard
            key={receipt.id}
            id={receipt.id}
            retailer_name={receipt.retailer_name}
            subtotal={receipt.subtotal}
            payment_method={receipt.payment_method}
            datetime={receipt.created_at}
          />
        ))}
      </Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    receipts: state.user.receipts
  };
}

export default connect(mapStateToProps, actions)(ReceiptList);
