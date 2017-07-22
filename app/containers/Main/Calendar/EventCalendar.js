import React, { Component } from 'react';
import $ from 'jquery';
import 'moment';
import 'fullcalendar/dist/fullcalendar';
import styles from './EventCalendar.css';

class EventCalendar extends Component {

  static defaultProps = {
    defaultView: 'month',
    displayEventTime: 'false',
    selectable: false,
    handleSelection: (start, end) => {
      console.log(start, end);
    }
  }

  componentDidMount() {
    const { defaultView, height, header, events, displayEventTime, selectable, handleSelection } = this.props;

    $('#calendar').fullCalendar({
      defaultView,
      height,
      header,
      events,
      displayEventTime,
      selectable,
      select: handleSelection
    });
  }

  render() {
    return (
      <div id="calendar" className={styles.fullCalendar} />
    );
  }
}

export default EventCalendar;
