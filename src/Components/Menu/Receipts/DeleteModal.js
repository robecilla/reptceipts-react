import React, { Component } from 'react';
import {
  ModalBackground,
  ModalContent,
  Button,
  Modal,
  Subtitle,
  Box,
  Columns,
  Column
} from 'bloomer';

class DeleteModal extends Component {
  render() {
    const { isActive, receipt_id } = this.props;
    return (
      <Modal isActive={isActive}>
        <ModalBackground />
        <ModalContent>
          <Box>
            <Subtitle hasTextAlign="centered">
              Are you sure you want to delete this receipt?
            </Subtitle>

            <Columns>
              <Column>
                <Button
                  isColor="danger"
                  isFullWidth
                  onClick={() => this.props.handleDelete(receipt_id)}
                >
                  Yes, delete it!
                </Button>
              </Column>
              <Column>
                <Button
                  isColor="dark"
                  isFullWidth
                  onClick={() => this.props.closeModal()}
                >
                  Cancel
                </Button>
              </Column>
            </Columns>
          </Box>
        </ModalContent>
      </Modal>
    );
  }
}

export default DeleteModal;
