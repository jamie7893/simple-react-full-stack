import React, { Component } from 'react';
import './app.css';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events';
import * as dates from './dates';

let allViews = Object.keys(Views).map(k => Views[k]);

const localizer = momentLocalizer(moment);
const myEventsList = [];
const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'grey'
    }
  });
const MyCalendar = props => (
  <div>
    <Calendar
      events={events}
      views={allViews}
      step={60}
      showMultiDayTimes
      max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
      defaultDate={new Date()}
      components={{
        timeSlotWrapper: ColoredDateCellWrapper
      }}
      localizer={localizer}
    />
  </div>
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <div id="calendar">
        <MyCalendar />
      </div>
    );
  }
}
