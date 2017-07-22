// @flow
import axios from 'axios';

const API_URL = 'http://localhost:8192';

// State type
export type calendarStateType = {
  +events: Array<eventStateType>
};

export type eventStateType = {
  +event: {
    name: string,
    start: string,
    end: string
  }
};

export type actionType = {
  +type: string
};

// Actions
const FETCH_EVENTS = 'synchrome/calendar/fetching_events';

// Reducers
export default calendarReducer = (state: Array<eventStateType> = [], action: actionType) => {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log('fetching events');
      break;
    default:
      return state;
  }
}

const fetchEvents = () => (dispatch: (action: actionType) => void) => {
  axios
    .get(`${API_URL}/calendar`, {
      headers: {
        Authorization: 
      }
    })
}
