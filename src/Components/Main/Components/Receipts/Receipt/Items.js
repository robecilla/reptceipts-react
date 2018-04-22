import React, { Component } from 'react';
import { Content, Heading, Columns, Column } from 'bloomer';

const Total = ({ label, total }) => {
  return (
    <Columns isMarginless hasTextAlign="right" style={{ paddingRight: 50 }}>
      <Column isPaddingless>
        <strong>{label}</strong> : <span>&#163;</span>
        {total}
      </Column>
    </Columns>
  );
};

export default class Items extends Component {
  render() {
    let i = 0;
    const { items, receipt } = this.props;
    const totals = [
      {
        label: 'Total',
        total: receipt.total
      },
      {
        label: `VAT (${receipt.VAT_value} %)`,
        total: receipt.VAT
      },
      {
        label: 'Subtotal',
        total: receipt.subtotal
      }
    ];

    return (
      <Content>
        {items.map(item => (
          <Columns
            key={i++}
            isMarginless
            isVCentered
            hasTextAlign="centered"
            isDisplay="flex-mobile"
          >
            <Column isPaddingless>x{item.quantity}</Column>
            <Column isPaddingless isSize={{ mobile: 4 }}>
              {item.name} <br />
              <Heading>{item.serial_no}</Heading>
            </Column>
            <Column isPaddingless isSize={{ mobile: 4 }}>
              <span>&#163;</span>
              {item.price}
            </Column>
          </Columns>
        ))}
        <hr />
        {totals.map(total => (
          <Total key={i++} label={total.label} total={total.total} />
        ))}
      </Content>
    );
  }
}
