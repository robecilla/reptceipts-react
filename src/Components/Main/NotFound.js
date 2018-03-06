import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Column, Button } from 'bloomer';

const NotFound = () => (
  <Column
    className="is-fullheight"
    hasTextAlign="centered"
    style={{
      padding: '40px 20px',
      display: 'block'
    }}
  >
    <Title>Sorry! This page does not exist!</Title>
  </Column>
);
export default NotFound;
