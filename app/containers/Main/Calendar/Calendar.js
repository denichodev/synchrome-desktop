import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EventCalendar from './EventCalendar';
import EventForm from './EventForm';
import { calendarActions } from '../../../ducks/calendar';
import { eventFormActions } from '../../../ducks/eventForm';

import styles from './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formEnabled: false
    };
  }

  componentDidMount() {
    const { fetchCalendar } = this.props;

    fetchCalendar();
  }

  normalizeEvents = data => {
    let events = [];
    data.map(event => {
      events.push({
        id: event.id,
        title: event.name,
        start: event.start,
        end: event.end,
        color: event.category.color,
        textColor: event.category.text_color
      });
    });
    return events;
  };

  handleSelection = (start, end) => {
    // Handle the selections of timerange in EventCalendar, start and end is a moment obj
    this.props.selectDateFromCalendar(start, end);
  };

  handleFormClick = () => {
    this.setState((prevState) => {
      return {
        formEnabled: !prevState.formEnabled
      }
    });
  };

  render() {
    const { calendar } = this.props;

    const validRange = calendar.start
      ? {
        start: calendar.start,
        end: calendar.end
        }
      : null;

    const events = calendar.events
      ? this.normalizeEvents(calendar.events)
      : null;

    return (
      <div className={`animated fadeIn ${styles.calendarContainer}`}>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-block">
                {events &&
                  <EventCalendar
                    height={530}
                    displayEventTime={false}
                    selectable={true}
                    events={events}
                    handleSelection={this.handleSelection}
                    validRange={validRange}
                  />}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calendar: state.calendar
});

const mapDispatchToProps = dispatch => ({
  fetchCalendar: () => dispatch(calendarActions.fetchCalendar()),
  selectDateFromCalendar: (start, end) => {
    dispatch(eventFormActions.calendarDateSelected(start, end));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Calendar)
);
