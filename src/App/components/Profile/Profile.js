// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Components
import Bio from './Bio/Bio';
// HOC
import WithProfile from '../../hoc/WithProfile';

class Profile extends WithProfile {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }
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
