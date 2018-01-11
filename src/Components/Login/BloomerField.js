import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Field as FieldBloomer, Label, Control, Icon } from 'bloomer';

class BloomerField extends Component {
  render() {
    const { component, name, type, label, icon, className } = this.props;
    return (
      <FieldBloomer>
        <Label>{label}</Label>
        <Control hasIcons="left">
          <Field
            name={name}
            component={component}
            type={type}
            className={className}
          />
          <Icon isSize="small" isAlign="left">
            <span className={icon} aria-hidden="true" />
          </Icon>
        </Control>
      </FieldBloomer>
    );
  }
}

export default BloomerField;
