import React from 'react';
import ScheduleListHeader from './schedule-list-header.jsx';
import ScheduleListItem from './schedule-list-item.jsx';

class ShowListing extends React.Component {
  constructor(props) {
    super(props);

  }

  handleClick(id) {
    console.log(id);
  }

  render() {
    let {shows, ...props} = this.props;
    let showsItems = shows.map(showInfo => (<ScheduleListItem
      info={showInfo}
      key={showInfo.id}
      handleClick={this.handleClick} />));

    return (
      <div className="schedule-list">
        <ScheduleListHeader />
        <div>
          {showsItems}
        </div>
      </div>
    );
  }
}

export default ShowListing;