// @flow
import React, { Component } from 'react';

import EventCalendar from './EventCalendar';
import { generateEvents } from './eventPlaceholder';


class Calendar extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-md-12">
          <div className="card">
            <div className="card-block">
              <EventCalendar
                height={530}
                events={generateEvents()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
