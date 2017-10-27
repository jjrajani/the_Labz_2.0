// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
// HOC
import withFilterControls from '../../hoc/withFilterControls';

class Filter extends Component {
  fieldGroups = () => {
    const { input } = this.props;
    return (
      <FormGroup controlId={input.id}>
        {input.label.length > 0 && <ControlLabel>{input.label}</ControlLabel>}
        <FormControl
          {...input}
          onChange={this.props.onChange}
          value={this.props.filter}
        />
        {this.props.filter.trim().length > 0 && (
          <i className="fa fa-times" onClick={this.props.clearFilter} />
        )}
      </FormGroup>
    );
  };
  render() {
    return (
      <div className="filter">
        <form onSubmit={this.props.onSumbit}>
          {this.fieldGroups()}
          {!this.props.filterOnInput && <Button type="submit">Submit</Button>}
        </form>
      </div>
    );
  }
}

Filter.PropTypes = {
  /* Component Props*/
  input: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  filterOnInput: PropTypes.bool,
  /* withFilterControls Props */
  filter: PropTypes.string.isRequired,
  onSumbit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired
};

export default withFilterControls(Filter);
