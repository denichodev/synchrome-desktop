// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import calendar from './calendar';
import eventForm from './eventForm';

const rootReducer = combineReducers({
  router,
  calendar,  
  form: formReducer.plugin(eventForm),
});

export default rootReducer;
