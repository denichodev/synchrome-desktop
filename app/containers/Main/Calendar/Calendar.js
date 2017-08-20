import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EventCalendar from './EventCalendar';
import EventForm from './EventForm';
import { calendarActions } from '../../../ducks/calendar';
import { eventFormActions } from '../../../ducks/eventForm';
import { eventActions } from '../../../ducks/event';

import styles from './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formEnabled: false,
      selectedCalendarId: 0
    };
  }

  componentDidMount() {
    const { fetchCalendar } = this.props;

    fetchCalendar();
  }

  handleSelection = (start, end) => {
    // Handle the selections of timerange in EventCalendar, start and end is a moment obj
    this.props.selectDateFromCalendar(start, end);
  };

  handleFormClick = () => {
    this.setState(prevState => {
      return {
        formEnabled: !prevState.formEnabled
      };
    });
  };

  renderCalendarList = () => {
    // TODO: List all fetched calendar
    const { calendars } = this.props;

    if (!calendars.length) { return; }

    return (
      <select onChange={this.handleCalendarPicked}>
        <option key={0} value={0}>Select Calendar</option>
        {this.props.calendars.map(calendar => {
          return <option key={calendar.id} value={calendar.id}>{calendar.name}</option>
        })}
      </select>
    );
  }

  handleCalendarPicked = e => {
    // TODO: FETCH EVENTS BASED ON CALENDAR ID PICKED
    const { fetchEvent } = this.props;
    const selectedCalendarId = e.target.value;
    this.setState({
      selectedCalendarId
    });
    fetchEvent(selectedCalendarId);
  }

  render() {
    const { calendars, events } = this.props;

    const eventsToShow = events[this.state.selectedCalendarId];

    const validRange = calendars.start
      ? {
          start: calendars.start,
          end: calendars.end
        }
      : null;

    return (
      <div className={`animated fadeIn ${styles.calendarContainer}`}>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Select Calendar
              </div>
              <div className="card-block">
                {calendars && this.renderCalendarList()}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Add New Event
                <label className="switch switch-sm switch-text switch-info float-right mb-0">
                  <input
                    type="checkbox"
                    className="switch-input"
                    onClick={this.handleFormClick}
                  />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </label>
              </div>
              <div className="card-block">
                <EventForm formEnabled={this.state.formEnabled} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-block">
                {eventsToShow &&
                  <EventCalendar
                    height={530}
                    displayEventTime={false}
                    selectable
                    events={eventsToShow}
                    handleSelection={this.handleSelection}
                    validRange={validRange}
                  />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calendars: state.calendar,
  events: state.event
});

const mapDispatchToProps = dispatch => ({
  fetchCalendar: () => dispatch(calendarActions.fetchCalendars()),
  fetchEvent: (calendarId) => dispatch(eventActions.fetchEvents(calendarId)),
  selectDateFromCalendar: (start, end) => {
    dispatch(eventFormActions.calendarDateSelected(start, end));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Calendar)
);
