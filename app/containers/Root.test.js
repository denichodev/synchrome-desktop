import React from 'react';
import Root from './Root';
import { configureStore, history } from '../store/configureStore';

const store = configureStore();

describe('Root', () => {
  it('should match its snapshot', () => {
    const component = shallow(
      <Root
        store={store}
        history={history}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
