import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../../../Actions/User';
import SearchInput, { createFilter } from 'react-search-input';
import { Collapse } from 'react-collapse';

import { Link } from 'react-router-dom';

import apk from '../../../../Assets/apk/app-release.apk';

import { Column, Subtitle, Notification, Icon } from 'bloomer';
import ReceiptCard from './ReceiptCard';
import { List } from 'react-content-loader';

import { isEmpty } from '../../../Helpers/helpers.js';

const KEYS_TO_FILTERS = ['retailer_name', 'subtotal'];

class ReceiptList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      isSearchVisible: false
    };
    this.searchUpdated = this.searchUpdated.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);

    if (typeof this.props.receipts === 'undefined') {
      this.props.getUserReceipts();
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  toggleSearch() {
    this.setState(prevState => ({
      isSearchVisible: !prevState.isSearchVisible
    }));
  }

  render() {
    const receipts = this.props.receipts;
    /* Waits until user data gets fetched from API */
    if (!receipts) {
      return (
        <Column
          isSize={{ widescreen: 3, desktop: 4, tablet: 5, mobile: 'full' }}
          isOffset={{ widescreen: 2, desktop: 1 }}
          style={{
            padding: '40px 30px',
            display: 'block'
          }}
        >
          <List style={{ width: 600, height: 300 }} />
        </Column>
      );
    }

    if (isEmpty(receipts)) {
      return (
        <Column
          isSize={{ widescreen: 6, desktop: 6, tablet: 7, mobile: 'full' }}
          isOffset={{ widescreen: 3, desktop: 3, tablet: 3 }}
          style={{
            padding: '40px 30px',
            display: 'block'
          }}
        >
          <Notification hasTextAlign="centered">
            <p>Seems like you have not scanned anything yet ..</p>
            <p>
              <a href={apk} download>
                {' '}
                Download{' '}
              </a>{' '}
              the app or use the <Link to="/console">API Console</Link> to get
              receipts
            </p>
          </Notification>
        </Column>
      );
    }

    let filteredReceipts = [];
    if (receipts) {
      filteredReceipts = receipts.filter(
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
      );
    }

    return this.props.areReceiptsLoading ? (
      <Column
        isSize={{ widescreen: 3, desktop: 4, tablet: 5, mobile: 'full' }}
        isOffset={{ widescreen: 2, desktop: 1 }}
        style={{
          padding: '40px 30px',
          display: 'block'
        }}
      >
        <List style={{ width: 600, height: 300 }} />
      </Column>
    ) : (
      <Column
        isSize={{ widescreen: 3, desktop: 4, tablet: 5, mobile: 'full' }}
        isOffset={{ widescreen: 2, desktop: 1 }}
        style={{
          padding: '40px 30px',
          display: 'block'
        }}
      >
        <span onClick={this.toggleSearch}>
          <Icon isSize="small" className="fas fa-search pointer" />
        </span>

        <hr style={{ margin: 0 }} />

        <Collapse isOpened={this.state.isSearchVisible}>
          <br />
          <SearchInput inputClassName="input" onChange={this.searchUpdated} />
        </Collapse>

        <br />
        {/* Loops through user receipts and render */
        !isEmpty(filteredReceipts) ? (
          filteredReceipts.map(receipt => (
            <ReceiptCard
              key={receipt.id}
              id={receipt.id}
              retailer_name={receipt.retailer_name}
              subtotal={receipt.subtotal}
              created_at={receipt.created_at}
              is_redeemable={receipt.is_redeemable}
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
    receipts: state.user.receipts,
    areReceiptsLoading: state.user.areReceiptsLoading
  };
}

export default connect(mapStateToProps, userActions)(ReceiptList);
