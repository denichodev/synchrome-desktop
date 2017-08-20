import axios from 'axios';

// Types
const FETCH_CALENDAR_REQUEST = 'synchrome/calendar/fetch_calendar_request';
const FETCH_CALENDAR_SUCCESS = 'synchrome/calendar/fetch_calendar_success';
const FETCH_CALENDAR_FAILURE = 'synchrome/calendar/fetch_calendar_failure';

export const calendarTypes = {
  FETCH_CALENDAR_REQUEST,
  FETCH_CALENDAR_SUCCESS,
  FETCH_CALENDAR_FAILURE
};

// Action creators
const fetchCalendarsRequest = () => {
  return {
    type: FETCH_CALENDAR_REQUEST
  };
};

const fetchCalendarsSuccess = payload => {
  return {
    type: FETCH_CALENDAR_SUCCESS,
    payload
  };
};

const fetchCalendarsFailure = error => {
  return {
    type: FETCH_CALENDAR_FAILURE,
    error: error.message
  };
};

const fetchCalendars = () => {
  return (dispatch) => {

    // TODO: DISPATCHING A LOADING BAR
    dispatch(fetchCalendarsRequest());

    axios
      .get(`${process.env.CLUSTER_API_URL}/calendar`, {
        headers: {
          Authorization: process.env.CLUSTER_JWT_TOKEN
        }
      })
      .then(res => {
        // FIXME: still using placeholder calendar object
        dispatch(fetchCalendarsSuccess(res.data.data));
      })
      .catch(err => {
        // TODO: IMPLEMENT REAL ERROR HANDLING FEATURE
        dispatch(fetchCalendarsFailure(err.message));
      });
  };
};

export const calendarActions = {
  fetchCalendars
};

// Reducers
const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CALENDAR_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default calendarReducer;
