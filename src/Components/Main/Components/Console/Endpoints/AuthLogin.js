import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Field, Tag, Input, Column, Subtitle } from 'bloomer';
import { ROOT_URL } from '../../../../../Actions/config';

import GoButton from './Components/GoButton';

const fields = [
  {
    name: 'email',
    type: 'email'
  },
  {
    name: 'password',
    type: 'password'
  }
];

class AuthLogin extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      isHidden: false
    };
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(e) {
    e.preventDefault();
    let data = new FormData(e.target);

    axios({
      method: 'POST',
      url: ROOT_URL + '/api/login',
      data: data
    })
      .then(response => {
        console.log(response);
        if (response.data.response.token) {
          localStorage.setItem('console_token', response.data.response.token);
        }

        this.props.dispatch({ type: 'SET_HIDDEN', isHidden: false });
      })
      .catch(err => {
        let error;
        error = err.response.data.response;
        this.setState({ error: error });
      });
  }

  render() {
    let i = 0;
    return (
      <Column
        isSize={{ mobile: 10, tablet: 5, desktop: 5, widescreen: 5 }}
        isHidden={
          typeof this.props.isHidden !== 'undefined'
            ? !this.props.isHidden
            : false
        }
      >
        <Subtitle>
          Authorize calls
          {this.state.error ? (
            <Tag isColor="danger" isPulled="right">
              {this.state.error}
            </Tag>
          ) : (
            <Tag isColor="info" isPulled="right">
              Log in with any user credentials
            </Tag>
          )}
        </Subtitle>
        <form onSubmit={this.submitLogin}>
          {fields.map(field => (
            <Field key={i++}>
              <Input
                type={field.type}
                name={field.name}
                placeholder={field.name}
              />
            </Field>
          ))}
          <br />
          <GoButton />
        </form>
      </Column>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

function mapStateToProps(state) {
  return {
    isHidden: state.ui.isHidden
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);
