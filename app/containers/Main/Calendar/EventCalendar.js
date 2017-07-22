import React, { Component } from 'react';
import $ from 'jquery';
import 'moment';
import 'fullcalendar/dist/fullcalendar';
import styles from './EventCalendar.css';

class EventCalendar extends Component {

  static defaultProps = {
    defaultView: 'month',
    displayEventTime: 'false'
  }

  componentDidMount() {
    const { defaultView, height, header, events, displayEventTime } = this.props;

    $('#calendar').fullCalendar({
      defaultView,
      height,
      header,
      events,
      displayEventTime,
      selectable: true,
      select: this.handleSelection
    });
  }

  handleSelection = (start, end) => {
  }

  render() {
    return (
      <div id="calendar" className={styles.fullCalendar} />
    );
  }
}

export default EventCalendar;
