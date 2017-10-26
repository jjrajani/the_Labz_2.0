// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import { Nav, NavDropdown } from 'react-bootstrap';
// HOC
import WithProfile from '../../../hoc/WithProfile';

class AuthLinks extends WithProfile {
  constructor(props) {
    super(props);
    /*
      highjack NavDropdown open, active, and toggle
      so we can apply appropriate
      profile-dropdown-wrapper class
    */
    this.state = {
      profile: {},
      open: false,
      active: false
    };
  }
  toggle = () => {
    this.setState({ open: !this.state.open, active: !this.state.active });
  };
  onSelect = route => {
    this.toggle();
    this.props.onSelect(route);
  };
  render() {
    const { onSelect, auth } = this.props;
    const { profile } = this.state;
    const { isAuthenticated, authProfile } = auth;
    return isAuthenticated() && authProfile ? (
      <Nav
        pullRight
        className={`profile-dropdown-wrapper ${this.state.open ? 'open' : ''}`}
      >
        <img
          className={`profile-dropdown-img`}
          src={profile.avatar}
          alt={`${profile.nickname}'s avatar`}
          onClick={onSelect.bind(this, '/profile')}
        />
        <NavDropdown
          open={this.state.open}
          active={this.state.active}
          onToggle={this.toggle}
          eventKey={1}
          title={''}
          id={`profile-dropdown`}
        >
          <li
            role="presentation"
            onClick={this.onSelect.bind(this, '/profile')}
          >
            <a className="link">Profile</a>
          </li>
          <li role="presentation" onClick={auth.logout}>
            <a className="link">Logout</a>
          </li>
        </NavDropdown>
      </Nav>
    ) : (
      <Nav pullRight>
        <li role="presentation" onClick={auth.login}>
          <a className="link">Login</a>
        </li>
      </Nav>
    );
  }
}

AuthLinks.PropTypes = {
  /* Component Props */
  onSelect: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
export default AuthLinks;
