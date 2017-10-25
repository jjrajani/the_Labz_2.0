// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Nav } from 'react-bootstrap';

const NoAuthLinks = ({ onSelect }) => (
  <Nav pullRight>
    <li role="presentation" onClick={onSelect.bind(this, '/artists')}>
      <a className="link">Artists</a>
    </li>
    <li role="presentation" onClick={onSelect.bind(this, '/workspace/new')}>
      <a className="link">New Workspace</a>
    </li>
  </Nav>
);

NoAuthLinks.PropTypes = {
  /* Component Props */
  onSelect: PropTypes.func.isRequired
};
export default NoAuthLinks;
