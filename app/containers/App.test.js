import React from 'react';
import App from './App';

describe('App', () => {
  it('should match its snapshot', () => {
    const component = shallow(
      <App />
    );

    expect(component).toMatchSnapshot();
  });
})
