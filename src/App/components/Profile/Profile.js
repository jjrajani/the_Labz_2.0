// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Components
import Bio from './components/Bio/Bio';
import ProjectsList from './components/Project/ProjectsList';
// HOC
import WithProfile from '../../hoc/WithProfile';
// Services
import { fetchProjects } from '../../../api/workspace';

class Profile extends WithProfile {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projects: [],
      fetched: false
    };
  }
  componentDidUpdate = async () => {
    if (
      this.state.profile._id &&
      this.state.projects.length === 0 &&
      this.state.fetched === false
    ) {
      let projects = await fetchProjects(this.state.profile._id);
      this.setState({ projects, fetched: true });
    }
  };
  render() {
    return (
      <div id="profile" className="row">
        {this.state.profile && <Bio profile={this.state.profile} />}
        <ProjectsList projects={this.state.projects} />
      </div>
    );
  }
}

Profile.PropTypes = {
  /* requireAuth props (from route) */
  auth: PropTypes.object.isRequired
};

export default Profile;
