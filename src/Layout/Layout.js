import React, { Component } from 'react';
// import { Container } from 'bloomer';
import LoadingBar from 'react-redux-loading-bar';
import apk from '../Assets/apk/app-release.apk';

import { Notification } from 'bloomer';
import Navbar from '../Components/Navbar/Navbar';
import Main from '../Components/Main/Main';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (!isMobile) {
      return (
        <div>
          <Navbar />
          <LoadingBar style={{ backgroundColor: '#363636', height: '2px' }} />
          <Main />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <Notification isColor="info" style={{ margin: 30 }}>
            Mobile view is not currently supported!
            <br />
            <a href={apk} download>
              {' '}
              Download{' '}
            </a>{' '}
            the app!
          </Notification>
        </div>
      );
    }
  }
}

export default Layout;
