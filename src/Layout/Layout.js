import React, { Component } from 'react';
// import { Container } from 'bloomer';
import LoadingBar from 'react-redux-loading-bar';

import Navbar from '../Components/Navbar/Navbar';
import Main from '../Components/Main/Main';

class Layout extends Component {
  render() {
    return (
      <div className="is-fullheight">
        <Navbar />
        <LoadingBar style={{ backgroundColor: '#363636', height: '2px' }} />
        <Main />
      </div>
    );
  }
}

export default Layout;
