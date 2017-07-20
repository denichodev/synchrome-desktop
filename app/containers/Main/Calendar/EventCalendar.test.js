import React from 'react';
import EventCalendar from './Calendar';

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<EventCalendar {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('EventCalendar', () => {
  it('should match snapshot', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
