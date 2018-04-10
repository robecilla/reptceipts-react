import React, { Component } from 'react';
// Components
import {
  Title,
  Column,
  Columns,
  Field,
  Control,
  Label,
  Input,
  Button
} from 'bloomer';

// function isEmpty(obj) {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) return false;
//   }
//   return true;
// }

/* Imports qrcodes dynamicaly */
// function importAll(r) {
//   let codes = {};
//   r.keys().map((item, index) => { codes[item.replace('./', '')] = r(item); });
//   return codes;
// }

// const codes = importAll(require.context('../../../../Assets/img/qr'));

class QRExamples extends Component {
  constructor() {
    super();
    this.state = {
      qr: false
    };
    this.generateQR = this.generateQR.bind(this);
  }

  generateQR(e) {
    e.preventDefault();
    const qrContent = new FormData(e.target).get('qrContent');
    let qr = `https://chart.googleapis.com/chart?cht=qr&chl=${qrContent}&chs=300x300&chld=L|0"`;
    this.setState({ qr: qr });
  }

  render() {
    return (
      <Column
        isSize={{ desktop: 10 }}
        className="is-fullheight"
        style={{ padding: '40px 20px' }}
      >
        <Columns>
          <Column>
            <Title isSize={3}>Example QR Codes</Title>
            <form onSubmit={this.generateQR}>
              <Field>
                <Label>Generate receipt</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="Minifed JSON .."
                    name="qrContent"
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button type="submit" isColor="info">
                    Generate
                  </Button>
                </Control>
              </Field>
            </form>
          </Column>
          <Column>
            {this.state.qr ? <img src={this.state.qr} alt="qr" /> : false}
          </Column>
        </Columns>
      </Column>
    );
  }
}

export default QRExamples;
