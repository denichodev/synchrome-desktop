// @flow
import React, { Component } from 'react';
import $ from 'jquery';
import 'moment';
import 'fullcalendar/dist/fullcalendar';
import styles from './EventCalendar.css';

class EventCalendar extends Component {
  props: {
    defaultView?: string,
    height: number,
    header?: {
      left?: string,
      center?: string,
      right?: string
    },
    events: []
  }

  static defaultProps = {
    defaultView: 'month'
  }

  componentDidMount() {
    // this.props.fetchEvents();

    const { defaultView, height, header, events } = this.props;

    $('#calendar').fullCalendar({
      defaultView,
      height,
      header,
      events,
      selectable: true,
      select: this.handleSelection
    });
  }

  handleSelection = (start, end) => {
    console.log('start', start);
    console.log('end', end);
  }

  render() {
    return (
      <div id="calendar" className={styles.fullCalendar} />
    );
  }
}

export default EventCalendar;
