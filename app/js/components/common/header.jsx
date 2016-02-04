import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const Header = ({title}) => (
  <AppBar
    title={title}
    className="app-bar"
    showMenuIconButton={false}
    style={{position:'fixed', top:0, zIndex:1101, boxShadow:'none'}}
  />
);

Header.propTypes = {
  title: React.PropTypes.string
};

Header.defaultProps = {
  title: 'Title'
};

export default Header;