import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import ProjectItem from './ProjectItem';

class ProjectsList extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-9 projects list">
        <div className="sub-content-header">
          <h4>Projects</h4>
        </div>
        <div className="row">
          {this.props.projects.map(p => {
            return <ProjectItem project={p} key={p._id} />;
          })}
        </div>
      </div>
    );
  }
}

ProjectsList.PropTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectsList;
