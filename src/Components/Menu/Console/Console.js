import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Title, Column, Columns, Notification } from 'bloomer';
import EndpointBox from './Endpoints/EndpointBox';
import AuthLogin from './Endpoints/AuthLogin';

import user from './Endpoints/user.json';
import retailer from './Endpoints/retailer.json';
import receipt from './Endpoints/receipt.json';

const JSON = [user, retailer, receipt];

const allJSON = [];
JSON.forEach(function(file) {
  allJSON.push(file);
});

class Console extends Component {
  render() {
    return (
      <Column
        isSize={{ desktop: 10 }}
        className="is-fullheight"
        style={{ padding: '40px 20px' }}
      >
        <Title>API Console</Title>
        <Notification>
          <Columns>
            <Column isSize={7}>
              This is the <strong>API Console</strong>. <br />
              Here is where you can test all the endpoints of the aplication.{' '}
              <br />
              For example, you can create retailers or generate QR receipts.
            </Column>
            <Column isSize={4}>
              <strong>Intructions:</strong> <br />
              Create a token through the Auth endpoint. <br />
              You're now able to perform other calls.
            </Column>
          </Columns>
        </Notification>
        <Columns isMultiline>
          <AuthLogin />
          {allJSON.map(json => (
            <EndpointBox
              isHidden={
                typeof this.props.isHidden !== 'undefined'
                  ? this.props.isHidden
                  : true
              }
              key={json[0].id}
              title={json[0].title}
              endpoints={json[0].endpoints}
            />
          ))}
        </Columns>
      </Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    isHidden: state.ui.isHidden
  };
}

export default connect(mapStateToProps, null)(Console);
