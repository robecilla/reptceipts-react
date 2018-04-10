import React, { Component } from 'react';
import { Field, FieldBody, Control, Button } from 'bloomer';

class GoButton extends Component {
  render() {
    return (
      <Field isHorizontal>
        <FieldBody>
          <Field>
            <Control>
              <Button isColor="info" type="submit" isFullWidth>
                Go >
              </Button>
            </Control>
          </Field>
        </FieldBody>
      </Field>
    );
  }
}

export default GoButton;
