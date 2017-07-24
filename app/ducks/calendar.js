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
const fetchCalendarRequest = () => {
  return {
    type: FETCH_CALENDAR_REQUEST
  };
};

const fetchCalendarSuccess = payload => {
  return {
    type: FETCH_CALENDAR_SUCCESS,
    payload
  };
};

const fetchCalendarFailure = error => {
  return {
    type: FETCH_CALENDAR_FAILURE,
    error: error.message
  };
};

const fetchCalendar = () => {
  return function (dispatch) {
    dispatch(fetchCalendarRequest());

    axios
      .get(`${process.env.CLUSTER_API_URL}/calendar`, {
        headers: {
          Authorization: process.env.CLUSTER_JWT_TOKEN
        }
      })
      .then(res => {
        const calendar = res.data.data[0];
        dispatch(fetchCalendarSuccess(calendar));
      })
      .catch(err => {
        dispatch(fetchCalendarFailure(err));
      });
  }
}

export const calendarActions = {
  fetchCalendar
}

// Reducers
const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CALENDAR_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
}

export default calendarReducer;
