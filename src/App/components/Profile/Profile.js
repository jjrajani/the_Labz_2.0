// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Utils
// import { withRouter } from 'react-router-dom';
import withProfile from '../../hoc/withProfile';

class Profile extends Component {
  render() {
    // console.log('profile props', this.props);
    return <div>Profile</div>;
  }
}

Profile.PropTypes = {
  /* withProfile props */
  profile: PropTypes.object.isRequired
};

export default withProfile(Profile);
