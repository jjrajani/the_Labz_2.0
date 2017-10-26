// Globals
import { Component } from 'react';
// Services
import profileStore from '../components/Profile/profileStore';

class WithProfile extends Component {
  componentWillMount = async () => {
    const profile = await profileStore.fetchProfile(this.props.auth);
    this.setState({ profile });
  };
  componentWillUpdate = async () => {
    if (Object.keys(this.state.profile).length === 0) {
      const profile = await profileStore.fetchProfile(this.props.auth);
      this.setState({ profile });
    }
  };
}

export default WithProfile;
