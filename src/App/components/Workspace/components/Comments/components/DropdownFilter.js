import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const filterTypes = [
  { type: 'all', dropdownText: 'Show All' },
  { type: 'audio', dropdownText: 'Has Audio' },
  { type: 'text', dropdownText: 'Has Text' },
  { type: 'segment', dropdownText: 'Is Segment' }
];

class DropdownFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownText: 'Show All'
    };
  }
  filterHasAudio = () => {
    const filteredComments = this.props.comments.filter(c => {
      return c.audio.length !== 0;
    });
    this.setState({ dropdownText: 'Has Audio' });
    return filteredComments;
  };
  filterHasText = () => {
    const filteredComments = this.props.comments.filter(c => {
      return c.text.length !== 0;
    });
    this.setState({ dropdownText: 'Has Text' });
    return filteredComments;
  };
  filterIsSegment = () => {
    console.log('is segment');
    this.setState({ dropdownText: 'Is Segment' });
    return this.props.comments;
  };
  filterComments = filter => {
    switch (filter) {
      case 'audio': {
        console.log('filter comments', filter);
        let filteredComments = this.filterHasAudio();
        this.props.filterComments(filteredComments);
        break;
      }
      case 'text': {
        let filteredComments = this.filterHasText();
        this.props.filterComments(filteredComments);
        break;
      }
      case 'segment': {
        let filteredComments = this.filterIsSegment();
        this.props.filterComments(filteredComments);
        break;
      }
      default: {
        this.setState({ dropdownText: 'Show All' });
        this.props.filterComments(this.props.comments);
        break;
      }
    }
  };

  render() {
    return (
      <DropdownButton title={this.state.dropdownText} id="bg-nested-dropdown">
        {filterTypes.map(f => {
          return (
            <MenuItem
              eventKey="1"
              key={f.dropdownText}
              onClick={this.filterComments.bind(this, f.type)}
            >
              {f.dropdownText}
            </MenuItem>
          );
        })}
      </DropdownButton>
    );
  }
}

DropdownFilter.PropTypes = {
  filterComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

export default DropdownFilter;
