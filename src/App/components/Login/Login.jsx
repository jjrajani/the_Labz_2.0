// Globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Utils
import { withRouter } from 'react-router-dom';
// Assets
import loading from './loading.svg';

const handleAuthentication = props => {
  if (/access_token|id_token|error/.test(props.location.hash)) {
    props.auth.handleAuthentication();
  }
};

class Login extends Component {
  componentWillMount() {
    handleAuthentication(this.props);
  }
  render() {
    return (
      <div id="loading">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

Login.PropTypes = {
  /* Component Props */
  auth: PropTypes.object.isRequired,
  /* withRouter Props */
  history: PropTypes.object.isRequired
};

export default withRouter(Login);
