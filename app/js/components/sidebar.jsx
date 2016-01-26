import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import AutoComplete from 'material-ui/lib/auto-complete';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const Sidebar = React.createClass({
  getInitialState() {
    return {
      category: null,
      username: null,
      keywords: [
        "sea", "ocean", "water", "landscape",
        "snake", "animal", "beast", "scary",
        "dudes", "pizza", "feast", "happy",
        "snow", "winter", "Moscow", "cold",
        "surfing", "green", "mountains", "peaks",
        "muscle", "parallel bars", "tight",
        "concentration", "grass", "cat", "man",
        "selfie", "self portrait", "face", "eyes"
      ]
    }
  },

  componentDidMount() {
    //DashboardStore.addFiltersChangeListener(this._onFilterChange);
  },

  componentWillUnmount() {
    //DashboardStore.removeFiltersChangeListener(this._onFilterChange);
  },

  //_onFilterChange() {
  //  const filters = DashboardStore.getAllFilters();
  //
  //  this.setState({
  //    category: this.getFilterValue(filters, 'category'),
  //    username: this.getFilterValue(filters, 'username')
  //  });
  //},

  //getFilterValue(filters, filterType) {
  //  let filter = filters.find(filter =>
  //    filter.key === filterType
  //  );
  //  return filter ? filter.value : null;
  //},
  //
  //handleChange(type, event, index, value) {
  //  DashboardActionCreators.filterSelect(type, value);
  //},

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
});

export default Sidebar