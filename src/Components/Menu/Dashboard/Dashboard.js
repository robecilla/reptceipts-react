import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/User';

// Components
import { Title } from 'bloomer';

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
      return <h2>Loading...</h2>;
    }

    return (
      <div>
        <Title hasTextColor="dark" isSize={3}>
          Welcome {this.props.user.name}
        </Title>
        <div className="is-flex">
          <label style={{ padding: '0px 15px 0px 0px' }}>
            <strong>Your name: </strong>
          </label>
          <div>{this.props.user.name}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps, actions)(Dashboard);
