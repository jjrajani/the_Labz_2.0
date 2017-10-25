// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Utils
import { withRouter } from 'react-router-dom';

class Project {
  constructor(props) {
    props = props || {};
    this.title = props.title || 'Untitled';
    this.comments = props.comments || [];
    this.promotedAudio = props.promotedAudio || '';
    this.collaborators = props.collaborators || [];
  }
}

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = { project: {} };
  }
  componentWillMount(props) {
    const { id } = this.props.match.params;
    id === 'new' ? this.initNew() : this.initExisting(id);
  }
  initExisting(id) {
    console.log('get existing workspace with id', id);
    this.setState({ project: new Project() });
  }
  initNew() {
    this.setState({ project: new Project() });
  }
  render() {
    console.log(this.state.project);
    return <div>Workspace</div>;
  }
}

Workspace.PropTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(Workspace);
