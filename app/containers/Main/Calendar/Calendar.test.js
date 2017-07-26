import React from 'react';
import configureStore from 'redux-mock-store';
import Calendar from './Calendar';

const mockStore = configureStore();

describe('Calendar', () => {
  it('should match its snapshot', () => {
    const component = shallow(
      <Calendar store={mockStore()} />
    );

    expect(component).toMatchSnapshot();
  });

  it('normalize the fetched calendar events', () => {
    const mockCalendar = {
      id: '1',
      name: 'Mock Calendar',
      events: [
        {
          id: 1,
          title: 'Hari Kemerdekaan',
          start: '2017-08-17',
          end: '2017-08-17',
          category: { color: '#bada55', textColor: '#111'}
        },
        {
          id: 2,
          title: 'Tahun Baru',
          start: '2017-01-01',
          end: '2017-01-01',
          category: { color: '#efefef', textColor: '#111'}
        }
      ]
    }

    const expectedEvents = [
      {
        id: 1,
        title: 'Hari Kemerdekaan',
        start: '2017-08-17',
        end: '2017-08-17',
        color: '#bada55',
        textColor: "111"
      },
      {
        id: 2,
        title: 'Tahun Baru',
        start: '2017-01-01',
        end: '2017-01-01',
        color: '#efefef',
        textColor: "111"
      }
    ];

    const wrapper = shallow(<Calendar store={mockStore()} />);
    const instance = wrapper.dive();
  });
});
