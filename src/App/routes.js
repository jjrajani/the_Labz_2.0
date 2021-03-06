// Globals
import React from 'react';
import PropTypes from 'prop-types';
// utils
import history from './history';
import requireAuth from './hoc/requireAuth';
// Components
import { Router, Route } from 'react-router-dom';
import { Landing, Profile, Login, Nav, Artists, Workspace } from './components';

export const Routes = ({ auth }) => {
  return (
    <Router history={history}>
      <div className="main-content-wrapper container">
        <Nav auth={auth} />
        <div className="main-content">
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={requireAuth(Profile, auth)} />
          <Route exact path="/artist/:id" component={Profile} />
          <Route
            exact
            path="/workspace/:id"
            render={props => <Workspace auth={auth} />}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return <Login auth={auth} />;
            }}
          />
          <Route
            exact
            path="/artists"
            render={props => <Artists auth={auth} />}
          />
        </div>
      </div>
    </Router>
  );
};

Routes.PropTypes = {
  /* Component Props */
  auth: PropTypes.object.isRequired
};
