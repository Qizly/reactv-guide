import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import AutoComplete from 'material-ui/lib/auto-complete';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  }

  getNavItemBGColor(locationPathname, navItemPathname) {
    return locationPathname === navItemPathname ? {backgroundColor: 'rgba(0,0,0,0.2)'} : null;
  }

  render() {
    let {location} = this.props;
    let pathname = location.pathname;
    console.log('Path = ', pathname);
    return (
      <LeftNav open={true} style={{width: 256, paddingTop:'90px', zIndex:1100}}>
        <div>
          <List>
            <ListItem primaryText="Daily Schedule" style={this.getNavItemBGColor(pathname, '/')} />
            <ListItem primaryText="Favorite Shows" style={this.getNavItemBGColor(pathname, '/favorites')} />
            <ListItem primaryText="People" style={this.getNavItemBGColor(pathname, '/people')} />
          </List>
        </div>
      </LeftNav>
    );
  }
}

export default Sidebar