import axios from 'axios';

// Actions
const FETCH_CALENDAR_REQUEST = 'synchrome/calendar/fetch_calendar_request';
const FETCH_CALENDAR_SUCCESS = 'synchrome/calendar/fetch_calendar_success';
const FETCH_CALENDAR_FAILURE = 'synchrome/calendar/fetch_calendar_failure';

// Action creators
const fetchCalendarRequest = () => {
  return {
    type: FETCH_CALENDAR_REQUEST
  };
};

const fetchCalendarSuccess = calendar => {
  return {
    type: FETCH_CALENDAR_SUCCESS,
    calendar
  };
};

const fetchCalendarFailure = error => {
  return {
    type: FETCH_CALENDAR_FAILURE,
    error
  };
};

export function fetchCalendar() {
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

// Reducers
const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CALENDAR_SUCCESS:
      return { ...state, ...action.calendar };
    default:
      return state;
  }
}

export const calendarActions = {
  fetchCalendar
}

export default calendarReducer;
