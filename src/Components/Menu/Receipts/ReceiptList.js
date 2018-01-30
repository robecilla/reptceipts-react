import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/User';

import { Container, Column } from 'bloomer';
import ReceiptCard from './ReceiptCard';

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
    if (typeof receipts === 'undefined') {
      return <h2>Loading...</h2>;
    }

    return (
      <div>
        <Column
          className="is-fullheight"
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
              location={receipt.location}
              subtotal={receipt.subtotal}
              datetime={receipt.created_at}
            />
          ))}
        </Column>
      </div>
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
