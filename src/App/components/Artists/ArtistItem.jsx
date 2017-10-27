// Gloabls
import React from 'react';
import PropTypes from 'prop-types';

const ArtistItem = ({ artist }) => {
  return (
    <div className="row col-xs-12 col-sm-3 col-md-4 artist list-item">
      <img src={artist.avatar} alt={`${artist.nickname}'s avatar`} />
      <h3>{artist.nickname}</h3>
      <p>{artist.description}</p>
    </div>
  );
};

ArtistItem.PropTypes = {
  /* Component props */
  artist: PropTypes.object.isRequired
};

export default ArtistItem;
