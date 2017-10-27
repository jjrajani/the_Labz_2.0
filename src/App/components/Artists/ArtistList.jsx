// Gloabls
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Utils
import ArtistItem from './ArtistItem';

class ArtistsList extends Component {
  render() {
    return (
      <div className="col-xs-12 artists list">
        {this.props.artists.map((a, i) => <ArtistItem artist={a} key={i} />)}
      </div>
    );
  }
}

ArtistsList.PropTypes = {
  /* component props */
  artists: PropTypes.array.isRequired
};

export default ArtistsList;
