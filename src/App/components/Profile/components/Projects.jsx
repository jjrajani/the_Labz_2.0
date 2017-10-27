import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Projects extends Component {
  render() {
    console.log(this.props.projects);
    return (
      <div className="col-xs-12 projects list">
        <div className="sub-content-header">
          <h4>Projects</h4>
        </div>
      </div>
    );
  }
}

Projects.PropTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;
