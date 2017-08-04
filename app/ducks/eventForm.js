import axios from 'axios';

// Types
const CALENDAR_DATE_SELECTED = 'synchrome/eventForm/calendar_date_selected';
const EVENT_POST_REQUEST = 'synchrome/eventForm/event_form_request';
const EVENT_POST_SUCCESS = 'synchrome/eventForm/event_form_success';
const EVENT_POST_FAILURE = 'synchrome/eventForm/event_form_failure';

export const eventFormTypes = {
  CALENDAR_DATE_SELECTED,
  EVENT_POST_REQUEST,
  EVENT_POST_SUCCESS,
  EVENT_POST_FAILURE
};

// Action Creators
const calendarDateSelected = (start, end) => {
  return {
    type: CALENDAR_DATE_SELECTED,
    payload: {
      start,
      end
    }
  };
};

const eventPostRequest = () => {
  return {
    type: EVENT_POST_REQUEST
  };
};

const eventPostSuccess = payload => {
  return {
    type: EVENT_POST_SUCCESS,
    payload
  };
};

const eventPostFaied = error => {
  return {
    type: EVENT_POST_FAILURE,
    error
  };
};

const submitEvent = (calendarId, eventData) => {
  return dispatch => {
    // TODO: DISPATCHING A LOADING BAR
    dispatch(eventPostRequest());

    axios
      .post(`${process.env.CLUSTER_API_URL}/calendar`, {
        headers: {
          Authorization: process.env.CLUSTER_JWT_TOKEN
        }
      })
      .then(res => {
        // EVENT POST SUCCEEDED AND DISPATCHING
        // TODO: IMPLEMENT WITH REAL API
        dispatch(eventPostSuccess({ dummyData: eventData }));
        console.log(eventData);
        console.log(res);
      })
      .catch(err => {
        // EVENT POST FAILED AND DISPATCHING FAILURE
        // TODO: IMPLEMENT REAL ERROR HANDLING
        dispatch(eventPostSuccess({ dummyData: eventData }));
        console.log(eventData);        
        console.log(err);
      });
  };
};

export const eventFormActions = {
  calendarDateSelected,
  submitEvent
};

export default {
  EventsNewForm: (state, action) => {
    switch (action.type) {
      case CALENDAR_DATE_SELECTED:
        return {
          ...state,
          values: {
            ...state.values,
            start: action.payload.start,
            end: action.payload.end
          }
        };
      default:
        return state;
    }
  }
};
