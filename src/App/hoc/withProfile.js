// Globals
import React, { Component } from 'react';

export default function withProfile(ComposedComponent) {
  class Profile extends Component {
    componentWillMount() {
      this.setState({ profile: {} });
      if (this.props.auth.isAuthenticated()) {
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile });
          });
        } else {
          this.setState({ profile: userProfile });
        }
      }
    }
    componentWillUpdate = (nextProps, nextState) => {
      if (
        nextProps.auth.isAuthenticated() &&
        !nextProps.auth.userProfile &&
        Object.keys(this.state.profile).length === 0
      ) {
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile });
          });
        } else {
          this.setState({ profile: userProfile });
        }
      }
    };
    render() {
      return <ComposedComponent profile={this.state.profile} {...this.props} />;
    }
  }
  return Profile;
}
