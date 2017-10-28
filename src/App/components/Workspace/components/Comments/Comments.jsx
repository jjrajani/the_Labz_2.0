import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SegmentForm from './SegmentForm';
import CommentForm from './CommentForm';
import { fetchComments } from '../../../../../api/comments';
import CommentListFilters from './components/CommentListFilters';
import CommentsList from './components/CommentsList';
import CommentsFormModals from './components/CommentsFormModals';
// Libraries
import { commentsFilterInput, filterByKeys } from './commentsFilterMeta';
// Services
import filterService from '../../../../utils/filter_service';
// Comments
//  - can filter by: has audio, has text, is segment, all, commentor, text
// Collaborators
//  - can filter by: name

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      filteredComments: []
    };
  }
  componentDidMount = async () => {
    const comments = await fetchComments(this.props.match.params.id);
    this.setState({ comments, filteredComments: comments });
  };
  addComment = comment => {
    let comments = this.state.comments;
    comments.unshift(comment);
    this.setState({ comments });
  };

  filterComments = filteredComments => {
    this.setState({ filteredComments });
  };
  filterCommentsByText = filter => {
    let filteredComments = filterService.filter(
      this.state.comments,
      filter,
      filterByKeys
    );
    this.setState({ filteredComments });
  };
  render() {
    return (
      <div className="col-xs-12">
        <div className="sub-content-header">
          <h3>Comments</h3>
          <CommentListFilters
            filterComments={this.filterComments}
            comments={this.state.comments}
            filterCommentsByText={this.filterCommentsByText}
          />
          <CommentsFormModals
            auth={this.props.auth}
            profile={this.props.profile}
            addComment={this.addComment}
          />
        </div>
        <CommentsList comments={this.state.filteredComments} />
      </div>
    );
  }
}

CommentList.PropTypes = {
  /* Component Props */
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  /* withRouter Props */
  match: PropTypes.object.isRequired
};

export default withRouter(CommentList);
