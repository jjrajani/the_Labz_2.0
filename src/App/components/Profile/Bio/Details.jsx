// Globals
import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ profile }) => {
  return (
    <div className="details">
      <p>{profile.nickname}</p>
      <p>{profile.email || 'add your email'}</p>
      <p>{profile.website || 'add your website'}</p>
      <p>{profile.description || 'add a description'}</p>
    </div>
  );
};

Details.PropTypes = {
  profile: PropTypes.object.isRequired
};

export default Details;
