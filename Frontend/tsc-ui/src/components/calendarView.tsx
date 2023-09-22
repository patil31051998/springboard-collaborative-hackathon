import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { ScheduledTasks } from "../types/task";
import MyCalendar from "./myCalendar";

export default function CalendarView({ tasks }: { tasks?: ScheduledTasks[] }) {
  return (<div>
      <Typography variant="h5" gutterBottom>
        My scheduled tasks
      </Typography>
      {!tasks ? (
    <div className="loading">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  ) : (
      <MyCalendar events={tasks} />)}
    </div>
  );
}
