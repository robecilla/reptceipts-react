import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import { List } from 'react-content-loader';
import { Collapse } from 'react-collapse';
import PropTypes from 'prop-types';

import DeleteModal from './DeleteModal';

import * as receiptActions from '../../../../Actions/Receipt';
import * as userActions from '../../../../Actions/User';

import {
  Column,
  Subtitle,
  Content,
  Box,
  Table,
  Button,
  Label,
  Icon,
  Container
} from 'bloomer';

class Receipt extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      isCollapseOpen: false,
      isModalActive: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ isCollapseOpen: !this.state.isCollapseOpen });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.receiptActions.getReceiptDetail(id, this.context.router.history);
  }

  handleDelete(id) {
    this.props.receiptActions.deleteReceipt(
      id,
      this.props.userActions.getUserReceipts,
      this.context.router.history
    );

    this.setState({ isModalActive: false });
  }

  closeModal() {
    this.setState({ isModalActive: false });
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

    let i = 0;
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
              <hr />
              <Content>
                <small>
                  <strong>Date: </strong>
                  <Moment format="DD MMM YYYY">{receipt.created_at}</Moment>
                </small>
                <br />
                <small>
                  Paid with&nbsp;
                  {receipt.payment_method}
                </small>
                <br />
                <small>
                  Scanned via&nbsp;
                  {receipt.scan_type === 1 ? 'QR' : 'NFC'}
                </small>
                <br />
                <br />
                <Table isNarrow>
                  <thead>
                    <tr>
                      <th>Ref</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Loops through user receipts and render */
                    items.map(item => (
                      <tr key={i++}>
                        <td>
                          <small>{item.serial_no}</small>
                        </td>
                        <td>{item.name}</td>
                        <td>x{item.quantity}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="2" />
                      <td>Total:</td>
                      <td>{receipt.total}</td>
                    </tr>
                    <tr>
                      <td colSpan="2" />
                      <td>VAT ({receipt.VAT_value}%):</td>
                      <td>{receipt.VAT}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2" />
                      <td>
                        <strong>Subtotal:</strong>
                      </td>
                      <td>
                        <strong>{receipt.subtotal}</strong>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </Content>
            </Box>
            <span style={{ float: 'right' }}>
              <Label
                hasTextAlign="right"
                style={{ cursor: 'pointer' }}
                onClick={this.toggleCollapse}
              >
                More <Icon icon="angle-down" isSize="small" />
              </Label>

              <Collapse isOpened={this.state.isCollapseOpen}>
                <Button
                  isSize="small"
                  isColor="danger"
                  onClick={() => this.setState({ isModalActive: true })}
                >
                  Delete receipt
                </Button>
              </Collapse>
            </span>
          </div>
        )}

        <DeleteModal
          isActive={this.state.isModalActive}
          receipt_id={receipt.id}
          handleDelete={id => this.handleDelete(id)}
          closeModal={() => this.closeModal()}
        />
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
