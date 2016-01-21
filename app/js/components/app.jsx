import React from 'react';
import AppStore from '../stores/app-store';
import ScheduleList from './schedule-list.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      shows: []
    };

    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      shows: AppStore.getShows()
    });
  }

  render() {
    return (
      <div>
        <ScheduleList shows={this.state.shows} />
      </div>
    )
  }
}

export default App;
