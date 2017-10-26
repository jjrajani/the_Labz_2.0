// Gloabls
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// API Services
import { fetchUsers } from '../../../api/users';
// Utils
import withProfile from '../../hoc/withProfile';

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      profileId: ''
    };
  }
  componentWillReceiveProps = async nextProps => {
    const users = await fetchUsers();
    if (nextProps.profile._id !== this.state.profileId) {
      this.setFilteredArtists(users, nextProps.profile._id);
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
    // console.log('artists', this.state.artists);
    return <div>Artists</div>;
  }
}

Artists.PropTypes = {
  /* withProfile props */
  profile: PropTypes.object.isRequired
};

export default withProfile(Artists);
