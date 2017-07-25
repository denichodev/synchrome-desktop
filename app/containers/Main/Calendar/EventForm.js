import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class EventForm extends Component {
  renderTextField = field => {
    // const { meta: { touched, error } } = field;
    // const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    const { label, name, input, placeholder } = field;
    return (
      <div className="form-group">
        <label htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          {...input}
        />
      </div>
    );
  };
  
  render() {
    return (
      <form>
        <Field
          label="Event Name"
          name="name"
          placeholder="Enter your event name here"
          component={this.renderTextField}
        />
        <Field
          label="Start date"
          name="start"
          placeholder="Enter start date"
          component={this.renderTextField}
        />
        <Field
          label="End date"
          name="end"
          placeholder="Enter end date"
          component={this.renderTextField}
        />
      </form>
    )
  }
}

const formOptions = {
  form: 'EventsNewForm',
  destroyOnUnmount: false
};

export default reduxForm(formOptions)(EventForm);
