import React, { Component } from 'react';
import Moment from 'react-moment';
import { Content, Column, Columns } from 'bloomer';

export default class Detail extends Component {
  render() {
    const { receipt } = this.props;
    return (
      <Content>
        <Columns hasTextAlign="centered">
          <Column>
            <small>
              <strong>Date: </strong>
              <Moment format="DD MMM YYYY">{receipt.created_at}</Moment>
            </small>
            <br />
            <small>
              Paid with&nbsp;
              {receipt.payment_method}
            </small>
          </Column>
          <Column>
            <small>
              Scanned via&nbsp;
              {receipt.scan_type === 1 ? 'QR Code' : 'NFC'}
            </small>
            {receipt.is_redeemable ? (
              <span>
                <br />
                <small>
                  <i className="fas fa-gift" /> Redeemable
                </small>
              </span>
            ) : (
              false
            )}
          </Column>
        </Columns>
      </Content>
    );
  }
}
