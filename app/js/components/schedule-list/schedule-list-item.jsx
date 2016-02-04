import React from 'react';
import classNames from 'classnames/bind';

class ScheduleListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  _onMouseOver = () => {
    this.setState({ hovered: true });
  };

  _onMouseOut = () => {
    this.setState({ hovered: false });
  };

  render() {
    let {info, handleClick} = this.props;
    let classes = classNames({
      'flex': true,
      'show-list-item': true,
      'hover': this.state.hovered
    });

    return (
      <div className={classes}
           onMouseOver={this._onMouseOver}
           onMouseOut={this._onMouseOut}
           onClick={handleClick.bind(null, info.showId)} >
        <div className="show-list-item-time">{info.airtime}</div>
        <div className="show-list-item-name">{info.name}</div>
        <div className="show-list-item-duration">{info.runtime} mins</div>
        <div className="show-list-item-network">{info.network}</div>
        <div className="show-list-item-summary">{info.summary}</div>
      </div>
    );
  }
}

ScheduleListItem.propTypes = {
  info: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default ScheduleListItem;
