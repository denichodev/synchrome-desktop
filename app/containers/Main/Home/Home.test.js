import React from 'react';
import Home from './Home';

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<Home {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Home', () => {
  it('should match snapshot', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
