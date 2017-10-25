import React, { Component } from 'react';
import { Routes } from './routes';
import auth from '../Auth/Auth';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Routes auth={auth} />
      </div>
    );
  }
}

export default App;
