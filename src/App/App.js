import React from 'react';
import { Routes } from './routes';
import auth from '../Auth/Auth';

const App = () => (
  <div id="app">
    <Routes auth={auth} />
  </div>
);

export default App;
