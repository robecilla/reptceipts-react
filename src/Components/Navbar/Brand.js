import React, { Component } from 'react';
import { NavbarBrand, NavbarItem, NavbarBurger } from 'bloomer';
import { NavLink } from 'react-router-dom';

class Brand extends Component {
  constructor(props) {
    super();
    this.state = { isActiveBurger: props.isMenuOpen };
    // This binding is necessary to make `this` work in the callback
    this.onClickBurger = this.onClickBurger.bind(this);
  }

  onClickBurger() {
    const newState = !this.state.isActiveBurger;
    this.setState({ isActiveBurger: newState }); // we update our state
    this.props.callbackParent(newState); // we notify our parent
  }

  render() {
    return (
      <NavbarBrand>
        <NavbarItem>
          <NavLink style={{ marginRight: '15px' }} to="/">
            <span
              style={{
                fontFamily: 'Ubuntu, sans-serif',
                fontSize: '30px',
                color: '#363636'
              }}
            >
              reptceipts
            </span>
          </NavLink>
          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDk3LDMwMWM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di0zMGMwLTU3Ljg5Ny00Ny4xMDItMTA1LTEwNS0xMDVoLTc4LjUwOUMzMjEuNTIzLDExNi44MDgsMjkxLjIyLDkxLDI1NSw5MSAgICBjLTI0LjUwOCwwLTQ2LjMwNSwxMS44MTgtNjAsMzAuMDUyQzE4MS4zMDYsMTAyLjgxOCwxNTkuNTA4LDkxLDEzNSw5MWMtMzkuNjg3LDAtNzIuMjU0LDMwLjk5MS03NC44MTgsNzAuMDQxICAgIEMyMy43OTksMTc4LjIyNiwwLDIxNS4xNDUsMCwyNTZ2NjAuMTEyQzAsMzczLjk0NSw0Ni45OTgsNDIwLjk5OSwxMDQuNzY2LDQyMWgzMzQuMTU5YzM5LjgyOSwwLDczLjk0OS0zMi4yMjksNzMuMDM1LTc1LjI4MiAgICBjLTAuMTIzLTUuOTcxLTMuNzc2LTExLjMtOS4zMDItMTMuNTY3Yy0yLjczOC0xLjEyNS0zLjY3NS0xLjEyNS05Ljc2My0xLjEyOEw0ODIsMzMxLjAyVjMwMUg0OTd6IE0xMzUsMjcxICAgIGMtMjQuODEzLDAtNDUsMjAuMTg3LTQ1LDQ1czIwLjE4Nyw0NC45LDQ1LDQ0LjljMy4xMjQsMCwyNzMuOTA4LDAsMzQ0Ljk2MSwwLjAxOEM0NzQuNTMsMzc3Ljk4Nyw0NTguNTA5LDM5MSw0MzguOTI1LDM5MUgxMDQuNzY3ICAgIEM2My41NCwzOTAuOTk5LDMwLDM1Ny40MDQsMzAsMzE2LjExMlYyNTZjMC0zMS43MzksMjAuMDkzLTYwLjE2Niw0OS45OTktNzAuNzM2YzcuMDAzLTIuNDc1LDExLjAwMS05LjYyLDkuNzY3LTE2LjcgICAgQzg5LjkxLDE2Ny43MjksOTAsMTY2Ljg3Niw5MCwxNjZjMC0yNC44MTMsMjAuMTg3LTQ1LDQ1LTQ1czQ1LDIwLjE4Nyw0NSw0NWMwLDguMjg0LDYuNzE2LDE1LDE1LDE1czE1LTYuNzE2LDE1LTE1ICAgIGMwLTI0LjgxMywyMC4xODctNDUsNDUtNDVzNDUsMjAuMTg3LDQ1LDQ1YzAsOC4yODQsNi43MTYsMTUsMTUsMTVoOTJjNDEuMzU1LDAsNzUsMzMuNjQ1LDc1LDc1djE1SDEzNXogTTQ1MiwzMDF2MzAuMDE0ICAgIGwtMTEuNjItMC4wMDJINDIyVjMwMUg0NTJ6IE0zOTIsMzAxdjMwLjAwOWwtMzItMC4wMDFWMzAxSDM5MnogTTMzMCwzMDF2MzAuMDA3bC0zMC0wLjAwMVYzMDFIMzMweiBNMjcwLDMwMXYzMC4wMDVsLTMwLTAuMDAxICAgIFYzMDFIMjcweiBNMjEwLDMwMXYzMC4wMDNsLTMwLTAuMDAxVjMwMUgyMTB6IE0xNTAsMzAxdjMwaC0xNWMtOC4yNzEsMC0xNS02LjcyOS0xNS0xNXM2LjcyOS0xNSwxNS0xNUgxNTB6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSIxMzUiIGN5PSIxNjYiIHI9IjE1IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSIyNTUiIGN5PSIxNjYiIHI9IjE1IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDIyLDIxMWgtMTVjLTguMjg0LDAtMTUsNi43MTYtMTUsMTVzNi43MTYsMTUsMTUsMTVoMTVjOC4yODQsMCwxNS02LjcxNiwxNS0xNVM0MzAuMjg1LDIxMSw0MjIsMjExeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
        </NavbarItem>
        <NavbarBurger
          isActive={this.state.isActiveBurger}
          onClick={this.onClickBurger}
        />
      </NavbarBrand>
    );
  }
}

export default Brand;
