// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EventCalendar from './EventCalendar';
import EventForm from './EventForm';
import { generateEvents } from './eventPlaceholder';
import { calendarActions } from '../../../ducks/calendar';
import { eventFormActions } from '../../../ducks/eventForm';

import styles from './Calendar.css';

class Calendar extends Component {
  componentDidMount() {
    const { fetchCalendar } = this.props;

    fetchCalendar();
  }

  normalizeEvents = data => {
    let events = [];
    data.map(event => {
      events.push({
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        color: event.category.color,
        textColor: event.category.textColor,
      });
    });
    return events;
  }

  handleSelection = (start, end) => {
    // Handle the selections of timerange in EventCalendar, start and end is a moment obj
    const startAt = start.format('YYYY-M-D');
    const endAt = end.format('YYYY-M-D');

    this.props.addEventFromDate(startAt, endAt);
  }
  
  render() {
    const { calendar } = this.props;

    const events = (calendar.events ? this.normalizeEvents(calendar.events) : null);

    return (
      <div className={`animated fadeIn ${styles.calendarContainer}`}>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-block">
                {events && (
                  <EventCalendar
                    height={530}
                    displayEventTime={false}
                    selectable={true}
                    events={events}
                    handleSelection={this.handleSelection}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                Add New Event
              </div>
              <div className="card-block">
                <EventForm />
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calendar: state.calendar
})

const mapDispatchToProps = dispatch => ({
  fetchCalendar: () => dispatch(calendarActions.fetchCalendar()),
  addEventFromDate: (start, end) => {
    dispatch(eventFormActions.calendarDateSelected(start, end));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Calendar));
