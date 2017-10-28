import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentsList extends Component {
  render() {
    return (
      <div>
        {this.props.comments.map((c, i) => {
          return (
            <div key={`comment-list-${i}`}>
              <img
                style={{ width: '50px', height: '50px' }}
                src={c.avatar}
                alt={`${c.nickname}'s avatar`}
              />
              <p>{c.commentor}</p>
              <p>{c.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
CommentsList.PropTypes = {
  /* Component Props */
  comments: PropTypes.array.isRequired
};

export default CommentsList;
