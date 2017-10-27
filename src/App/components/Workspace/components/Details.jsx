import React, { Component } from 'react';
import Comments from './Comments';
import Collaborators from './Collaborators';
import { Button } from 'react-bootstrap';
// Comments
//  - can filter by: audio, text, segments, commentor, all
// Collaborators
//  - can filter by: name

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'comments'
    };
  }
  render() {
    return (
      <div className="col-xs-12 workspace-details">
        <h3>Details</h3>
        <div className="sub-nav">
          <Button
            bsStyle={
              this.state.activeTab === 'comments' ? 'primary' : 'default'
            }
            onClick={() => this.setState({ activeTab: 'comments' })}
          >
            Comments
          </Button>
          <Button
            bsStyle={
              this.state.activeTab === 'collaborators' ? 'primary' : 'default'
            }
            onClick={() => this.setState({ activeTab: 'collaborators' })}
          >
            Collaborators
          </Button>
        </div>
        {this.state.activeTab === 'comments' && <Comments />}
        {this.state.activeTab === 'collaborators' && <Collaborators />}
      </div>
    );
  }
}

export default Details;
