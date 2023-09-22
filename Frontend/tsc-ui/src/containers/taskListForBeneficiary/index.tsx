import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleIcon from "@mui/icons-material/Circle";
import { blue, red } from "@mui/material/colors";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Divider } from "@mui/material";

export const TaskListForBeneficiary = ({
  initialTasks,
  beneficiaryId,
}: any) => {
  const [tasks, setTasks] = useState([...initialTasks]);

  const addTask = (newTask: any) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: any) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCard
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        beneficiaryId={beneficiaryId}
      />
    </div>
  );
};

const TaskCard = ({ tasks, addTask, deleteTask, beneficiaryId }: any) => {
  const [newTask, setNewTask] = useState({
    beneficiaryId: "",
    navigatorId: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    // Generate a random ID (you can use a more robust method)
    const id = Math.random().toString(36).substr(2, 9);
    const taskWithId = { ...newTask, id };

    // Call the API here (you should replace this with your actual API call)
    // For example:
    // apiCallToAddTask(taskWithId);

    // Add the task to the list
    addTask(taskWithId);

    // Reset the input fields
    setNewTask({
      beneficiaryId: beneficiaryId,
      navigatorId: "",
      startTime: "",
      endTime: "",
      description: "",
    });
  };

  return (
    <Card variant="outlined" sx={{ maxHeight: "30rem", marginBottom: "1rem" }}>
      <CardContent>
        <div className="tasks-header" style={{ display: "flex" }}>
          <Typography variant="h6">Add new task </Typography>
          <Tooltip
            title="Add new tasks and keep track of task assigned here"
            placement="bottom"
          >
            <InfoOutlinedIcon
              sx={{ color: blue[500], marginLeft: "10px", marginTop: "5px" }}
            />
          </Tooltip>
        </div>
        <div
          className="task-input"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "10px 0",
          }}
        >
          <TextField
            size="small"
            label="Navigator ID"
            name="navigatorId"
            value={newTask.navigatorId}
            onChange={handleInputChange}
          />
          <TextField
            size="small"
            label="Start Time"
            name="startTime"
            value={newTask.startTime}
            onChange={handleInputChange}
          />
          <TextField
            size="small"
            label="End Time"
            name="endTime"
            value={newTask.endTime}
            onChange={handleInputChange}
          />
          <TextField
            size="small"
            label="Description"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
          <Button variant="contained" onClick={handleAddTask}>
            Add Task
          </Button>
        </div>
        <Divider />
        <div className="task" style={{ maxHeight: "50rem" }}>
          <Typography variant="h6">Upcoming Tasks </Typography>
          {tasks.map((task: any) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ width: "50rem" }}>
                <CircleIcon
                  sx={{
                    color: "#222",
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                />{" "}
                {task.description} From : {task.startTime} To: {task.endTime}
              </Typography>

              <IconButton onClick={() => deleteTask(task.id)}>
                <DeleteIcon sx={{ color: red[500] }} />
              </IconButton>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
