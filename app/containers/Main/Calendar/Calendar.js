// @flow
import React, { Component } from 'react';

import EventCalendar from './EventCalendar';

class Calendar extends Component {
  render() {
    return (
      <div className="animated fadein">
        <div className="col-md-12">
          <div className="card">
            <div className="card-block">
              <EventCalendar
                height={630}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
