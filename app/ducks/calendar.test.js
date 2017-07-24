import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import { calendarActions } from './calendar';
import { calendarTypes } from './calendar';
import calendarReducer from './calendar';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Calendar async action creators', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCH_CALENDAR_SUCCESS after fetching of calendar succeed', done => {
    const expectedActions = [
      { type: calendarTypes.FETCH_CALENDAR_REQUEST },
      { type: calendarTypes.FETCH_CALENDAR_SUCCESS }
    ];

    const store = mockStore({
      data: {
        data: [
          {
            id: 1,
            name: 'Example Calendar'
          }
        ]
      }
    });

    moxios.withMock(() => {
      store.dispatch(calendarActions.fetchCalendar());

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: {
              data: {
                data: [
                  {
                    id: 1,
                    name: 'Example Calendar'
                  }
                ]
              }
            }
          })
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });
    });
  });

  it('creates FETCH_CALENDAR_FAILURE after any failure of fetching calendar', done => {
    const expectedActions = [
      { type: calendarTypes.FETCH_CALENDAR_REQUEST },
      {
        type: calendarTypes.FETCH_CALENDAR_FAILURE,
        error: 'Request failed with status code 422'
      }
    ];

    const store = mockStore({
      data: {
        data: [
          {
            id: 1,
            name: 'Example Calendar'
          }
        ]
      }
    });

    moxios.withMock(() => {
      store.dispatch(calendarActions.fetchCalendar());

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 422,
            response: {
              message: 'error'
            }
          })
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });
    });
  });
});

describe('Calendar reducers', () => {
  it('should return the initial state', () => {
    expect(calendarReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_CALENDAR_SUCCESS', () => {
    const exampleCalendar = {
      id: '1',
      title: 'Example calendar'
    }

    const calendarBefore = {
      id: '2',
      title: 'Calendar before'
    }
    
    expect(calendarReducer(calendarBefore, {
      type: calendarTypes.FETCH_CALENDAR_SUCCESS,
      payload: exampleCalendar
    })).toEqual({
      ...exampleCalendar
    });
  });
})
