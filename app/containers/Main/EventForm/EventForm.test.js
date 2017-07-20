import React from 'react';
import EventForm from './EventForm';

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<EventForm {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('EventForm', () => {
  it('should match snapshot', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
