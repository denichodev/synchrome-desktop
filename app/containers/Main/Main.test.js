import React from 'react';
import Main from './Main';

describe('Main app page', () => {
  it('should match its snapshot', () => {
    const component = shallow(
      <Main />
    );

    expect(component).toMatchSnapshot();
  });
});
