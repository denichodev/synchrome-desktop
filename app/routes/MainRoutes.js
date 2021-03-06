/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../containers/Main/Home/Home';
import Calendar from '../containers/Main/Calendar/Calendar';

export default () => (
  <Switch>
    <Route exact path="/home" name="Home" component={Home} />
    <Route path="/calendar/view" name="Calendar" component={Calendar} />
    <Redirect from="/" to="/home" />
  </Switch>
);
