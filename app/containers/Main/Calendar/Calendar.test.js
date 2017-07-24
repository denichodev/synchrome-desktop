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
});
