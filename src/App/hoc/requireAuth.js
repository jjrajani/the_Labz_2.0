// Globals
import React, { Component } from 'react';
// Utils
import history from '../history';

export default function(ComposedComponent, auth) {
  class Authentication extends Component {
    componentWillMount() {
      const isAuthenticated = auth.isAuthenticated();
      if (!isAuthenticated) {
        console.log('no auth!');
        history.push('/');
      }
    }
    componentWillUpdate() {
      // if next props not authed redirect home
      const isAuthenticated = auth.isAuthenticated();
      if (!isAuthenticated) {
        console.log('no auth!');
        history.push('/');
      }
    }
    render() {
      const isAuthenticated = auth.isAuthenticated();
      return isAuthenticated ? (
        <ComposedComponent {...this.props} auth={auth} />
      ) : null;
    }
  }

  return Authentication;
}
