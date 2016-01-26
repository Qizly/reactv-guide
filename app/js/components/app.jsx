import React from 'react';
import AppStore from '../stores/app-store';
import ScheduleList from './schedule-list.jsx';
import Header from './header.jsx';
//import AppBar from 'material-ui/lib/app-bar';
import Sidebar from './sidebar.jsx';
import CircularProgress from 'material-ui/lib/circular-progress';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      shows: [],
      isLoading: true
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
      shows: AppStore.getShows(),
      isLoading: false
    });

    console.log(this.state.shows);
  }

  render() {
    const loader = this.state.isLoading ? <CircularProgress mode="indeterminate" color="white" size={0.8} style={{position:'fixed', zIndex:1200, top:4, left: '50%', marginLeft:'-25px'}}/> : null;
    return (
      <div>
        <Header />
        {loader}
        <div className="wrapper">
          <Sidebar />
          <ScheduleList shows={this.state.shows}/>
        </div>
      </div>
    )
  }
}

export default App;
