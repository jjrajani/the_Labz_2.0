// Gloabls
import React from 'react';
import PropTypes from 'prop-types';
// API Services
import { fetchUsers } from '../../../api/users';
// Utils
import ArtistItem from './ArtistItem';
// HOC
import WithProfile from '../../hoc/WithProfile';

class ArtistsList extends WithProfile {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      profileId: '',
      profile: {}
    };
  }
  componentWillUpdate = async () => {
    if (this.props.auth.isAuthenticated() && !this.state.profile._id) {
      let users = await fetchUsers();
      if (this.state.profile._id) {
        this.profileId = this.state.profile._id;
        users = this.filterUsers(users, this.state.profile._id);
      }
      this.setState({ artists: users });
    }
  };
  componentDidMount = async () => {
    if (!this.state.profile && this.props.auth.isAuthenticated()) {
      this.fetchProfile();
    }
    if (!this.props.auth.isAuthenticated()) {
      let users = await fetchUsers();
      this.setState({ artists: users });
    }
  };
  filterUsers = (users, id) => {
    return users.filter(u => {
      return u._id !== id;
    });
  };
  render() {
    // console.log('artists', this.state.artists);
    console.log('artists', this.state);
    const { artists } = this.state;
    return (
      <div className="col-xs-12 artist-list">
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
