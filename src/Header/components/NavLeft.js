import React, { Component } from 'react';
import R from 'ramda';

class NavLeft extends Component {
  loadDropdown() {
    const dropdownItems = [
      { text: 'View login page example' },
      { text: 'View login page example' },
      { text: 'View login page example' },
    ];
    return R.map((item) => {
      return (
        <li>
          <a href="#">
          <i className="glyph-icon float-right icon-caret-right"></i>
          { item.text }
          </a>
        </li>
      );
    })(dropdownItems)
  }
  render() {
    return (
      <div id="header-nav-left">
        <div className="user-account-btn dropdown">
          <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
          <img width="28" src="https://agileui.com/demo/monarch//assets/image-resources/gravatar.jpg" alt="Profile image" />
          <span>Thomas Barnes</span>
          <i className="glyph-icon icon-angle-down"></i>
          </a>
          <div className="dropdown-menu float-left">
            <div className="box-sm">
              <div className="login-box clearfix">
                <div className="user-img">
                  <a href="#" title="" className="change-img">Change photo</a>
                  <img src="https://agileui.com/demo/monarch//assets/image-resources/gravatar.jpg" alt="" />
                </div>
                <div className="user-info">
                  <span>
                  Thomas Barnes
                  <i>UX/UI developer</i>
                  </span>
                  <a href="#" title="Edit profile">Edit profile</a>
                  <a href="#" title="View notifications">View notifications</a>
                </div>
              </div>
              <div className="divider"></div>
              <ul className="reset-ul mrg5B">
                { this.loadDropdown() }
              </ul>
              <div className="pad5A button-pane button-pane-alt text-center">
                <a href="#" className="btn display-block font-normal btn-danger">
                <i className="glyph-icon icon-power-off"></i>
                Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavLeft;
