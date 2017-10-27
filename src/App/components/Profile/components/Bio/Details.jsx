// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Utils
import { withRouter } from 'react-router-dom';

const Details = ({ profile, toggleVisibility, match }) => {
  const isArtist = match.params.id ? true : false;
  return (
    <div className="details">
      <h2>
        {profile.nickname}
        {!isArtist && (
          <i
            style={{ color: 'red', cursor: 'pointer' }}
            className="fa fa-pencil"
            onClick={toggleVisibility}
          />
        )}
      </h2>
      {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
      {!profile.email && <p>Add your email</p>}
      {profile.website && <a href={profile.website}>{profile.website}</a>}
      {!profile.website && <p>Add your website</p>}
      <p>{profile.description || 'add a description'}</p>
    </div>
  );
};

Details.PropTypes = {
  profile: PropTypes.object.isRequired,
  /* withRouter Props */
  match: PropTypes.object.isRequired
};

export default withRouter(Details);
