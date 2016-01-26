import React from 'react';
import ScheduleListHeader from './schedule-list-header.jsx';
import ScheduleListItem from './schedule-list-item.jsx';
import AppStore from '../stores/app-store';

class ShowListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shows: [] };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ shows: AppStore.getShows() });
    this.props.setLoadingIndicator(false);
  }

  handleClick(id) {
    console.log(id);
  }

  render() {
    let shows = this.state.shows;
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