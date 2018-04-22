import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Column, Box } from 'bloomer';
import { List } from 'react-content-loader';

import Header from './Receipt/Header';
import Detail from './Receipt/Detail';
import Items from './Receipt/Items';
import Delete from './Delete/Delete';

import * as receiptActions from '../../../../Actions/Receipt';
import * as userActions from '../../../../Actions/User';

class Receipt extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.receiptActions.getReceiptDetail(id, this.context.router.history);
  }

  render() {
    /* Waits until receipt detail data gets fetched from API */
    if (!this.props.receiptDetail) {
      return (
        <Column
          isSize={{ widescreen: 5, desktop: 6, default: 6 }}
          style={{
            padding: '40px 30px 40px 60px',
            display: 'block'
          }}
        >
          <List style={{ width: 600, height: 300 }} />
        </Column>
      );
    }

    const retailer = this.props.receiptDetail.retailer;
    const receipt = this.props.receiptDetail.receipt;
    const items = JSON.parse(this.props.receiptDetail.receipt.items);

    return (
      <Column
        isSize={{ widescreen: 5, desktop: 6, default: 6 }}
        style={{
          padding: '40px 30px 40px 30px',
          display: 'block'
        }}
      >
        {this.props.isDetailLoading ? (
          <List style={{ width: 600, height: 300 }} />
        ) : (
          <div>
            <Box>
              <Header retailer={retailer} />
              <Detail receipt={receipt} />
              <hr />
              <Items receipt={receipt} items={items} />
            </Box>
            <Delete
              receipt_id={receipt.id}
              deleteReceipt={this.props.receiptActions.deleteReceipt}
              getUserReceipts={this.props.userActions.getUserReceipts}
            />
          </div>
        )}
      </Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    receiptDetail: state.receipt.receiptDetail,
    isDetailLoading: state.receipt.isDetailLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    receiptActions: bindActionCreators(receiptActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
