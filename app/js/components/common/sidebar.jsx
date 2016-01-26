import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import AutoComplete from 'material-ui/lib/auto-complete';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class Sidebar extends React.Component {
  render() {
    return (
      <LeftNav open={true} style={{width: 256, paddingTop:'90px', zIndex:1100}}>
        <div>
          <List>
            <ListItem primaryText="Daily Schedule" />
            <ListItem primaryText="Favorite Shows" />
            <ListItem primaryText="Stars" />
          </List>
        </div>
      </LeftNav>
    );
  }
}

export default Sidebar