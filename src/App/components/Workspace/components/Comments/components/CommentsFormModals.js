import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import SegmentForm from '../SegmentForm';
import CommentForm from '../CommentForm';

class CommentsFormModals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalMode: null
    };
  }
  close = () => {
    this.setState({ showModal: false, modalMode: null });
  };
  open = modalMode => {
    this.setState({ showModal: true, modalMode });
  };
  addComment = comment => {
    this.close();
    this.props.addComment(comment);
  };
  render() {
    return (
      <div>
        {this.props.auth.isAuthenticated() && (
          <div className="sub-nav">
            <Button
              bsStyle="default"
              bsSize="small"
              onClick={() => this.open('comment_form')}
            >
              Add Comment
            </Button>
            <Button
              bsStyle="default"
              bsSize="small"
              onClick={() => this.open('segment_form')}
            >
              Add Segment
            </Button>
          </div>
        )}
        <CommentForm
          show={this.state.showModal && this.state.modalMode === 'comment_form'}
          onHide={this.close}
          profile={this.props.profile}
          addComment={this.addComment}
        />
        <SegmentForm
          show={this.state.showModal && this.state.modalMode === 'segment_form'}
          onHide={this.close}
        />
      </div>
    );
  }
}

CommentsFormModals.PropTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};

export default CommentsFormModals;
