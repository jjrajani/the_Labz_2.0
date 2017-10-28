import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { submitComment } from '../../../../../../api/comments';

class TextCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isTouched: false,
      hasError: false
    };
  }
  onSubmit = async e => {
    e.preventDefault();
    if (this.getValidationState() !== 'error' && this.state.isTouched) {
      this.setState({ hasError: false });
      const comment = await submitComment(
        'text',
        this.props.profile._id,
        this.props.match.params.id,
        this.state.text
      );
      this.props.addComment(comment);
      this.props.close();
    } else {
      this.setState({ hasError: true });
    }
  };
  onChange = e => {
    if (e.target.value.trim().length > 0) {
      this.setState({ text: e.target.value, isTouched: true, hasError: false });
    } else {
      this.setState({ text: e.target.value, isTouched: true, hasError: true });
    }
  };
  getValidationState = () => {
    const isTouched = this.state.isTouched;
    const length = this.state.text.trim().length;
    if (length === 0 && isTouched) {
      return 'error';
    } else if (length > 0 && isTouched) {
      return 'success';
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup
          key={'text_comment'}
          controlId={'text_comment'}
          validationState={this.getValidationState()}
          className={this.state.hasError ? 'has-error' : ''}
        >
          <FormControl
            onChange={this.onChange}
            value={this.state.text}
            ref="textComment"
          />
          <FormControl.Feedback
            className={this.state.hasError ? 'glyphicon-remove' : ''}
          />
        </FormGroup>
        {this.state.hasError && <HelpBlock>Please enter a comment.</HelpBlock>}
        <Button className="btn btn-primary" type="submit">
          Comment
        </Button>
      </form>
    );
  }
}

TextCommentForm.PropTypes = {
  /* Component Props */
  profile: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  /* withROuter Props */
  match: PropTypes.object.isRequired
};

export default withRouter(TextCommentForm);
