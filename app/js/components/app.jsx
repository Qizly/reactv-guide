import React from 'react';
//import AppStore from '../stores/app-store';
import ScheduleList from './schedule-list.jsx';
import Header from './header.jsx';
//import AppBar from 'material-ui/lib/app-bar';
import Sidebar from './sidebar.jsx';
import CircularProgress from 'material-ui/lib/circular-progress';

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
    let loader = this.state.isLoading ? <CircularProgress mode="indeterminate" color="white" size={0.8} style={{position:'fixed', zIndex:1200, top:4, left: '50%', marginLeft:'-25px'}}/> : null;
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
