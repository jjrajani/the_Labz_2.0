// Gloabls
import React from 'react';
import PropTypes from 'prop-types';
// Components
import ArtistList from './ArtistList';
import Filter from '../Filter/Filter';
// Libraries
import { artistFilterInput, filterByKeys } from './artistsFilterMeta';
// HOC
import WithArtistsAndProfile from '../../hoc/WithArtistsAndProfile';
// Services
import filterService from '../../utils/filter_service';

class Artists extends WithArtistsAndProfile {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      filteredArtists: [],
      profileId: '',
      profile: {}
    };
  }
  filterUsers = (users, id) => {
    return users.filter(u => {
      return u._id !== id;
    });
  };
  filterArtists = filter => {
    let filteredArtists = filterService.filter(
      this.state.artists,
      filter,
      filterByKeys
    );
    this.setState({ filteredArtists });
  };
  render() {
    return (
      <div id="artists" className="row">
        <div className="col-xs-12 main-content-header">
          <h2>Artists</h2>
          <Filter
            filterOnInput={true}
            input={artistFilterInput}
            onSubmit={this.filterArtists}
          />
        </div>
        <ArtistList artists={this.state.filteredArtists} />
      </div>
    );
  }
}

Artists.PropTypes = {
  /* Component props */
  auth: PropTypes.object.isRequired
};

export default Artists;
