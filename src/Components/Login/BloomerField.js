import React from 'react';
import { Field, Label, Control, Input, Icon, Checkbox, Button } from 'bloomer';

export const BloomerField = ({
  type,
  label,
  meta: { touched, error },
  ...props
}) => (
  <div>
    <Field>
      <Label> {label} </Label>
      <Control hasIcons="left">
        <Input type={type} />
        <Icon isSize="small" isAlign="left">
          <span className="fa fa-at" aria-hidden="true" />
        </Icon>
      </Control>
    </Field>
    {/* touched && error && <span className="error">{error}</span> */}
  </div>
);
