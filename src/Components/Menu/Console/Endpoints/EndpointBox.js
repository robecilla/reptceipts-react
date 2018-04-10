import React, { Component } from 'react';
import { Column, Subtitle, Tag } from 'bloomer';

import Endpoint from './Endpoint';

class EndpointBox extends Component {
  render() {
    const { isHidden, title, endpoints } = this.props;
    return (
      <Column isSize={6} isHidden={isHidden}>
        <Subtitle>
          {title}{' '}
          <Tag isColor="info" isPulled="right">
            Click to expand
          </Tag>
        </Subtitle>
        {endpoints.map(endpoint => (
          <Endpoint
            key={endpoint.id}
            id={endpoint.id}
            method={endpoint.method}
            description={endpoint.description}
            url={endpoint.url}
            params={endpoint.params}
          />
        ))}
      </Column>
    );
  }
}

export default EndpointBox;
