import React from 'react';
import ShowsActions from '../../actions/shows-actions';
import ShowStore from '../../stores/shows-store';

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: null
    }
  }

  componentDidMount() {
    const showInfo = ShowStore.getShowInfo(this.props.params.id);
    this.setState({ showInfo });
  }

  render() {
    let show = this.state.showInfo ? (
      <div>
        <h2 className="show-title">{this.state.showInfo.name}</h2>
        <div style={{display:'flex'}}>
          <div>
            <img src={this.state.showInfo.image} />
          </div>
          <section className="show-content">
            <div>{this.state.showInfo.time}</div>
            <div><span className="show-param-title">Network:</span> {this.state.showInfo.network}</div>
            <div><span className="show-param-title">Time:</span> {this.state.showInfo.airtime}</div>
            <div><span className="show-param-title">Run Days:</span> {this.state.showInfo.schedule.days.join(', ')}</div>
            <div><span className="show-param-title">Duration:</span> {this.state.showInfo.runtime} minutes</div>
            <div><span className="show-param-title">Summary:</span> {this.state.showInfo.summary}</div>
          </section>
        </div>
      </div>) : null;

    return (
      <div className="main">
        {show}
      </div>
    );
  }
}

Show.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default Show