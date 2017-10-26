// Globals
import React, { Component } from 'react';

export default function withFormControls(ComposedComponent) {
  class FormControls extends Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {}
      };
    }
    setFormValues = values => {
      let propsForm = {};
      Object.assign(propsForm, values);
      this.setState({ form: propsForm });
    };
    handleChange = e => {
      let newFormState = this.state.form;
      newFormState[e.target.name] = e.target.value;
      this.setState({ form: newFormState });
    };
    cancelChanges = values => {
      this.setFormValues(values);
    };
    handleSubmit = (e, cb) => {
      e.preventDefault();
      cb(this.state.form);
      this.props.hideVisibility();
    };
    render() {
      return (
        <ComposedComponent
          form={this.state.form}
          setFormValues={this.setFormValues}
          handleChange={this.handleChange}
          cancelChanges={this.cancelChanges}
          handleSubmit={this.handleSubmit}
          {...this.props}
        />
      );
    }
  }
  return FormControls;
}
