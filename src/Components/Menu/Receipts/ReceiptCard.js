import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as receiptActions from '../../../Actions/Receipt';

import {
  Content,
  Title,
  Subtitle,
  Heading,
  Box,
  Delete,
  Modal,
  ModalBackground,
  ModalContent,
  Button
} from 'bloomer';
// eslint-disable-next-line
import ReceiptCardStyle from './box.css';

class ReceiptCard extends Component {
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
    this.props.callBack();
  }

  render() {
    const { id, retailer_name, subtotal } = this.props;
    return (
      <div>
        <Box
          style={{ padding: '12px', marginBottom: '10px' }}
          className="receipt-box"
        >
          <Link to={'/menu/receipts/' + id}>
            <Content>
              <Title isMarginless isSize={4}>
                {retailer_name}
              </Title>
              <Heading style={{ width: '40%' }}>Subtotal: £{subtotal}</Heading>
            </Content>
          </Link>
          <Delete
            isPulled="right"
            onClick={() => this.setState({ isModalActive: true })}
          />
        </Box>
        <Modal isActive={this.state.isModalActive}>
          <ModalBackground />
          <ModalContent>
            <Box>
              <Content hasTextAlign="centered">
                <Subtitle>
                  Are you sure you want to delete this receipt?
                </Subtitle>
                <Button isColor="warning" onClick={() => this.handleDelete(id)}>
                  Yes
                </Button>
                <Button
                  isColor="dark"
                  onClick={() => this.setState({ isModalActive: false })}
                >
                  No
                </Button>
              </Content>
            </Box>
          </ModalContent>
        </Modal>
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
