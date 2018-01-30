import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/User';

import { Container, Column, Title } from 'bloomer';

class Receipt extends Component {
  /* This gets called before rendering */
  componentWillMount() {
    /* Avoids fetching the user everythime this component gets rendered */
    if (typeof this.props.receipts === 'undefined') {
      //this.props.getUserReceipts();
    }
  }

  render() {
    const receipts = this.props.receipts;
    const { id } = this.props.match.params;
    /* Waits until user data gets fetched from API */
    if (typeof receipts === 'undefined') {
      //return <h2>Loading...</h2>;
    }

    return (
      <Column
        isSize={{ desktop: 6, widescreen: 6, default: 6 }}
        className="is-fullheight"
        style={{
          padding: '40px 20px',
          display: 'block'
        }}
      >
        <Title>{id}</Title>
      </Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    receipts: state.user.receipts
  };
}

export default connect(mapStateToProps, actions)(Receipt);
