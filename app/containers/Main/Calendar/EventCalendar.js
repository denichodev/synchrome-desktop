// @flow
import React, { Component } from 'react';
import $ from 'jquery';
import 'moment';
import 'fullcalendar/dist/fullcalendar';
import styles from './EventCalendar.css';

import { generateEvents } from './eventPlaceholder';

class EventCalendar extends Component {
  props: {
    defaultView?: string,
    height: number,
    header?: {
      left?: string,
      center?: string,
      right?: string
    }
  }

  static defaultProps = {
    defaultView: 'month',
  }

  componentDidMount() {
    // this.props.fetchEvents();

    const { defaultView, height, header } = this.props;

    const events = generateEvents();
    console.log(events);

    $('#calendar').fullCalendar({
      defaultView,
      height,
      header,
      events: generateEvents()
    });
  }

  render() {
    return (
      <div id="calendar" className={styles.fullCalendar} />
    );
  }
}

export default EventCalendar;
