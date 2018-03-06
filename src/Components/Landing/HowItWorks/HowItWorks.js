import React, { Component } from 'react';
// Components
import {
  Title,
  Subtitle,
  HeroBody,
  Columns,
  Column,
  Box,
  Content
} from 'bloomer';
import mock1 from '../../../Assets/img/mock1.png';

const mockStyle = {
  maxWidth: '48%',
  margin: '30px 20px'
};

class HowItWorks extends Component {
  render() {
    return (
      <HeroBody
        id="howitworks"
        style={{
          height: '100vh',
          backgroundColor: '#ffdd57',
          color: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <Columns isMultiline>
          <Column isSize={12} hasTextAlign="centered">
            <Title> How it works </Title>
          </Column>
          <Column hasTextAlign="centered">
            <img src={mock1} style={mockStyle} />
            <Content>
              <Title isSize={5}>GET</Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                lobortis arcu vitae egestas faucibus. Integer rutrum felis
                justo, ut convallis ante dictum vel.
              </p>
            </Content>
          </Column>
          <Column hasTextAlign="centered">
            <img src={mock1} style={mockStyle} />
            <Content>
              <Title isSize={5}>MANAGE</Title>
              <p>
                Aenean sagittis placerat eros. In mauris massa, congue id turpis
                ut, suscipit sodales erat. Donec quis facilisis dolor, eu
                pellentesque orci. Nam quis gravida ipsum, vel luctus felis.{' '}
              </p>
            </Content>
          </Column>
          <Column hasTextAlign="centered">
            <img src={mock1} style={mockStyle} />
            <Content>
              <Title isSize={5}>REDEEM</Title>
              <p>
                Etiam lobortis erat venenatis, vehicula libero sed, congue
                ipsum. Mauris tempor, tortor at gravida pretium, leo elit
                placerat nulla, sed malesuada mi felis id tellus.
              </p>
            </Content>
          </Column>
        </Columns>
      </HeroBody>
    );
  }
}

export default HowItWorks;
