import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as receiptActions from '../../../Actions/Receipt';

import { Title, Heading, Box, Delete, Columns, Column } from 'bloomer';
import DeleteModal from './DeleteModal';
// eslint-disable-next-line
import ReceiptCardStyle from './box.css';

class ReceiptCard extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.setState({ isModalActive: false });
    this.props.deleteReceipt(id);
    this.context.router.history.push('/menu/receipts');
    this.props.callBack();
  }

  closeModal() {
    this.setState({ isModalActive: false });
  }

  render() {
    const { id, retailer_name, subtotal } = this.props;
    return (
      <div>
        <Box
          style={{ padding: '12px', marginBottom: '10px' }}
          className="receipt-box"
        >
          <Columns>
            <Column isSize={10}>
              <Link to={'/menu/receipts/' + id}>
                <Title isMarginless isSize={4}>
                  {retailer_name}
                </Title>
                <Heading>Subtotal: £{subtotal}</Heading>
              </Link>
            </Column>
            <Column>
              <Delete
                isPulled="right"
                onClick={() => this.setState({ isModalActive: true })}
              />
            </Column>
          </Columns>
        </Box>

        <DeleteModal
          isActive={this.state.isModalActive}
          receipt_id={id}
          handleDelete={id => this.handleDelete(id)}
          closeModal={() => this.closeModal()}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    receipts: state.user.receipts
  };
}

export default connect(mapStateToProps, receiptActions)(ReceiptCard);
