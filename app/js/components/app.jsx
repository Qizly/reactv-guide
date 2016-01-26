import React from 'react';
import ScheduleList from './schedule-list/schedule-list.jsx';
import Header from './common/header.jsx';
import Sidebar from './common/sidebar.jsx';
import LoadingIndicator from './common/loading-indicator.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = { isLoading: true };

    this.setLoadingIndicator = this.setLoadingIndicator.bind(this);
  }

  setLoadingIndicator(loaderState) {
    this.setState({ isLoading: loaderState });
  }

  render() {
    let loader = this.state.isLoading ? <LoadingIndicator /> : null;

    return (
      <div>
        <Header />
        {loader}
        <div className="wrapper">
          <Sidebar />
          <ScheduleList setLoadingIndicator={this.setLoadingIndicator} />
        </div>
      </div>
    )
  }
}

export default App;
