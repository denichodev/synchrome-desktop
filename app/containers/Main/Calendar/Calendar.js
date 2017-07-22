// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EventCalendar from './EventCalendar';
import { generateEvents } from './eventPlaceholder';
import { fetchCalendar } from '../../../ducks/calendar';

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
    this.props.history.push(`/event/create/${startAt}/${endAt}`);
  }
  
  render() {
    const { calendar } = this.props;

    return (
      <div className="animated fadeIn">
        <div className="col-md-12">
          <div className="card">
            <div className="card-block">
              {calendar.events && (
                <EventCalendar
                  height={530}
                  displayEventTime={false}
                  selectable={true}
                  events={this.normalizeEvents(calendar.events)}
                  handleSelection={this.handleSelection}
                />
              )}
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
  fetchCalendar: () => dispatch(fetchCalendar())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Calendar));
