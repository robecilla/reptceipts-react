import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/User';

// Components
import { Title, Column } from 'bloomer';

class Dashboard extends Component {
  /* This gets called before rendering */
  componentWillMount() {
    /* Avoids fetching the user everythime this component gets rendered */
    if (typeof this.props.user === 'undefined') {
      this.props.getUser();
    }
  }

  render() {
    /* Waits until user data gets fetched from API */
    if (typeof this.props.user === 'undefined') {
      return (
        <Column
          className="is-fullheight"
          style={{
            padding: '40px 20px',
            display: 'block'
          }}
        />
      );
    }

    return (
      <Column
        isSize={{ desktop: 10 }}
        className="is-fullheight"
        style={{ padding: '40px 20px', display: 'block' }}
      >
        <Title isSize={3}>Welcome {this.props.user.username}</Title>
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
