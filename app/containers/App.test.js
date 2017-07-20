import React from 'react';
import App from './App';

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<App {...props} />);

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
