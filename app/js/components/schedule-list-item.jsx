import React from 'react';
import classNames from 'classnames/bind';

class ScheduleListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };

    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
  }

  _onMouseOver() {
    this.setState({ hovered: true });
  }

  _onMouseOut() {
    this.setState({ hovered: false });
  }

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
           onClick={handleClick.bind(null, info.id)} >
        <div className="show-list-item-time">{info.airstamp.toLocaleTimeString()}</div>
        <div className="show-list-item-name">{info.name}</div>
        <div className="show-list-item-thumbnail">
          <img className="show-list-item-thumbnail-image" src={info.image} />
        </div>
        <div className="show-list-item-network">{info.network}</div>
        <div className="show-list-item-summary">{info.summary}</div>
      </div>
    );
  }
}

export default ScheduleListItem;
