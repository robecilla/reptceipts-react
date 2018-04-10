import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../../Actions/User';
import SearchInput, { createFilter } from 'react-search-input';

import apk from '../../../Assets/apk/app-release.apk';

import { Column, Title, Subtitle } from 'bloomer';
import ReceiptCard from './ReceiptCard';

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const KEYS_TO_FILTERS = ['retailer_name', 'subtotal'];

class ReceiptList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this);
    if (typeof this.props.receipts === 'undefined') {
      this.props.getUserReceipts();
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
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
        />
      );
    }

    if (isEmpty(receipts)) {
      return (
        <Column
          className="is-fullheight"
          hasTextAlign="centered"
          style={{
            padding: '40px 20px',
            display: 'block'
          }}
        >
          <Title>Sorry, you appear to not have any receipt!</Title>
          <Title>
            <a href={apk} download>
              {' '}
              Download{' '}
            </a>{' '}
            the app!
          </Title>
        </Column>
      );
    }

    let filteredReceipts = [];
    if (receipts) {
      filteredReceipts = receipts.filter(
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
      );
    }

    return (
      <Column
        className="is-fullheight"
        isSize={{ desktop: 4 }}
        style={{
          padding: '40px 20px',
          display: 'block',
          borderRight: '1px solid #DEDEDE',
          overflowY: 'scroll',
          height: '100vh'
        }}
      >
        <SearchInput inputClassName="input" onChange={this.searchUpdated} />
        <br />
        {/* Loops through user receipts and render */
        !isEmpty(filteredReceipts) ? (
          filteredReceipts.map(receipt => (
            <ReceiptCard
              key={receipt.id}
              id={receipt.id}
              retailer_name={receipt.retailer_name}
              subtotal={receipt.subtotal}
              callBack={() => this.props.getUserReceipts()}
            />
          ))
        ) : (
          <Subtitle isSize={6}>Could not find that receipt!</Subtitle>
        )}
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

export default connect(mapStateToProps, userActions)(ReceiptList);
