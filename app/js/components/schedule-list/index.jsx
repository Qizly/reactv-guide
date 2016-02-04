import React from 'react';
import ScheduleListHeader from './schedule-list-header.jsx';
import ScheduleListItem from './schedule-list-item.jsx';
import ShowsAction from '../../actions/shows-actions';
import ShowsStore from '../../stores/shows-store';
import LoadingIndicator from '../common/loading-indicator.jsx';
import {browserHistory} from 'react-router'

class ScheduleList extends React.Component {
  constructor() {
    super();

    this.state = {
      shows: [],
      isLoading: false
    };
  }

  componentDidMount() {
    ShowsAction.getDailySchedule('');
    ShowsStore.addChangeListener(this._onChange);
    this.setState({ isLoading: true });
  }

  componentWillUnmount() {
    ShowsStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState({
      shows: ShowsStore.getShows(),
      isLoading: false
    });
  };

  handleClick = (showId) => {
    this.context.router.push(`/show/${showId}`);
  };

  render() {
    let shows = this.state.shows;
    let showsItems = shows.map(showInfo => (<ScheduleListItem
      info={showInfo}
      key={showInfo.id}
      handleClick={this.handleClick} />));
    let loadingIndicator = this.state.isLoading ? <LoadingIndicator /> : null;

    return (
      <div className="main">
        <ScheduleListHeader />
        <div>
          {showsItems}
        </div>
        {loadingIndicator}
      </div>
    );
  }
}

ScheduleList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ScheduleList;