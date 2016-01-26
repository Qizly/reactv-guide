import React from 'react';

class LoadingIndicator extends React.Component {
  render() {
    const styles = {position:'fixed', zIndex:1200, top:4, left: '50%', marginLeft:'-25px'};
    return (
      <CircularProgress mode="indeterminate" color="white" size={0.8} style={styles}/>
    );
  }
}
