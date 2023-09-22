import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
type Props ={
events?: ({
    start: any;
} & {
    end: any;
})[] | undefined
}
const MyCalendar = ({ events }:Props) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}       
      />
    </div>
  );
};

export default MyCalendar;
