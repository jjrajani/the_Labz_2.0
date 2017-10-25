// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Utils
import withProfile from '../../../hoc/withProfile';
// Components
import { Nav, NavDropdown } from 'react-bootstrap';

class AuthLinks extends Component {
  constructor(props) {
    super(props);
    /*
      highjack NavDropdown open, active, and toggle
      so we can apply appropriate
      profile-dropdown-wrapper class
    */
    this.state = {
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
    const { profile, onSelect, auth } = this.props;
    const { isAuthenticated, userProfile } = auth;
    return isAuthenticated() && userProfile ? (
      <Nav
        pullRight
        className={`profile-dropdown-wrapper ${this.state.open ? 'open' : ''}`}
      >
        <img
          className={`profile-dropdown-img`}
          src={profile.picture}
          alt={`${userProfile.username}'s profile'`}
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
  auth: PropTypes.object.isRequired,
  /* withProfile Props */
  profile: PropTypes.object.isRequired
};
export default withProfile(AuthLinks);
