// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Assets
import logo from '../../../../assets/logo.png';

const Brand = ({ text, onSelect }) => {
  return (
    <Navbar.Brand>
      <img className="logo" src={logo} alt="The Labz Logo" />
      <Link to={'/'} onClick={onSelect.bind(this, '/')}>
        {text}
      </Link>
    </Navbar.Brand>
  );
};

Brand.PropTypes = {
  /* Component Props */
  text: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Brand;
