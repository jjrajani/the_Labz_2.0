// Globals
import { Component } from 'react';
// Services
import profileService from '../utils/profile_service';
import { fetchUser } from '../../api/users';
import history from '../history';

class WithProfile extends Component {
  componentWillMount = async () => {
    if (
      history.location.pathname.includes('artist') &&
      this.state.profile._id !== history.location.pathname.split('/')[2]
    ) {
      let artistId = history.location.pathname.split('/')[2];
      this.fetchArtist(artistId);
    } else {
      if (!this.state.profile && this.props.auth.isAuthenticated()) {
        this.fetchProfile();
      }
      const profile = await profileService.fetchProfile(this.props.auth);
      this.setState({ profile });
    }
  };
  componentWillUpdate = async () => {
    if (Object.keys(this.state.profile).length === 0) {
      const profile = await profileService.fetchProfile(this.props.auth);
      this.setState({ profile });
    }
  };

  // componentDidMount = () => {
  //   if (!this.state.profile && this.props.auth.isAuthenticated()) {
  //     this.fetchProfile();
  //   }
  // };
  fetchArtist = async artistId => {
    let artist = await fetchUser(artistId);
    this.setState({ artist });
  };
  fetchProfile = async () => {
    const profile = await profileService.fetchProfile(this.props.auth);
    this.setState({ profile });
  };
}

export default WithProfile;
