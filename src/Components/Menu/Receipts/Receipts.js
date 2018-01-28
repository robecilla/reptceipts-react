import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/User';

import { Column } from 'bloomer';
import Receipt from './Receipt';

class Dashboard extends Component {
  /* This gets called before rendering */
  componentWillMount() {
    /* Avoids fetching the user everythime this component gets rendered */
    if (typeof this.props.user === 'undefined') {
      //this.props.getUser();
    }
  }

  render() {
    /* Waits until user data gets fetched from API */
    if (typeof this.props.user === 'undefined') {
      //return <h2>Loading...</h2>;
    }

    return (
      <Column
        isSize={{ desktop: 4 }}
        className="is-fullheight"
        style={{
          padding: '40px 20px',
          display: 'block',
          borderRight: '1px solid #DEDEDE',
          cursor: 'pointer'
        }}
      >
        <Receipt
          location="Sainsburys"
          subtotal="£50.45"
          date="27/01/2018"
          time="11.50 am"
        />

        <Receipt
          location="New Look"
          subtotal="£30.95"
          date="04/01/2018"
          time="10.50 am"
        />

        <Receipt
          location="Vital Ingredient"
          subtotal="£5.45"
          date="23/01/2018"
          time="13.50 am"
        />
      </Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps, actions)(Dashboard);
