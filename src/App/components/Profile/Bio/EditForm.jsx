import React from 'react';
import PropTypes from 'prop-types';

const fields = [
  { label: 'Nickname', type: 'text', name: 'nickname' },
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'Website', type: 'website', name: 'website' },
  { label: 'Description', type: 'textarea', name: 'description' }
];

const BioEditForm = ({
  profile,
  handleChange,
  handleSubmit,
  cancelChanges
}) => {
  return (
    <form onSubmit={handleSubmit.bind(this)}>
      {fields.map(f => {
        return (
          <fieldset key={f.name}>
            <label>{f.label}</label>
            {f.type !== 'textarea' ? (
              <input
                type={f.type}
                name={f.name}
                value={profile[f.name]}
                onChange={handleChange.bind(this)}
              />
            ) : (
              <textarea
                name={f.name}
                value={profile[f.name]}
                onChange={handleChange.bind(this)}
              />
            )}
          </fieldset>
        );
      })}
      <div className="buttons">
        <button className="btn btn-danger" onClick={cancelChanges}>
          Discard
        </button>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

BioEditForm.PropTypes = {
  profile: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  cancelChanges: PropTypes.func.isRequired
};

export default BioEditForm;
