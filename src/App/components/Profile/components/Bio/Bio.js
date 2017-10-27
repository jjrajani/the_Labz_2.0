// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Services
import { updateUser } from '../../../../../api/users';
// Utils
import withVisibilityToggle from '../../../../hoc/withVisibilityToggle';
import withFormControls from '../../../../hoc/withFormControls';

// Components
import EditForm from './EditForm';
import Details from './Details';

class Bio extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.form._id !== nextProps.profile._id) {
      this.props.setFormValues(nextProps.profile);
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(e, updateUser);
    this.props.hideVisibility();
  };
  cancelChanges = e => {
    e.preventDefault();
    this.props.cancelChanges(this.props.profile);
    this.props.hideVisibility();
  };
  render() {
    const { profile, visible, toggleVisibility, form } = this.props;
    return (
      <div className="col-xs-12 col-sm-3 bio">
        <img src={profile.avatar} alt={'profile avatar'} />
        {visible && (
          <EditForm
            profile={this.props.form}
            handleChange={this.props.handleChange}
            handleSubmit={this.handleSubmit}
            cancelChanges={this.cancelChanges}
          />
        )}
        {!visible && (
          <Details toggleVisibility={toggleVisibility} profile={form} />
        )}
      </div>
    );
  }
}

Bio.PropTypes = {
  /* component props */
  profile: PropTypes.object.isRequired,
  /* withVisibilityToggle props */
  toggleVisibility: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  hideVisibility: PropTypes.func.isRequired,
  /* withFormControls props */
  form: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  cancelChanges: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withVisibilityToggle(withFormControls(Bio));
