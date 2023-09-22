import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ScheduledTasks } from '../types/task';

const localizer = momentLocalizer(moment);
type Props ={
events?: any
}

const eventStyleGetter = (event: ScheduledTasks) => {
    const style = {
      backgroundColor: event.color, // Set the background color based on the event's color property
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '1px solid #ccc',
      display: 'block',
    };
    return {
      style,
    };
  };
  
const MyCalendar = ({ events }:Props) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}    
        eventPropGetter={eventStyleGetter}   
      />
    </div>
  );
};

export default MyCalendar;
