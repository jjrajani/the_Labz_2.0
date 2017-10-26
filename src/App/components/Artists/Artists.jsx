// Gloabls
import React from 'react';
import PropTypes from 'prop-types';
// Components
import ArtistList from './ArtistList';

const Artists = ({ auth }) => (
  <div id="artists" className="row">
    <div className="col-xs-12">
      <h2>Artists</h2>
    </div>
    <ArtistList auth={auth} />
  </div>
);

Artists.PropTypes = {
  /* Component props */
  auth: PropTypes.object.isRequired
};

export default Artists;
