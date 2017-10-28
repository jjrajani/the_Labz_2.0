// Globals
import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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
          <FormGroup key={f.name} controlId={f.name}>
            {f.label.length > 0 && <ControlLabel>{f.label}</ControlLabel>}
            <FormControl
              {...f}
              onChange={handleChange}
              value={profile[f.name]}
            />
          </FormGroup>
        );
      })}
      <div className="buttons">
        <Button className="btn btn-danger" onClick={cancelChanges}>
          Discard
        </Button>
        <Button className="btn btn-primary" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

BioEditForm.PropTypes = {
  /* Component Props */
  profile: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  cancelChanges: PropTypes.func.isRequired
};

export default BioEditForm;
