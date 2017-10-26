// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Utils
import withProfile from '../../hoc/withProfile';
// Components
import Bio from './Bio/Bio';

class Profile extends Component {
  render() {
    const { profile } = this.props;
    const profileLoaded = Object.keys(profile).length > 0;
    return (
      <div className="profile row">
        {profileLoaded && (
          <div className="col-sm-12 col-md-4">
            <Bio profile={profile} />
          </div>
        )}
      </div>
    );
  }
}

Profile.PropTypes = {
  /* withProfile props */
  profile: PropTypes.object.isRequired,
  /* requireAuth props (from route) */
  auth: PropTypes.object.isRequired
};

export default withProfile(Profile);
