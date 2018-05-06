import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Subtitle,
  Title,
  HeroBody,
  Columns,
  Column,
  Content,
  Image
} from 'bloomer';

import text from './text_nodes.json';
import mock from '../../../Assets/img/mock1.png';

class HowItWorks extends Component {
  render() {
    let i = 0;
    return (
      <HeroBody
        id="howitworks"
        style={{
          height: '100vh'
        }}
      >
        <Columns isMultiline>
          {text.map(t => (
            <Column
              isSize={12}
              key={i++}
              style={{
                background: 'rgb(250, 250, 250)',
                borderBottom: '1px solid rgb(234, 234, 234)',
                borderColor: 'rgb(234, 234, 234)'
              }}
            >
              <Columns>
                <Column>
                  <Content>
                    <Title style={{ margin: '20px 0px 50px 0px' }} isSize={4}>
                      {t.title}
                    </Title>
                    <Subtitle isSize={6}> {t.header}</Subtitle>
                    <ul style={{ fontSize: '14px' }}>
                      {t.bullets.map(b => <li key={i++}>{b}</li>)}
                    </ul>
                  </Content>
                </Column>
                <Column style={{ padding: '70' }}>
                  <Image src="https://via.placeholder.com/640x340" alt="mock" />
                </Column>
              </Columns>
            </Column>
          ))}
        </Columns>
      </HeroBody>
    );
  }
}

export default HowItWorks;
