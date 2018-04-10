import React, { Component } from 'react';
import { Title, Subtitle, HeroBody, Columns, Column } from 'bloomer';
import Error from '../../Helpers/Error';
import RegisterForm from '../../Register/RegisterForm';

import * as actions from '../../../Actions/Auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Register extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.registerUser(values, this.context.router.history);
  }

  render() {
    return (
      <HeroBody id="signup" style={{ height: '100vh' }}>
        <Columns isMultiline>
          <Column
            isSize={{ widescreen: 12, desktop: 12, tablet: 12, mobile: 8 }}
            isOffset={{ widescreen: 2, desktop: 1, tablet: 1, mobile: 2 }}
          >
            <Title isSize={3}>Keep your purchase receipts organised</Title>
            <Subtitle isSize={6} style={{ marginTop: '10px' }}>
              reptceipts helps you organise, manage and redeem your purchase
              receipts
            </Subtitle>
          </Column>
          <Column
            isSize={{ widescreen: 3, desktop: 4, tablet: 4, mobile: 8 }}
            isOffset={{ widescreen: 2, desktop: 1, tablet: 1, mobile: 2 }}
          >
            {this.props.registerError ? (
              <Error error={this.props.registerError} />
            ) : (
              false
            )}

            <RegisterForm onSubmit={this.handleSubmit} />
          </Column>
        </Columns>
      </HeroBody>
    );
  }
}

function mapStateToProps(state) {
  return {
    registerError: state.auth.registerError,
    ui: state.ui
  };
}

export default connect(mapStateToProps, actions)(Register);
