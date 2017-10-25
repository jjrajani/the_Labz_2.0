// Globals
import { Component } from 'react';

export default class WindowClickEvents extends Component {
  constructor(props) {
    super(props);
    this.addListener = this.addListener.bind(this);
    this.listeners = [];
  }
  componentWillUnmount() {
    this.listeners.forEach(l => {
      window.removeEventListener(l, false);
    });
  }
  addListener = listeners => {
    listeners.forEach(l => {
      this.listeners.push(this[l.type](l));
    });
  };
  isInside(listener) {
    return window.addEventListener('click', e => {
      let element = document.getElementById(listener.parentNodeId);
      let isNotInside = e.target !== element && !element.contains(e.target);
      listener.callback(!isNotInside);
    });
  }
}
