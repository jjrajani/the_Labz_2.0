// Globals
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// HOC
import withFormControls from '../../hoc/withFormControls';
// Components
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class WorkspaceTitleInput extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      // Deep copy string so input inits controlled
      let title = nextProps.title.slice(0);
      this.props.setFormValues({ title });
    }
  }
  componentDidMount() {
    let titleInput = ReactDOM.findDOMNode(this.refs.title_input);
    let keyStoppedTimer = null;
    titleInput.addEventListener('keydown', () => {
      clearTimeout(keyStoppedTimer);
      keyStoppedTimer = setTimeout(() => {
        this.saveWorkspaceTitle();
      }, 700);
    });
  }
  saveWorkspaceTitle() {
    if (this.props.form.title !== '') {
      this.props.saveProject({ title: this.props.form.title });
    }
    if (this.props.form.title === '') {
      this.props.handleChange({
        target: { value: this.props.title, name: 'title' }
      });
    }
  }
  render() {
    return (
      <form>
        <FormGroup controlId={'workspaceTitle'}>
          <FormControl
            name="title"
            ref="title_input"
            onChange={this.props.handleChange}
            value={this.props.form.title}
          />
        </FormGroup>
      </form>
    );
  }
}

withFormControls.PropTypes = {
  /* Component Props */
  title: PropTypes.string.isRequired,
  saveProject: PropTypes.func.isRequired,
  /* withFormControls props */
  form: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  cancelChanges: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withFormControls(WorkspaceTitleInput);
