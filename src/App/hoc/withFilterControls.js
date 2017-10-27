// Globals
import React, { Component } from 'react';

export default function withFilterControls(ComposedComponent) {
  class FilterControls extends Component {
    constructor(props) {
      super(props);
      this.state = { filter: '' };
    }
    onSumbit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state.filter);
    };
    onChange = e => {
      this.setState({ filter: e.target.value });
      if (this.props.filterOnInput) {
        this.props.onSubmit(e.target.value);
      }
    };
    clearFilter = () => {
      this.setState({ filter: '' });
      this.props.onSubmit('');
    };
    render() {
      return (
        <ComposedComponent
          onSumbit={this.onSumbit}
          onChange={this.onChange}
          clearFilter={this.clearFilter}
          filter={this.state.filter}
          {...this.props}
        />
      );
    }
  }
  return FilterControls;
}
