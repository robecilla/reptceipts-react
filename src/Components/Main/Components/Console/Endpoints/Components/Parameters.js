import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../../../../../Actions/User';

import axios from 'axios';
import { ROOT_URL } from '../../../../../../Actions/config';
import { Field, FieldBody, Input, TextArea, Control, Button } from 'bloomer';
import { isEmpty } from '../../../../../Helpers/helpers.js';

class Parameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: false,
      qr: false,
      textarea: ''
    };

    this.submitRequest = this.submitRequest.bind(this);
    this.setInput = this.setInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      textarea: this.props.params ? this.props.params[0] : false
    });
  }

  setInput() {
    this.setState({ inputValue: this.props.user.id });
  }

  generateQR(receipt) {
    return `https://chart.googleapis.com/chart?cht=qr&chl=${JSON.stringify(
      receipt,
      null,
      0
    )}&chs=300x300&chld=L|0"`;
  }

  handleClick() {
    this.props.callbackParent({
      code: 200,
      qr: this.generateQR(
        typeof this.state.textarea !== 'object'
          ? JSON.parse(this.state.textarea)
          : this.state.textarea
      )
    });
  }

  handleChange(e) {
    this.setState({ textarea: e.target.value });
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  submitRequest(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let url = this.props.url;
    let method = this.props.method;
    let qr;

    /* If an id is submitted, replace the value in the url */
    for (var pair of data.entries()) {
      let key = pair[0];
      let value = pair[1];

      if (key === 'id') {
        url = url.replace('{id}', value);
        data.delete('id');
      }

      if (key === 'receipt_json') {
        try {
          let receipt = JSON.parse(value);
          for (let val in receipt) {
            if (val === 'items') {
              receipt.items = JSON.stringify(receipt[val]);
            }
          }

          data = receipt;
          qr = this.generateQR(receipt);
          this.setState({ qr: qr });
        } catch (error) {
          console.log(error);
        }
      }
    }

    /* Workaround to fix PUT/PATCH methods in the API */
    if (method === 'PUT') {
      data.append('_method', 'PUT');
      method = 'POST';
    }

    axios({
      method: method,
      url: ROOT_URL + url,
      data: data,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then(response => {
        console.log(response);
        if (qr) response.data.qr = qr;
        /* Passing result back to Endpoint.js */
        this.props.callbackParent(response.data);
        /* If the request its either post a receipt or delete a receipt, update user details */
        if (this.props.endpoint_id === 14 || this.props.endpoint_id === 16)
          this.props.getUserReceipts();
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
        let error = {};
        if (err.response.status === 404) {
          error.code = err.response.status;
          error.response = err.response.statusText;
        } else {
          error.code = err.response.data.code;
          error.response = err.response.data.response;
        }

        /* Passing result back to Endpoint.js */
        this.props.callbackParent(error);
      });
  }

  render() {
    const { endpoint_id, params, url } = this.props;
    let i = 0;
    return (
      <form onSubmit={this.submitRequest}>
        {endpoint_id === 14 ? (
          <Control>
            <TextArea
              name="receipt_json"
              style={{
                height: '42em',
                maxHeight: '700px',
                fontSize: 'small',
                marginBottom: 15
              }}
              defaultValue={JSON.stringify(params[0], null, 4)}
              onChange={this.handleChange}
            />
          </Control>
        ) : !isEmpty(params) ? (
          params.map(param => (
            <Field isHorizontal key={i++}>
              <FieldBody>
                <Input
                  type={param.type}
                  name={param.name}
                  placeholder={param.name}
                  value={
                    this.state.inputValue &&
                    (param.name === 'id' || param.name === 'user_id')
                      ? this.state.inputValue
                      : ''
                  }
                  onChange={this.handleInputChange}
                />
                {(url === '/api/user/{id}' && param.name === 'id') ||
                param.name === 'user_id' ? (
                  <Button
                    isColor="info"
                    onClick={this.setInput}
                    style={{ width: 115, marginLeft: 20 }}
                  >
                    Me
                  </Button>
                ) : (
                  false
                )}
              </FieldBody>
            </Field>
          ))
        ) : (
          false
        )}
        <Field isHorizontal>
          <FieldBody>
            <Field isGrouped>
              <Control>
                <Button isColor="info" type="submit" style={{ width: 115 }}>
                  Try it
                </Button>
              </Control>
              <Control>
                {endpoint_id === 14 ? (
                  <Button isColor="dark" onClick={this.handleClick}>
                    Generate QR Code
                  </Button>
                ) : (
                  false
                )}
              </Control>
            </Field>
          </FieldBody>
        </Field>
      </form>
    );
  }
}

export default connect(null, userActions)(Parameters);
