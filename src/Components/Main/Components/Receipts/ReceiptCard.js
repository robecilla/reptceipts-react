import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as receiptActions from '../../../../Actions/Receipt';
import Moment from 'react-moment';

import { Title, Box, Subtitle } from 'bloomer';
// eslint-disable-next-line
import ReceiptCardStyle from './box.css';

class ReceiptCard extends Component {
  render() {
    const {
      id,
      retailer_name,
      subtotal,
      created_at,
      is_redeemable
    } = this.props;
    return (
      <div>
        <Box
          style={{ padding: '12px', marginBottom: '10px' }}
          className="receipt-box"
        >
          <Link to={'/receipts/' + id}>
            <Title isSize={4}>{retailer_name}</Title>
            <Subtitle isSize={6}>
              <span>&#163;</span>
              {subtotal} &#183;{' '}
              <Moment format="DD MMM YYYY">{created_at}</Moment>
              {is_redeemable ? (
                <i className="fas fa-gift" style={{ float: 'right' }} />
              ) : (
                false
              )}
            </Subtitle>
          </Link>
        </Box>
      </div>
    );
  }
}

export default connect(null, receiptActions)(ReceiptCard);
