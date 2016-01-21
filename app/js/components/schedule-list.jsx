import React from 'react';
import * as Api from '../utils/api';
import AppStore from '../stores/app-store';

const Show = ({info}) =>
  <div className="flex">
    <div>{info.airstamp.toLocaleTimeString()}</div>
    <div>{info.name}</div>
    <div>{info.network}</div>
    <div>{info.summary}</div>
  </div>;

function getPrograms() {
  return { programs: AppStore.getPrograms }
}

class ShowListing extends React.Component {
  constructor(props) {
    super(props);

    //this.state = {
    //  showInfos: []
    //};
  }

  componentDidMount() {
    //const self = this;
    //Api.getAllShows()
    //  .then(function(response) {
    //    self.setState({ showInfos: response });
    //  })
    //  .catch(function(error) {
    //    console.log(error);
    //  });
  }

  render() {
    let {shows, ...props} = this.props;
    let showsItems = shows.map(showInfo => <Show info={showInfo} key={showInfo.id} />);

    return (
      <div>
        {showsItems}
      </div>
    );
  }
}

export default ShowListing;