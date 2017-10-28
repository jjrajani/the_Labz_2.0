import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

// import Comments from './Comments';
// import Collaborators from './Collaborators';
// import { Button } from 'react-bootstrap';
// Comments
//  - can filter by: audio, text, segments, commentor, all
// Collaborators
//  - can filter by: name

class SegmentForm extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>segment form</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SegmentForm;
