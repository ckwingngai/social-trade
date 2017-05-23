import React, { Component } from 'react';

class MobileNav extends Component {
  render() {
    return (
      <div id="mobile-navigation">
        <button id="nav-toggle" className="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span></span></button>
        <a href="index.html" className="logo-content-small" title="MonarchUI"></a>
      </div>
    );
  }
}

export default MobileNav;
