import React from 'react';
import Home from './Home';

describe('<Home />', () => {
  it('match its snapshot', () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  })
})
