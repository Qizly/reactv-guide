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
        <h2>{this.state.showInfo.name}</h2>
        <div style={{display:'flex'}}>
          <img src={this.state.showInfo.image} />
          <section className="show-content">
            <div>{this.state.showInfo.time}</div>
            <div><strong>Network:</strong> {this.state.showInfo.network}</div>
            <div><strong>Time:</strong> {this.state.showInfo.schedule.time}</div>
            <div><strong>Run Days:</strong> {this.state.showInfo.schedule.days.join(', ')}</div>
            <div><strong>Duration:</strong> {this.state.showInfo.runtime} minutes</div>
            <div><strong>Summary:</strong> {this.state.showInfo.summary}</div>
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