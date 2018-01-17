import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Field as FieldBloomer, Label, Control, Icon, Heading } from 'bloomer';

class BloomerField extends Component {
  render() {
    const {
      component,
      name,
      type,
      label,
      heading,
      icon,
      className
    } = this.props;
    let tag;
    if (label) {
      tag = <Label>{label}</Label>;
    } else if (heading) {
      tag = <Heading>{heading}</Heading>;
    }
    return (
      <FieldBloomer>
        {tag}

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
