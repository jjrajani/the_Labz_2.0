// // Globals
// import React, { Component } from 'react';
// import { saveWorkspace, fetchWorkspace } from '../../api/workspace';
// import Project from '../components/Workspace/ProjectClass';
//
// export default function withWorkspaceFunctions(ComposedComponent) {
//   class WorkspaceFunctions extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { project: {} };
//     }
//     initExisting = async id => {
//       let existingWorkspace = await fetchWorkspace(id);
//       this.setState({ project: existingWorkspace });
//     };
//     initNew = () => {
//       this.setState({
//         project: new Project({ userId: this.state.profile._id })
//       });
//     };
//     saveProject = async values => {
//       let savedProject = await saveWorkspace(this.state.project, values);
//       this.props.history.push(`/workspace/${savedProject._id}`);
//     };
//     render() {
//       return (
//         <ComposedComponent
//           {...this.props}
//           initExisting={this.initExisting}
//           initNew={this.initNew}
//           saveProject={this.saveProject}
//         />
//       );
//     }
//   }
//   return WorkspaceFunctions;
// }
