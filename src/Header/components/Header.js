import React, { Component } from 'react';
import MobileNav from './MobileNav';
import Logo from './Logo';
import NavLeft from './NavLeft';
import NotificationBtn from './NotificationBtn';

class Header extends Component {
  render() {
    return (
      <div id="page-header" className="bg-gradient-9">
        <MobileNav />
        <Logo />
        <NavLeft />
        <div id="header-nav-right">
          <a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search">
          <i className="glyph-icon icon-search"></i>
          </a>
          <div className="hide" id="popover-search">
            <div className="pad5A box-md">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search terms here ..." />
                <span className="input-group-btn">
                <a className="btn btn-primary" href="#">Search</a>
                </span>
              </div>
            </div>
          </div>
          <a href="#" className="hdr-btn" id="fullscreen-btn" title="Fullscreen">
          <i className="glyph-icon icon-arrows-alt"></i>
          </a>
          <a href="#" className="hdr-btn sb-toggle-left" id="chatbox-btn" title="Chat sidebar">
          <i className="glyph-icon icon-linecons-paper-plane"></i>
          </a>
          <NotificationBtn />
          <div className="dropdown" id="progress-btn">
            <a data-toggle="dropdown" href="#" title="">
            <span className="small-badge bg-azure"></span>
            <i className="glyph-icon icon-linecons-params"></i>
            </a>
            <div className="dropdown-menu pad0A box-sm float-right" id="progress-dropdown">
              <div className="scrollable-content scrollable-slim-box">
                <ul className="no-border progress-box progress-box-links">
                  <li>
                    <a href="#" title="">
                      <b className="pull-right">23%</b>
                      <div className="progress-title">
                        Finishing uploading files
                      </div>
                      <div className="progressbar-smaller progressbar" data-value="23">
                        <div className="progressbar-value bg-blue-alt">
                          <div className="progressbar-overlay"></div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <b className="pull-right">91%</b>
                      <div className="progress-title">
                        Roadmap progress
                      </div>
                      <div className="progressbar-smaller progressbar" data-value="91">
                        <div className="progressbar-value bg-red">
                          <div className="progressbar-overlay"></div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <b className="pull-right">58%</b>
                      <div className="progress-title">
                        Images upload
                      </div>
                      <div className="progressbar-smaller progressbar" data-value="58">
                        <div className="progressbar-value bg-green"></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <b className="pull-right">74%</b>
                      <div className="progress-title">
                        WordPress migration
                      </div>
                      <div className="progressbar-smaller progressbar" data-value="74">
                        <div className="progressbar-value bg-purple"></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <b className="pull-right">91%</b>
                      <div className="progress-title">
                        Agile development procedures
                      </div>
                      <div className="progressbar-smaller progressbar" data-value="91">
                        <div className="progressbar-value bg-black">
                          <div className="progressbar-overlay"></div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <b className="pull-right">58%</b>
                      <div className="progress-title">
                        Systems integration
                      </div>
                      <div className="progressbar-smaller progressbar" data-value="58">
                        <div className="progressbar-value bg-azure"></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <b className="pull-right">97%</b>
                      <div className="progress-title">
                        Code optimizations
                      </div>
                      <div className="progressbar-smaller progressbar" data-value="97">
                        <div className="progressbar-value bg-yellow"></div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pad5A button-pane button-pane-alt text-center">
                <a href="#" className="btn display-block font-normal hover-green" title="View all notifications">
                View all notifications
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown" id="cloud-btn">
            <a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar">
            <i className="glyph-icon icon-linecons-cloud"></i>
            </a>
          </div>
          <div className="dropdown" id="dashnav-btn">
            <a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu">
            <i className="glyph-icon icon-linecons-cog"></i>
            </a>
            <div className="dropdown-menu float-right">
              <div className="box-sm">
                <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                  <a href="#" className="btn vertical-button hover-blue-alt" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i>
                  </span>
                  Dashboard
                  </a>
                  <a href="#" className="btn vertical-button hover-green" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-tags opacity-80 font-size-20"></i>
                  </span>
                  Widgets
                  </a>
                  <a href="#" className="btn vertical-button hover-orange" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-fire opacity-80 font-size-20"></i>
                  </span>
                  Tables
                  </a>
                  <a href="#" className="btn vertical-button hover-orange" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i>
                  </span>
                  Charts
                  </a>
                  <a href="#" className="btn vertical-button hover-purple" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-laptop opacity-80 font-size-20"></i>
                  </span>
                  Buttons
                  </a>
                  <a href="#" className="btn vertical-button hover-azure" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-code opacity-80 font-size-20"></i>
                  </span>
                  Panels
                  </a>
                </div>
                <div className="divider"></div>
                <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                  <a href="#" className="btn vertical-button remove-border btn-info" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i>
                  </span>
                  Dashboard
                  </a>
                  <a href="#" className="btn vertical-button remove-border btn-danger" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-tags opacity-80 font-size-20"></i>
                  </span>
                  Widgets
                  </a>
                  <a href="#" className="btn vertical-button remove-border btn-purple" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-fire opacity-80 font-size-20"></i>
                  </span>
                  Tables
                  </a>
                  <a href="#" className="btn vertical-button remove-border btn-azure" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i>
                  </span>
                  Charts
                  </a>
                  <a href="#" className="btn vertical-button remove-border btn-yellow" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-laptop opacity-80 font-size-20"></i>
                  </span>
                  Buttons
                  </a>
                  <a href="#" className="btn vertical-button remove-border btn-warning" title="">
                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                  <i className="glyph-icon icon-code opacity-80 font-size-20"></i>
                  </span>
                  Panels
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example">
          <i className="glyph-icon icon-linecons-lock"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
