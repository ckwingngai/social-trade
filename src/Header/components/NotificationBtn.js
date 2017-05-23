import React, { Component } from 'react';
import R from 'ramda';

class NotificationBtn extends Component {
  loadNotification() {
    const notices = [
      { text: 'This is an error notification', timeBold: '', timeText: 'a few seconds ago', textColor: '', type: 'bg-danger icon-notification glyph-icon icon-bullhorn' },
      { text: 'This is a warning notification', timeBold: '15', timeText: 'minutes ago', textColor: 'font-blue', type: 'bg-warning icon-notification glyph-icon icon-users' },
      { text: 'A success message example.', timeBold: '2 hours', timeText: 'ago', textColor: 'font-green', type: 'bg-green icon-notification glyph-icon icon-sitemap' },
      { text: 'This is an error notification', timeBold: '', timeText: 'a few seconds ago', textColor: '', type: 'bg-azure icon-notification glyph-icon icon-random' },
      { text: 'This is a warning notification', timeBold: '15', timeText: 'minutes ago', textColor: '', type: 'bg-warning icon-notification glyph-icon icon-ticket' },
      { text: 'Alternate notification styling.', timeBold: '2 hours', timeText: 'ago', textColor: 'font-blue', type: 'bg-blue icon-notification glyph-icon icon-user' },
      { text: 'This is an error notification', timeBold: '', timeText: 'a few seconds ago', textColor: '', type: '' },
    ];
    return R.map((notice) => {
      return (
        <li>
          <span className={ notice.type }></span>
          <span className="notification-text">{ notice.text }</span>
          <div className="notification-time {notice.textColor}">
            <b>{ notice.timeBold+' ' }</b>{ notice.timeText }
            <span className="glyph-icon icon-clock-o"></span>
          </div>
        </li>
      );
    })(notices);
  }
  render() {
    return (
      <div className="dropdown" id="notifications-btn">
        <a data-toggle="dropdown" href="#" title="">
        <span className="small-badge bg-yellow"></span>
        <i className="glyph-icon icon-linecons-megaphone"></i>
        </a>
        <div className="dropdown-menu box-md float-right">
          <div className="popover-title display-block clearfix pad10A">
            Notifications
            <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">
            More options...
            </a>
          </div>
          <div className="scrollable-content scrollable-slim-box">
            <ul className="no-border notifications-box">
              { this.loadNotification() }
            </ul>
          </div>
          <div className="pad10A button-pane button-pane-alt text-center">
            <a href="#" className="btn btn-primary" title="View all notifications">
            View all notifications
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationBtn;
