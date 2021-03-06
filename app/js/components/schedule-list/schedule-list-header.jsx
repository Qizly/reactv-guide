import React from 'react';

const ScheduleListHeader = () => (
  <div className="flex show-list-header">
    <div className="show-list-header-time">Time</div>
    <div className="show-list-header-name">Title</div>
    <div className="show-list-header-duration">Duration</div>
    <div className="show-list-header-network">Network</div>
    <div className="show-list-header-summary">Summary</div>
    <div className="show-list-header-favorite">Favorite</div>
  </div>);

export default ScheduleListHeader;