import React, { Component } from 'react';
import { Notification } from 'bloomer';

class Error extends Component {
  render() {
    let { error } = this.props;
    return (
      <Notification isColor="danger" hasTextAlign="centered">
        {error}
      </Notification>
    );
  }
}

export default Error;
