// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Utils
import withReactRouterBootstrapNav from '../../hoc/ReactRouterBootstrapNav';
// Components
import { Navbar } from 'react-bootstrap';
import Brand from './Brand/Brand';
import { AuthLinks, NoAuthLinks } from './Links';

class Nav extends Component {
  render() {
    return (
      <Navbar
        fixedTop
        expanded={this.props.isExpanded}
        onToggle={this.props.onToggle}
        onSelect={this.props.onSelect}
        id="main-nav-bar"
      >
        <Navbar.Header>
          <Brand text={'The Labz'} onSelect={this.props.onSelect} />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse id="links">
          <AuthLinks auth={this.props.auth} onSelect={this.props.onSelect} />
          <NoAuthLinks onSelect={this.props.onSelect} />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Nav.PropTypes = {
  /* Component Props */
  auth: PropTypes.object.isRequired,
  /* withReactRouterBootstrapNav Props (also carries withRouter props) */
  onSelect: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired
};
export default withReactRouterBootstrapNav(Nav);
