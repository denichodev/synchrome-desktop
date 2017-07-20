import React from 'react';
import Home from './Home';

function setup() {
  const props = {};

  const enzymeWrapper = mount(<Home {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('App', () => {
  it('should match snapshot', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
