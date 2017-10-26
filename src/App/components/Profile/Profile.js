// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Bio from './Bio/Bio';
// Services
import profileStore from './profileStore';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }
  componentWillMount = async () => {
    const profile = await profileStore.fetchProfile(this.props.auth);
    this.setState({ profile });
  };
  render() {
    return (
      <div id="profile" className="row">
        {this.state.profile && <Bio profile={this.state.profile} />}
      </div>
    );
  }
}

Profile.PropTypes = {
  /* requireAuth props (from route) */
  auth: PropTypes.object.isRequired
};

export default Profile;
