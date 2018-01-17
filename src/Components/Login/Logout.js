import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions';
import PropTypes from 'prop-types';

class Logout extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.signoutUser();
    this.context.router.history.push('/');
  }

  render() {
    return false;
  }
}

export default connect(null, actions)(Logout);
