import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../../../../Filter/Filter';
import DropdownFilter from './DropdownFilter';
// Libraries
import { commentsFilterInput, filterByKeys } from '../commentsFilterMeta';
// Services
import filterService from '../../../../../utils/filter_service';
// Comments
//  - can filter by: has audio, has text, is segment, all, commentor, text
// Collaborators
//  - can filter by: name

class CommentListFilters extends Component {
  render() {
    return (
      <div>
        <p>Filter Comments</p>
        <DropdownFilter
          filterComments={this.props.filterComments}
          comments={this.props.comments}
        />
        <Filter
          filterOnInput={true}
          input={commentsFilterInput}
          onSubmit={this.props.filterCommentsByText}
        />
      </div>
    );
  }
}

CommentListFilters.PropTypes = {
  /* Component Props */
  filterComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  filterCommentsByText: PropTypes.func.isRequired
};

export default CommentListFilters;
