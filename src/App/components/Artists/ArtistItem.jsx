// Gloabls
import React from 'react';
import PropTypes from 'prop-types';
// Utils
import { withRouter } from 'react-router-dom';

const ArtistItem = ({ artist, history }) => {
  return (
    <div
      onClick={() => history.push(`/artist/${artist._id}`)}
      className="row col-xs-12 col-sm-3 col-md-4 artist list-item"
    >
      <img src={artist.avatar} alt={`${artist.nickname}'s avatar`} />
      <h3>{artist.nickname}</h3>
      <p>{artist.name}</p>
      <p>{artist.email}</p>
      <p>{artist.website}</p>
      <p>{artist.latestProject.title}</p>
      <p>{artist.description}</p>
    </div>
  );
};

ArtistItem.PropTypes = {
  /* Component props */
  artist: PropTypes.object.isRequired,
  /* withRouter props */
  history: PropTypes.object.isRequired
};

export default withRouter(ArtistItem);
