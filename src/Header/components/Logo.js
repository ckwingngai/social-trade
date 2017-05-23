import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div id="header-logo" className="logo-bg">
        <a href="index.html" className="logo-content-big" title="MonarchUI">
        Monarch <i>UI</i>
        <span>The perfect solution for user interfaces</span>
        </a>
        <a href="index.html" className="logo-content-small" title="MonarchUI">
        Monarch <i>UI</i>
        <span>The perfect solution for user interfaces</span>
        </a>
        <a id="close-sidebar" href="#" title="Close sidebar">
        <i className="glyph-icon icon-angle-left"></i>
        </a>
      </div>
    );
  }
}

export default Logo;
