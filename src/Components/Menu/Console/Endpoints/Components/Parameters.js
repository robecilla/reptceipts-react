import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from '../../../../../Actions/config';
import { Field, FieldBody, Input, TextArea } from 'bloomer';

import GoButton from './GoButton';

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

class Parameters extends Component {
  constructor() {
    super();
    this.state = {
      cont: [],
      counter: 1
    };
    this.submitRequest = this.submitRequest.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  addItem(fields) {
    let nC = {};
    nC.id = this.state.counter;
    nC.items = fields;

    this.setState({
      cont: this.state.cont.concat(nC),
      counter: this.state.counter + 1
    });
  }

  clearItems() {
    let clear = [];
    this.setState({ cont: clear, counter: 1 });
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
          //delete receipt.user_id;
          qr = `https://chart.googleapis.com/chart?cht=qr&chl=${JSON.stringify(
            receipt,
            null,
            0
          )}&chs=300x300&chld=L|0"`;
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

    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('console_token');

    console.log(data);

    axios({
      method: method,
      url: ROOT_URL + url,
      data: data
    })
      .then(response => {
        console.log(response);
        if (qr) response.data.qr = qr;

        /* Passing result back to Endpoint.js */
        this.props.callbackParent(response.data);
      })
      .catch(err => {
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
    const { endpoint_id, params } = this.props;
    let i = 0;
    return (
      <form onSubmit={this.submitRequest}>
        {endpoint_id === 14 ? (
          <TextArea
            name="receipt_json"
            style={{
              height: '42em',
              maxHeight: '700px',
              fontSize: 'small',
              marginBottom: 15
            }}
            defaultValue={JSON.stringify(params[0], null, 4)}
          />
        ) : !isEmpty(params) ? (
          params.map(param => (
            <Field isHorizontal key={i++}>
              <FieldBody>
                <Input
                  type={param.type}
                  name={param.name}
                  placeholder={param.name}
                />
              </FieldBody>
            </Field>
          ))
        ) : (
          false
        )}
        <GoButton />
      </form>
    );
  }
}

export default Parameters;
