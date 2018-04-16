import React, { Component } from 'react';
import { Box, Content } from 'bloomer';
import { Collapse } from 'react-collapse';

import Result from './Components/Result';
import Parameters from './Components/Parameters';

class Endpoint extends Component {
  constructor() {
    super();
    this.state = {
      isCollapseOpen: false,
      result: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ isCollapseOpen: !this.state.isCollapseOpen });
  }

  /* API response coming from Parameters.js */
  getResult(result) {
    this.setState({ result: result });
  }

  render() {
    const { id, method, description, url, params, user } = this.props;
    return (
      <div>
        <Box style={{ padding: '10px 15px' }}>
          <div onClick={this.toggleCollapse} style={{ cursor: 'pointer' }}>
            <strong>/ {method}</strong> - {description}
            <code style={{ float: 'right' }}>{url}</code>
          </div>
        </Box>
        <Collapse isOpened={this.state.isCollapseOpen}>
          <Parameters
            endpoint_id={id}
            params={params}
            method={method}
            url={url}
            callbackParent={result => this.getResult(result)}
            user={user}
          />
          <br />
          {this.state.result ? <Result result={this.state.result} /> : false}
          <br />
        </Collapse>
      </div>
    );
  }
}

export default Endpoint;
