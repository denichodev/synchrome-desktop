// @flow
import React, { Component } from 'react';

import EventCalendar from './EventCalendar';

class Calendar extends Component {
  render() {
    return (
      <div className="animated fadein">
        <div className="col-md-12">
          <div className="card card-inverse card-primary">
            <div className="card-header">Calendar</div>
            <div className="card-block">
              <EventCalendar
                width={'100%'}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
