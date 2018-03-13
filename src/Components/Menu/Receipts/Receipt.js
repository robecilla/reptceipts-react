import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/Receipt';

import { Column, Subtitle, Content, Box, Table } from 'bloomer';

class Receipt extends Component {
  /* This gets called before rendering */
  componentDidMount() {
    if (
      typeof this.props.retailer ||
      typeof this.props.receipt === 'undefined'
    ) {
      const { id } = this.props.match.params;
      setTimeout(() => {
        this.props.getReceiptDetail(id);
      }, 500);
    }
  }

  render() {
    // const items = receiptDetail.items.JSON.parse();
    /* Waits until receipt detail data gets fetched from API */
    if (!this.props.receiptDetail) {
      return (
        <div>
          <Column
            className="is-fullheight"
            style={{
              padding: '40px 20px',
              display: 'block'
            }}
          />
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
            <Content>
              <small>When: {receipt.created_at}</small>
              <br />
              <small>Payment Method: {receipt.payment_method}</small>
              <br />
              <br />
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
                    <td>Subtotal:</td>
                    <td>{receipt.subtotal}</td>
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
