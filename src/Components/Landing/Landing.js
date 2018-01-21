import React, { Component } from 'react';
// Components
import {
  HeroBody,
  Title,
  Subtitle,
  Container,
  Columns,
  Column,
  Image
} from 'bloomer';

import * as actions from '../../Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import RegisterForm from '../Register/RegisterForm';
import s8 from '../../Assets/img/s8-render.png';

const s8position = {
  width: '70%'
};

class Register extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errorMessage) {
      this.props.authError(null);
    }
  }

  handleSubmit(values) {
    this.props.registerUser(values, this.context.router.history);
  }

  render() {
    if (this.props.authenticated) {
      return (
        <Redirect
          to={{
            pathname: '/menu/dashboard',
            state: {
              from: this.props.location,
              isLoginActive: true
            }
          }}
        />
      );
    } else {
      return (
        <HeroBody style={{ alignItems: 'initial' }}>
          <Container>
            <Columns isMultiline>
              <Column
                isSize={{ mobile: 'full', desktop: 'full' }}
                isOffset={{ desktop: 2 }}
              >
                <Title isSize={3}>Keep your purchase receipts organised</Title>
                <Subtitle isSize={6} style={{ marginTop: '10px' }}>
                  {' '}
                  reptceipts helps you organise, manage and redeem your purchase
                  receipts{' '}
                </Subtitle>
              </Column>
              <Column
                isSize={{ mobile: 'full', desktop: 6, widescreen: 4 }}
                isOffset={{ desktop: 2 }}
              >
                <RegisterForm
                  onSubmit={this.handleSubmit}
                  errorMessage={this.props.errorMessage}
                />
              </Column>
            </Columns>
          </Container>
          <Container>
            <Columns>
              <Column
                isSize={{ mobile: 'full', desktop: 9 }}
                isOffset={{ mobile: 3, desktop: 3 }}
              >
                <Image src={s8} style={s8position} />
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    ui: state.ui
  };
}

export default connect(mapStateToProps, actions)(Register);
