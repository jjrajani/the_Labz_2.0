// Globals
import { Component } from 'react';

class WithProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }
  componentWillMount = async () => {
    const profile = await this.fetchProfile(this.props.auth);
    this.setState({ profile });
  };
  componentWillUpdate = async () => {
    if (!this.state.profile._id && this.props.auth.isAuthenticated()) {
      const profile = await this.fetchProfile(this.props.auth);
      this.setState({ profile });
    }
  };
  fetchProfile = async auth => {
    if (this.profile) {
      return this.profile;
    }
    return new Promise((res, rej) => {
      if (auth.isAuthenticated()) {
        const { userProfile, getProfile } = auth;
        if (!userProfile || Object.keys(userProfile).length === 0) {
          getProfile((err, profile) => {
            if (!err) {
              this.profile = profile;
              res(profile);
            } else {
              rej(err);
            }
          });
        } else {
          this.profile = userProfile;
          res(userProfile);
        }
      }
    });
  };
}

export default WithProfile;
