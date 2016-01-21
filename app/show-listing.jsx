import React from 'react';
import * as Api from './api';

const Show = ({info}) =>
  <div className="flex">
    <div>{info.airstamp.toLocaleTimeString()}</div>
    <div>{info.name}</div>
    <div>{info.network}</div>
    <div>{info.summary}</div>
  </div>;

class ShowListing extends React.Component {
  constructor() {
    super();

    this.state = {
      showInfos: []
    };
  }

  componentDidMount() {
    const self = this;
    Api.getAllShows()
      .then(function(response) {
        self.setState({ showInfos: response });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let shows = this.state.showInfos.map(showInfo => <Show info={showInfo} key={showInfo.id} />);

    return (
      <div>
        {shows}
      </div>
    );
  }
}

export default ShowListing;