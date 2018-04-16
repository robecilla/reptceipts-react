import React, { Component } from 'react';
import { Column, Subtitle, Tag } from 'bloomer';

import Endpoint from './Endpoint';

class EndpointBox extends Component {
  render() {
    const { title, endpoints, user } = this.props;
    return (
      <Column isSize={6}>
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
            user={user}
          />
        ))}
      </Column>
    );
  }
}

export default EndpointBox;
