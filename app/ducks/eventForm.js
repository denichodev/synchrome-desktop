const CALENDAR_DATE_SELECTED = 'synchrome/eventForm/calendar_date_selected';

export const eventFormTypes = {
  CALENDAR_DATE_SELECTED
};

const calendarDateSelected = (start, end) => {
  return {
    type: CALENDAR_DATE_SELECTED,
    payload: {
      start: start,
      end: end
    }
  };
};

export const eventFormActions = {
  calendarDateSelected
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
        }
      default:
        return state;  
    }
  }
}