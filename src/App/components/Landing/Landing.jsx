// Globals
import React, { Component } from 'react';
// Assets
import logo from '../../../assets/logo.png';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="jumbotron">
          <img src={logo} alt="The Labs Logo" />
          <h1>The Labz</h1>
        </div>
      </div>
    );
  }
}

export default Landing;
