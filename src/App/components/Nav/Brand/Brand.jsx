// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Assets
import logo from '../../../../assets/logo.png';

const Brand = ({ text }) => {
  return (
    <Navbar.Brand>
      <img className="logo" src={logo} alt="The Labz Logo" />
      <Link to={'/'}>{text}</Link>
    </Navbar.Brand>
  );
};

Brand.PropTypes = {
  /* Component Props */
  text: PropTypes.string.isRequired
};

export default Brand;
