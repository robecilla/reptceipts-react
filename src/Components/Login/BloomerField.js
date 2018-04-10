import React, { Component } from 'react';
import { Field, Label, Control, Icon, Heading, Input, Help } from 'bloomer';

class BloomerField extends Component {
  render() {
    const {
      placeholder,
      input,
      label,
      heading,
      icon,
      type,
      meta: { touched, error }
    } = this.props;

    let tag = label ? <Label>{label}</Label> : <Heading>{heading}</Heading>;
    let errClass = touched && error ? 'danger' : '';

    return (
      <Field>
        {tag}
        <Control hasIcons="left">
          <Input
            {...input}
            type={type}
            isColor={errClass}
            placeholder={placeholder}
          />
          <Icon isSize="small" isAlign="left">
            <span className={icon} aria-hidden="true" />
          </Icon>
          {touched && (error && <Help isColor="danger">{error}</Help>)}
        </Control>
      </Field>
    );
  }
}

export default BloomerField;
