/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../containers/Main/Home/Home';
import Calendar from '../containers/Main/Calendar/Calendar';
import EventForm from '../containers/Main/EventForm/EventForm';

export default () => (
  <Switch>
    <Route path="/home" name="Home" component={Home} />
    <Route path="/calendar/view" name="Calendar" component={Calendar} />
    <Route path="/event/create/:start?/:end?" name="Event Form" component={EventForm} />
    <Redirect from="/" to="/home" />
  </Switch>
);
