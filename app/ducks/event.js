import axios from 'axios';

// Types
const FETCH_EVENT_REQUEST = 'synchrome/event/fetch_event_request';
const FETCH_EVENT_SUCCESS = 'synchrome/event/fetch_event_success';
const FETCH_EVENT_FAILURE = 'synchrome/event/fetch_event_failure';

const placeholderEvents = {
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

export const eventTypes = {
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILURE
};

// Action creators
const fetchEventsRequest = () => {
  return {
    type: FETCH_EVENT_REQUEST
  };
};

const fetchEventsSuccess = payload => {
  return {
    type: FETCH_EVENT_SUCCESS,
    payload
  };
};

const fetchEventsFailure = error => {
  return {
    type: FETCH_EVENT_FAILURE,
    error: error.message
  };
};

const fetchEvents = calendarId => {
  return (dispatch) => {

    // TODO: DISPATCHING A LOADING BAR
    dispatch(fetchEventsRequest());

    // FIXME: CHANGE THE WAY TO FETCH EVENTS BY CALENDAR/{:ID}
    axios
      .get(`${process.env.CLUSTER_API_URL}/calendar/${calendarId}/events`, {
        headers: {
          Authorization: process.env.CLUSTER_JWT_TOKEN
        }
      })
      .then(res => {
        // FIXME: still using placeholder calendar object
        console.log(res);
        // const calendar = res.data.data[0];
        dispatch(fetchEventsSuccess(placeholderEvents.data));
      })
      .catch(err => {
        // TODO: IMPLEMENT REAL ERROR HANDLING FEATURE
        dispatch(fetchEventsFailure(err));
      });
  };
};

export const eventActions = {
  fetchEvents
};

// Reducers
const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default eventReducer;
