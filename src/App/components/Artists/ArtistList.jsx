// Gloabls
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// API Services
import { fetchUsers } from '../../../api/users';
// Utils
import ArtistItem from './ArtistItem';
// Services
import profileStore from '../Profile/profileStore';

class ArtistsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      profileId: ''
    };
  }
  componentWillMount = async () => {
    const users = await fetchUsers();
    const profile = await profileStore.fetchProfile(this.props.auth);
    if (profile._id !== this.state.profileId) {
      this.setFilteredArtists(users, profile._id);
    } else {
      this.setState({ artists: users });
    }
  };
  setFilteredArtists = (users, id) => {
    let filteredUsers = users.filter(u => {
      return u._id !== id;
    });
    this.setState({ artists: filteredUsers });
  };
  render() {
    console.log('artists', this.state.artists);
    const { artists } = this.state;
    return (
      <div className="col-xs-12 artist-list">
        <h2>Artists List</h2>
        {artists.map((a, i) => <ArtistItem artist={a} key={i} />)}
      </div>
    );
  }
}

ArtistsList.PropTypes = {
  /* component props */
  auth: PropTypes.object.isRequired
};

export default ArtistsList;
