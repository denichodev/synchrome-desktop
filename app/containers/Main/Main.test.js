import React from 'react';
import Main from './Main';

function setup() {
  const props = {};

  const enzymeWrapper = mount(<Main {...props} />);

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
