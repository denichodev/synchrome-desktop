import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import styles from './EventForm.css';

class EventForm extends Component {
  renderTextField = field => {
    // const { meta: { touched, error } } = field;
    // const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    const { label, name, input, placeholder, disabled } = field;

    return (
      <div className="form-group">
        <label htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          disabled={disabled}
          {...input}
        />
      </div>
    );
  };

  renderDatepicker = field => {
    const { input, label, name } = field;

    return (
      <div className="form-group">
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
          />  
        </div>  
      </div>
    )
  }

  getNumberList = max => {
    let array = [];
    for (let i = 1; i <= max; i++) {
      array.push(i);
    };
    return array;
  }

  render() {
    console.log(this.props.datepickerStart);

    return (
      <form>
        <Field
          label="Event Name"
          name="name"
          placeholder="Enter your event name here"
          component={this.renderTextField}
        />
        <div className="row">
          <div className="col-md-6">
            <Field
              label="Start Date"
              name="start"
              component={this.renderDatepicker}
            />
          </div>
          <div className="col-md-6">
            <Field
              label="End Date"
              name="end"
              component={this.renderDatepicker}
            />
          </div>  
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  datepickerStart: state.calendar.startDate,
  datepickerEnd: state.calendar.endDate
});

const formOptions = {
  form: 'EventsNewForm',
  destroyOnUnmount: false
};

export default reduxForm(formOptions)(connect(mapStateToProps)(EventForm));
