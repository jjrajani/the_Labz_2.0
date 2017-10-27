// Globals
import { Component } from 'react';
// Services
import profileService from '../utils/profile_service';

class WithProfile extends Component {
  componentWillMount = async () => {
    if (!this.state.profile && this.props.auth.isAuthenticated()) {
      this.fetchProfile();
    }
    const profile = await profileService.fetchProfile(this.props.auth);
    this.setState({ profile });
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
  fetchProfile = async () => {
    const profile = await profileService.fetchProfile(this.props.auth);
    this.setState({ profile });
  };
}

export default WithProfile;
