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
    let token = localStorage.getItem('console_token');
    return (
      <Column
        isSize={{
          widescreen: 10,
          desktop: 'full',
          tablet: 'full',
          mobile: 'full'
        }}
        isOffset={{ widescreen: 1 }}
        style={{ padding: '40px 30px' }}
      >
        <Title>API Console</Title>
        <Notification>
          <Columns>
            <Column>
              This is the <strong>API Console</strong>. <br />
              Here is where you can test all the endpoints of the aplication.{' '}
              <br />
              For example, you can create retailers or generate QR receipts.
            </Column>
            <Column>
              <strong>Intructions</strong> <br />
              Create a token through the Auth endpoint. <br />
              You're now able to perform other calls.
            </Column>
          </Columns>
        </Notification>
        <Columns isMultiline>
          {token ? (
            allJSON.map(json => (
              <EndpointBox
                key={json[0].id}
                title={json[0].title}
                endpoints={json[0].endpoints}
                user={this.props.user ? this.props.user : false}
              />
            ))
          ) : (
            <AuthLogin />
          )}
        </Columns>
      </Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    isHidden: state.ui.isHidden,
    user: state.user.user
  };
}

export default connect(mapStateToProps, null)(Console);
