import React from 'react';
import MyCalendar from '../components/myCalendar';

const scheduledTasks = [
  {
    title: 'Task 1',
    start: new Date(2023, 8, 10, 10, 0),
    end: new Date(2023, 8, 10, 12, 0),
  },
  {
    title: 'Task 2',
    start: new Date(2023, 8, 15, 14, 0),
    end: new Date(2023, 8, 25, 16, 0),
  },
  {
    title: 'Task 3',
    resource:"e34235",
    color:"red",
    notes:"Vinay",
    start: new Date(2023, 8, 20, 14, 0),
    end: new Date(2023, 8, 25, 16, 0),
  },
  // Add more scheduled tasks here
];

export default function  CalendarView() {
  return (
    <div>
      <h1>Scheduled Tasks Calendar</h1>
      <MyCalendar events={scheduledTasks} />
    </div>
  );
};

