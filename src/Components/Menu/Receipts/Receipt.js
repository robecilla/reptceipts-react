import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/Receipt';

import {
  Container,
  Column,
  Title,
  Subtitle,
  Content,
  Box,
  Table
} from 'bloomer';
import ReceiptCard from './ReceiptCard';

class Receipt extends Component {
  /* This gets called before rendering */
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getReceiptDetail(id);
  }

  render() {
    // const items = receiptDetail.items.JSON.parse();
    /* Waits until user data gets fetched from API */
    if (!this.props.receiptDetail) {
      return (
        <div>
          <Column
            className="is-fullheight"
            style={{
              padding: '40px 20px',
              display: 'block'
            }}
          >
            <Title>Loading...</Title>
          </Column>
        </div>
      );
    }

    const retailer = this.props.receiptDetail.retailer;
    const receipt = this.props.receiptDetail.receipt;
    const items = JSON.parse(this.props.receiptDetail.receipt.items);

    return (
      <Column
        isSize={{ desktop: 6, widescreen: 6, default: 6 }}
        className="is-fullheight"
        style={{
          padding: '40px 20px',
          display: 'block'
        }}
      >
        <Column
          isSize={{ desktop: 10, widescreen: 10, default: 10 }}
          isOffset={{ desktop: 1, widescreen: 1, default: 1 }}
        >
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
              <div>{retailer.email}</div>
            </Content>
            <hr />
            <Content hasTextAlign="centered">
              <Table isNarrow>
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Loops through user receipts and render */
                  items.map(item => (
                    <tr key={item.id}>
                      <td>{item.serial_no}</td>
                      <td>{item.name}</td>
                      <td>x{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" />
                    <td>Total:</td>
                    <td>599.36</td>
                  </tr>
                  <tr>
                    <td colSpan="2" />
                    <td>VAT (21%):</td>
                    <td>15.69</td>
                  </tr>
                  <tr>
                    <td colSpan="2" />
                    <td>Subtotal:</td>
                    <td>620.25</td>
                  </tr>
                </tfoot>
              </Table>
            </Content>
          </Box>
        </Column>
      </Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    receiptDetail: state.receipt.receiptDetail
  };
}

export default connect(mapStateToProps, actions)(Receipt);
