// Globals
import React from 'react';
// Utils
import { withRouter } from 'react-router-dom';
import WindowClickEvents from './windowClickEvents';

export default function withReactRouterBootstrapNav(ComposedComponent) {
  class ReactRouterBootstrapNav extends WindowClickEvents {
    constructor(props) {
      super(props);
      this.state = {
        expanded: false
      };
    }
    componentDidMount = () => {
      this.addListener([
        {
          type: 'isInside',
          parentNodeId: 'main-nav-bar',
          callback: this.toggleNav
        }
      ]);
    };
    toggleNav = isInside => {
      if (!isInside) {
        this.closeNav();
      }
    };
    onSelect = route => {
      this.onToggle();
      this.props.history.replace(route);
    };
    onToggle = () => {
      if (window.innerWidth > 767) {
        // lg screen
      } else {
        // sm screen
        this.setState({ expanded: !this.state.expanded });
      }
    };
    closeNav = () => {
      this.setState({ expanded: false });
    };
    render() {
      return (
        <ComposedComponent
          {...this.props}
          onSelect={this.onSelect}
          onToggle={this.onToggle}
          isExpanded={this.state.expanded}
          closeNav={this.closeNav}
        />
      );
    }
  }
  return withRouter(ReactRouterBootstrapNav);
}
