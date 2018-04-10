import React, { Component } from 'react';
import { Content, Tag } from 'bloomer';

class EndpointBox extends Component {
  render() {
    const { result } = this.props;
    let qr = result.qr;
    return (
      <Content>
        Result:
        {result.code >= 200 && result.code < 300 ? (
          <Tag isColor="success" isPulled="right">
            {result.code}
          </Tag>
        ) : (
          <Tag isColor="danger" isPulled="right">
            {result.code}
          </Tag>
        )}
        <br />
        <br />
        {qr ? (
          <img
            style={{ position: 'relative', left: '20% ' }}
            src={qr}
            alt="qr"
          />
        ) : (
          <pre style={{ maxHeight: 500 }}>
            {JSON.stringify(result.response, null, 2)}
          </pre>
        )}
      </Content>
    );
  }
}

export default EndpointBox;
