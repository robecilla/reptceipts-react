import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as receiptActions from '../../../../Actions/Receipt';

import { Title, Heading, Box, Delete, Columns, Column } from 'bloomer';
// eslint-disable-next-line
import ReceiptCardStyle from './box.css';

class ReceiptCard extends Component {
  render() {
    const { id, retailer_name, subtotal } = this.props;
    return (
      <div>
        <Box
          style={{ padding: '12px', marginBottom: '10px' }}
          className="receipt-box"
        >
          <Link to={'/receipts/' + id}>
            <Title isMarginless isSize={4}>
              {retailer_name}
            </Title>
            <Heading>Subtotal: £{subtotal}</Heading>
          </Link>
        </Box>
      </div>
    );
  }
}

export default connect(null, receiptActions)(ReceiptCard);
