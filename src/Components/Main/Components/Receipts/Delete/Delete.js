import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Button, Icon } from 'bloomer';
import Collapse from 'react-collapse';
import DeleteModal from './DeleteModal';

export default class Delete extends Component {
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

  handleDelete(id) {
    this.props.deleteReceipt(
      id,
      this.props.getUserReceipts,
      this.context.router.history
    );

    this.setState({ isModalActive: false });
  }

  closeModal() {
    this.setState({ isModalActive: false });
  }

  render() {
    const { receipt_id } = this.props;
    return (
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

        <DeleteModal
          isActive={this.state.isModalActive}
          receipt_id={receipt_id}
          handleDelete={id => this.handleDelete(id)}
          closeModal={() => this.closeModal()}
        />
      </span>
    );
  }
}
