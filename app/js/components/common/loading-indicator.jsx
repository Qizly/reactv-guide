import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';

const LoadingIndicator = () => {
  const styles = {position:'fixed', zIndex:1200, top:4, left: '50%', marginLeft:'-25px'};
  return <CircularProgress mode="indeterminate" color="white" size={0.8} style={styles}/>;
};

export default LoadingIndicator;