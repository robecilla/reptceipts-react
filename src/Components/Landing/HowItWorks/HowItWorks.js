import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Title, HeroBody, Columns, Column, Content, Button } from 'bloomer';

import text from './text_nodes.json';

const mockStyle = {
  maxWidth: '48%',
  margin: '30px 20px'
};

class HowItWorks extends Component {
  render() {
    let i = 0;
    return (
      <HeroBody
        id="howitworks"
        style={{
          height: '100vh',
          backgroundColor: '#209cee',
          color: 'white'
        }}
      >
        <Columns isMultiline>
          <Column isSize={12} hasTextAlign="centered">
            <Title>How it works</Title>
          </Column>
          {text.map(t => (
            <Column hasTextAlign="centered" key={i++}>
              <img src={t.img.path} style={mockStyle} alt="mock" />
              <Content>
                <Title isSize={5}>{t.title}</Title>
                <p>{t.text}</p>
              </Content>
            </Column>
          ))}
        </Columns>
      </HeroBody>
    );
  }
}

export default HowItWorks;
