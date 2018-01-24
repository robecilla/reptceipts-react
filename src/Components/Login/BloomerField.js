import React, { Component } from 'react';
import { Field } from 'redux-form';
import {
  Field as FieldBloomer,
  Label,
  Control,
  Icon,
  Heading,
  Input,
  Help
} from 'bloomer';

class BloomerField extends Component {
  render() {
    const {
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
      <FieldBloomer>
        {tag}
        <Control hasIcons="left">
          <Input {...input} type={type} isColor={errClass} />
          <Icon isSize="small" isAlign="left">
            <span className={icon} aria-hidden="true" />
          </Icon>
          {touched && (error && <Help isColor="danger">{error}</Help>)}
        </Control>
      </FieldBloomer>
    );
  }
}

export default BloomerField;
