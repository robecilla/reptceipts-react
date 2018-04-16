import React, { Component } from 'react';
import { Field, FieldBody, Control, Button } from 'bloomer';

class GoButton extends Component {
  render() {
    return (
      <Button isColor="info" type="submit" style={{ width: 115 }}>
        Try it
      </Button>
    );
  }
}

export default GoButton;
