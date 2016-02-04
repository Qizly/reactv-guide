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

  _onClick(pathname) {
    this.context.router.push(pathname);
  }

  getNavItemBGColor(locationPathname, navItemPathname) {
    return locationPathname === navItemPathname ? {backgroundColor: 'rgba(0,0,0,0.2)'} : null;
  }

  render() {
    let {location} = this.props;
    let pathname = location.pathname;

    return (
      <LeftNav open={true} style={{width: 256, paddingTop:'90px', zIndex:1100}}>
        <div>
          <List>
            <ListItem primaryText="Daily Schedule" style={this.getNavItemBGColor(pathname, '/')} onClick={this._onClick.bind(this, '/')} />
            <ListItem primaryText="Favorite Shows" style={this.getNavItemBGColor(pathname, '/favorites')} onClick={this._onClick.bind(this, '/favorites')} />
            <ListItem primaryText="People" style={this.getNavItemBGColor(pathname, '/people')} onClick={this._onClick.bind(this, '/people')} />
          </List>
        </div>
      </LeftNav>
    );
  }
}

Sidebar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Sidebar.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default Sidebar