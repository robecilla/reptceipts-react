import React, { Component } from 'react';
import { Container } from 'bloomer';

import Navbar from '../Components/Navbar/Navbar';
import Main from '../Components/Main/Main';

class Layout extends Component {
  render() {
    return (
      <div className="is-fullheight">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default Layout;
