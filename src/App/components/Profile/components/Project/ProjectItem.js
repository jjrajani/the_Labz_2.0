// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Utils
import { withRouter } from 'react-router-dom';

class Projects extends Component {
  render() {
    const { project, history } = this.props;
    return (
      <div
        className="col-xs-12 project list-item"
        onClick={() => history.push(`/workspace/${project._id}`)}
      >
        <p>{project.title}</p>
      </div>
    );
  }
}

Projects.PropTypes = {
  /* Component Props */
  project: PropTypes.object.isRequired,
  /* withRouter Props */
  history: PropTypes.object.isRequired
};

export default withRouter(Projects);
