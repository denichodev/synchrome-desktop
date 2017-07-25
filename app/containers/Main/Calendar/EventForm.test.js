import React from 'react';
import configureStore from 'redux-mock-store';
import EventForm from './EventForm';

const mockStore = configureStore();

describe('Event form ', () => {
  it('match its snapshot', () => {
    const component = shallow(<EventForm />);
    expect(component).toMatchSnapshot();
  });

  it('test', () => {
    const component = shallow(<EventForm store={mockStore()} />);
    const instance = component.dive().instance();

    console.log(instance.renderForm);
  })
})
