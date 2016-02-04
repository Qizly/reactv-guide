import React from 'react';
import ScheduleList from './schedule-list/index.jsx';
import Show from './show/index.jsx';
import Favorites from './favorites/favorites.jsx'
import People from './people/people.jsx';
import Template from './template';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={ScheduleList} />
        <Route path="show/:id" component={Show} />
        <Route path="favorites" component={Favorites} />
        <Route path="people" component={People} />
      </Route>
    </Router>
  );
};

export default App;
