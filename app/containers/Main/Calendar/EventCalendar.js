// @flow

import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import events from './eventPlaceholder';

class EventCalendar extends Component {
  props: {
    height: number,
    width: number | '100%'
  }

  render() {
    BigCalendar.momentLocalizer(moment);
    const allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

    return (
      <div style={{
        height: this.props.height,
        width: this.props.width
      }}
      >
        <BigCalendar
          events={events}
          views={allViews}
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    );
  }
}

export default EventCalendar;
