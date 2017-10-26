import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BioEditForm extends Component {
  render() {
    const { nickname, email, website, description } = this.props.profile;
    return (
      <form onSubmit={this.props.handleSubmit.bind(this)}>
        <fieldset>
          <label>Nickname</label>
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={this.props.handleChange.bind(this)}
          />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.props.handleChange.bind(this)}
          />
        </fieldset>
        <fieldset>
          <label>Website</label>
          <input
            type="website"
            name="website"
            value={website}
            onChange={this.props.handleChange.bind(this)}
          />
        </fieldset>
        <fieldset>
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={this.props.handleChange.bind(this)}
          />
        </fieldset>
        <div className="buttons">
          <button className="btn btn-danger" onClick={this.props.cancelChanges}>
            Discard
          </button>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}

BioEditForm.PropTypes = {
  profile: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  cancelChanges: PropTypes.func.isRequired
};
