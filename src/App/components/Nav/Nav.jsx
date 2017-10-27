// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Utils
import withReactRouterBootstrapNav from '../../hoc/withReactRouterBootstrapNav';
// Components
import { Navbar } from 'react-bootstrap';
import Brand from './Brand/Brand';
import { AuthLinks, NoAuthLinks } from './Links';

const Nav = ({ auth, isExpanded, onToggle, onSelect, closeNav }) => (
  <Navbar
    fixedTop
    expanded={isExpanded}
    onToggle={onToggle}
    onSelect={onSelect}
    id="main-nav-bar"
  >
    <Navbar.Header>
      <Brand text={'The Labz'} onSelect={closeNav} />
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse id="links">
      <AuthLinks auth={auth} onSelect={onSelect} />
      <NoAuthLinks onSelect={onSelect} />
    </Navbar.Collapse>
  </Navbar>
);

Nav.PropTypes = {
  /* Component Props */
  auth: PropTypes.object.isRequired,
  /* withReactRouterBootstrapNav Props (also carries withRouter props) */
  onSelect: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired
};
export default withReactRouterBootstrapNav(Nav);
