import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import TextCommentForm from './Forms/TextCommentForm';
// import Comments from './Comments';
// import Collaborators from './Collaborators';
// import { Button } from 'react-bootstrap';
// Comments
//  - can filter by: audio, text, segments, commentor, all
// Collaborators
//  - can filter by: name

const commentTypes = [
  { type: 'text', dropdownText: 'Text Comment' },
  { type: 'upload_audio', dropdownText: 'Upload Audio' },
  { type: 'record_audio', dropdownText: 'Record Audio' }
];

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentType: 'text',
      dropdownText: 'Text Comment'
    };
  }
  toggleCommentType = (commentType, dropdownText) => {
    this.setState({ commentType, dropdownText });
  };
  clearModal = () => {
    this.setState({ commentType: '', dropdownText: 'Select Comment Type' });
    this.props.onHide();
  };
  render() {
    return (
      <Modal show={this.props.show} onHide={this.clearModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.state.dropdownText === 'Text Comment'
              ? 'Add Text Comment'
              : this.state.dropdownText}
          </Modal.Title>
          <DropdownButton
            title={this.state.dropdownText}
            id="bg-nested-dropdown"
          >
            {commentTypes.map(c => {
              return (
                <MenuItem
                  eventKey="1"
                  key={c.dropdownText}
                  onClick={this.toggleCommentType.bind(
                    this,
                    c.type,
                    c.dropdownText
                  )}
                >
                  {c.dropdownText}
                </MenuItem>
              );
            })}
          </DropdownButton>
        </Modal.Header>
        <Modal.Body>
          {this.state.commentType === 'text' && (
            <TextCommentForm
              profile={this.props.profile}
              close={this.clearModal}
              addComment={this.props.addComment}
            />
          )}
          {this.state.commentType === 'upload_audio' && <p>upload_audio</p>}
          {this.state.commentType === 'record_audio' && <p>Record Audio</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.clearModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

CommentForm.PropTypes = {
  profile: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};

export default CommentForm;
