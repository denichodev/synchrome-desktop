import axios from 'axios';

// Types
const FETCH_EVENT_REQUEST = 'synchrome/event/fetch_event_request';
const FETCH_EVENT_SUCCESS = 'synchrome/event/fetch_event_success';
const FETCH_EVENT_FAILURE = 'synchrome/event/fetch_event_failure';

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

    axios
      .get(`${process.env.CLUSTER_API_URL}/calendar/${calendarId}/events`, {
        headers: {
          Authorization: process.env.CLUSTER_JWT_TOKEN
        }
      })
      .then(res => {
        const events = {
          [calendarId]: res.data.data
        };
        console.log(events);
        dispatch(fetchEventsSuccess(events))
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
