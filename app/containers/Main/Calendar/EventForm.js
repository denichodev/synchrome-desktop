import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import styles from './EventForm.css';

class EventForm extends Component {
  renderTextField = field => {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    const { label, name, input, placeholder, formEnabled } = field;
    return (
      <div className={className}>
        <label htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          disabled={!formEnabled}
          {...input}
        />
      </div>
    );
  };

  renderDatepicker = field => {
    console.log(field);
    const { meta: { pristine, error } } = field;
    const className = `form-group ${!pristine && error ? 'has-danger' : ''}`;
    const { input, label, name, formEnabled } = field;

    return (
      <div className={className}>
        <label htmlFor={name}>
          {label}
        </label>
        <div className={styles.datepickerContainer}>
          <DatePicker
            selected={input.value}
            onChange={input.onChange}
            className={`form-control ${styles.datePicker}`}
            minDate={moment(this.props.datepickerStart).add(1, 'days')}
            maxDate={moment(this.props.datepickerEnd).add(1, 'days')}
            disabled={!formEnabled}
          />
        </div>
      </div>
    );
  };

  getNumberList = max => {
    const array = [];
    for (let i = 1; i <= max; i += 1) {
      array.push(i);
    }
    return array;
  };

  render() {
    const { formEnabled } = this.props;

    return (
      <form>
        <Field
          label="Event Name"
          name="name"
          placeholder="Enter your event name here"
          component={this.renderTextField}
          formEnabled={formEnabled}
        />
        <div className="row">
          <div className="col-md-6">
            <Field
              label="Start Date"
              name="start"
              component={this.renderDatepicker}
              formEnabled={formEnabled}
            />
          </div>
          <div className="col-md-6">
            <Field
              label="End Date"
              name="end"
              component={this.renderDatepicker}
              formEnabled={formEnabled}
            />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  datepickerStart: state.calendar.start,
  datepickerEnd: state.calendar.end
});

const validate = values => {
  const errors = {};

  if (moment(values.end).isBefore(values.start)) {
    errors.end = 'End date is before start';
  }

  return errors;
};

const formOptions = {
  form: 'EventsNewForm',
  enableReinitialize: true,
  validate
};

export default reduxForm(formOptions)(connect(mapStateToProps)(EventForm));
