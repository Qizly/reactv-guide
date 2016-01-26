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

//
//class Header extends React.Component {
//  render() {
//    return (
//      <AppBar
//        title="ReacTV Guide"
//        className="app-bar"
//        showMenuIconButton={false}
//        style={{position:'fixed', top:0, zIndex:1101, boxShadow:'none'}}
//      />
//    );
//  }
//}

export default Header;