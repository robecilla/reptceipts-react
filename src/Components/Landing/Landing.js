import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Register from './Register/Register';
import HowItWorks from './HowItWorks/HowItWorks';

class Landing extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <Redirect
          to={{
            pathname: '/receipts',
            state: {
              from: this.props.location
            }
          }}
        />
      );
    } else {
      return (
        <div>
          <Register />
          <HowItWorks />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Landing);
