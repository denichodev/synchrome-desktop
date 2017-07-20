import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App {...props} />);
    }
    return mountedApp;
  };

  beforeEach(() => {
    props = {
      children: undefined
    };
    mountedApp = undefined;
  });

  // Tests

  it('always renders a div', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('renders its children', () => {
    const divs = app().find('div');
    const wrappingDivs = divs.first();
    expect(wrappingDivs.children()).toEqual(app().children());
  });
});
