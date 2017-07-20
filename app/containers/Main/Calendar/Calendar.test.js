import React from 'react';
import Calendar from './Calendar';

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<Calendar {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Calendar', () => {
  it('should match snapshot', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
