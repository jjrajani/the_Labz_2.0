// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Components
import Bio from './components/Bio/Bio';
import ProjectsList from './components/Project/ProjectsList';
// HOC
import WithProfile from '../../hoc/WithProfile';
// Services
import filterService from '../../utils/filter_service';
import { fetchProjects } from '../../../api/workspace';
import { withRouter } from 'react-router-dom';
// Libraries
import { filterByKeys } from './components/Project/projectsFilterMeta';

class Profile extends WithProfile {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      artist: {},
      projects: [],
      filteredProjects: [],
      fetched: false
    };
  }
  componentDidUpdate = async () => {
    if (this.state.projects.length === 0 && this.state.fetched === false) {
      let projects = [];
      if (this.props.match.params.id) {
        projects = await fetchProjects(this.props.match.params.id);
      } else {
        projects = await fetchProjects(this.state.profile._id);
      }
      this.setState({ projects, fetched: true, filteredProjects: projects });
    }
  };
  filterProjects = filter => {
    let filteredProjects = filterService.filter(
      this.state.projects,
      filter,
      filterByKeys
    );
    this.setState({ filteredProjects });
  };
  render() {
    const profile = this.props.match.params.id
      ? this.state.artist
      : this.state.profile;
    return (
      <div id="profile" className="row">
        {this.state.profile && <Bio profile={profile} />}
        <ProjectsList
          filterProjects={this.filterProjects}
          projects={this.state.filteredProjects}
        />
      </div>
    );
  }
}

Profile.PropTypes = {
  /* requireAuth props (from route) */
  auth: PropTypes.object.isRequired,
  /* withRouter props */
  match: PropTypes.object.isRequired
};

export default withRouter(Profile);
