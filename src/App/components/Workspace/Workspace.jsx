// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Utils
import { withRouter } from 'react-router-dom';
// HOC
import WithWorkspaceAndProfile from '../../hoc/WithWorkspaceAndProfile';
// Components
import WorkspaceTitleInput from './WorkspaceTitleInput';
import WorkspaceNavUtils from './WorkspaceNavUtils';
import Visualizer from '../Visualizer/Visualizer';
import Comments from './components/Comments';
// Services
import { saveWorkspace, fetchWorkspace } from '../../../api/workspace';
// Constructors
import Project from './ProjectClass';

class Workspace extends WithWorkspaceAndProfile {
  constructor(props) {
    super(props);
    this.state = { project: {}, profile: {} };
  }
  initExisting = async id => {
    let existingWorkspace = await fetchWorkspace(id);
    this.setState({ project: existingWorkspace });
  };
  initNew = () => {
    this.setState({ project: new Project({ userId: this.state.profile._id }) });
  };
  saveProject = async values => {
    let savedProject = await saveWorkspace(this.state.project, values);
    this.props.history.push(`/workspace/${savedProject._id}`);
  };
  render() {
    console.log('workspace', this.state);
    return (
      <div id="workspace" className="row">
        <div className="col-xs-12 main-content-header">
          <WorkspaceTitleInput
            saveProject={this.saveProject}
            title={this.state.project.title}
          />
          <WorkspaceNavUtils />
          <Visualizer />
          <Comments />
        </div>
      </div>
    );
  }
}

Workspace.PropTypes = {
  /* Compnent Props */
  auth: PropTypes.object.isRequired,
  /* withRouter Props */
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Workspace);
