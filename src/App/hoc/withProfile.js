// Globals
import React, { Component } from 'react';

export default function withProfile(ComposedComponent) {
  class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = { profile: {} };
    }
    componentWillMount() {
      if (this.props.auth.isAuthenticated()) {
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile || Object.keys(userProfile).length === 0) {
          getProfile((err, profile) => {
            this.setState({ profile });
          });
        } else {
          this.setState({ profile: userProfile });
        }
      }
    }
    render() {
      return <ComposedComponent profile={this.state.profile} {...this.props} />;
    }
  }
  return Profile;
}
