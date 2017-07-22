// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import calendar from './calendar';

const rootReducer = combineReducers({
  router,
  form: formReducer,
  calendar
});

export default rootReducer;
