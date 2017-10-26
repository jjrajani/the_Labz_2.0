// Globals
import React, { Component } from 'react';

export default function withVisibilityToggle(ComposedComponent) {
  class VisibilityToggle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false
      };
    }
    toggleVisibility = () => {
      this.setState({ visible: !this.state.visible });
    };
    hideVisibility = () => {
      this.setState({ visible: false });
    };
    showVisibility = () => {
      this.setState({ visible: true });
    };
    render() {
      return (
        <ComposedComponent
          toggleVisibility={this.toggleVisibility}
          visible={this.state.visible}
          hideVisibility={this.hideVisibility}
          showVisibility={this.showVisibility}
          {...this.props}
        />
      );
    }
  }
  return VisibilityToggle;
}
