import React from 'react';

class Show extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.params.id);
  }

  render() {
    return (
      <div>Show</div>
    );
  }
}

export default Show