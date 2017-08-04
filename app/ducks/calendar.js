import axios from 'axios';

// Types
const FETCH_CALENDAR_REQUEST = 'synchrome/calendar/fetch_calendar_request';
const FETCH_CALENDAR_SUCCESS = 'synchrome/calendar/fetch_calendar_success';
const FETCH_CALENDAR_FAILURE = 'synchrome/calendar/fetch_calendar_failure';

const placeholderCalendar = {
  result: 'success',
  data: {
    id: 13123,
    name: 'Kalender Pemprov',
    start: '2017-01-01',
    end: '2017-12-31 07:00:00',
    events: [
      {
        id: 7,
        name: 'New Year 2017',
        start: '2017-01-01 07:00:00',
        end: null,
        category: {
          id: 2,
          name: 'Holiday',
          color: '#c0392b',
          text_color: '#ffffff'
        },
        created_at: '2017-07-22 17:42:27',
        updated_at: '2017-07-22 17:42:27',
        deleted_at: null
      },
      {
        id: 8,
        name: 'Indonesia Independence Day',
        start: '2017-08-17 07:00:00',
        end: null,
        category: {
          id: 2,
          name: 'Holiday',
          color: '#c0392b',
          text_color: '#ffffff'
        },
        created_at: '2017-07-22 17:42:27',
        updated_at: '2017-07-22 17:42:27',
        deleted_at: null
      },
      {
        id: 10,
        name: "New Year's Eve",
        start: '2017-12-31 07:00:00',
        end: null,
        category: {
          id: 2,
          name: 'Holiday',
          color: '#c0392b',
          text_color: '#ffffff'
        },
        created_at: '2017-07-22 17:47:46',
        updated_at: '2017-07-22 17:47:46',
        deleted_at: null
      },
      {
        id: 11,
        name: 'Boom',
        start: '2017-10-15 07:00:00',
        end: null,
        category: {
          id: 2,
          name: 'Holiday',
          color: '#c0392b',
          text_color: '#ffffff'
        },
        created_at: '2017-07-23 00:55:38',
        updated_at: '2017-07-23 00:55:38',
        deleted_at: null
      },
      {
        id: 12,
        name: 'Bitch',
        start: '2017-10-16 07:00:00',
        end: null,
        category: {
          id: 2,
          name: 'Holiday',
          color: '#c0392b',
          text_color: '#ffffff'
        },
        created_at: '2017-07-23 00:55:38',
        updated_at: '2017-07-23 00:55:38',
        deleted_at: null
      }
    ],
    created_at: '2017-07-22 17:42:27',
    updated_at: '2017-07-22 17:42:27',
    deleted_at: null
  }
};

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
  return (dispatch) => {

    // TODO: DISPATCHING A LOADING BAR
    dispatch(fetchCalendarRequest());

    axios
      .get(`${process.env.CLUSTER_API_URL}/calendar`, {
        headers: {
          Authorization: process.env.CLUSTER_JWT_TOKEN
        }
      })
      .then(res => {
        // FIXME: still using placeholder calendar object
        
        // const calendar = res.data.data[0];
        dispatch(fetchCalendarSuccess(placeholderCalendar.data));
      })
      .catch(err => {
        // TODO: IMPLEMENT REAL ERROR HANDLING FEATURE
        dispatch(fetchCalendarFailure(err));
      });
  };
};

export const calendarActions = {
  fetchCalendar
};

// Reducers
const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CALENDAR_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
