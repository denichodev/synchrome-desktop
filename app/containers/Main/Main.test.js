import React from 'react';
import Main from './Main';

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<Main {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Main', () => {
  it('should match snapshot', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
