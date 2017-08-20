// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import calendar from './calendar';
import event from './event';
import eventForm from './eventForm';

const rootReducer = combineReducers({
  router,
  calendar,
  event,
  form: formReducer.plugin(eventForm),
});

export default rootReducer;
