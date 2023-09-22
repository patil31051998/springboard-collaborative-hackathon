import React, { useEffect } from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";

import {
  DescriptionOutlined,
  AccessTime,
  AccessTimeOutlined,
} from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./taskList.css";

const tasks = [
  {
    id: "650c7af5de434511c5622ad9",
    beneficiaryId: "650c7af5ea6ee8d6ddc93460",
    navigatorId: "650c7af5ccabf664089dc4cc",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "sunt cupidatat aute minim ullamco",
  },
  {
    id: "650c7af58b35fed0c5d7d9ff",
    beneficiaryId: "650c7af5e3761f0eb2baf1d1",
    navigatorId: "650c7af5962012ff903bebf2",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "magna non id anim labore",
  },
  {
    id: "650c7af5ea29c101e0544cf6",
    beneficiaryId: "650c7af5c693428ddfbfd10c",
    navigatorId: "650c7af5b89cf07674e30d4c",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "excepteur officia commodo qui nulla",
  },
  {
    id: "650c7af52602fbb2a98bf5cf",
    beneficiaryId: "650c7af5734429b7e6d7042b",
    navigatorId: "650c7af55f9212e28c2dfe1c",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "cupidatat quis in nisi eiusmod",
  },
  {
    id: "650c7af515cdc8e13a368615",
    beneficiaryId: "650c7af5338536b066be0e93",
    navigatorId: "650c7af5bff9510e71343e5e",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "nulla mollit deserunt ullamco ad",
  },
  {
    id: "650c7af561328adb6734ef34",
    beneficiaryId: "650c7af510eeff7f32f01888",
    navigatorId: "650c7af5bbed04edc08837cd",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "tempor anim aute sunt eiusmod",
  },
  {
    id: "650c7af524db73537cb24f8e",
    beneficiaryId: "650c7af5856eabde72d739a1",
    navigatorId: "650c7af598c2eb44eef58328",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "fugiat minim reprehenderit ea ipsum",
  },
  {
    id: "650c7af5023f3855e131f789",
    beneficiaryId: "650c7af595ed66f948519737",
    navigatorId: "650c7af561b364141ea35ae0",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "consectetur enim ad id incididunt",
  },
  {
    id: "650c7af54c7fa3e0f5e3f4f5",
    beneficiaryId: "650c7af5a28b3c8ae7ac9120",
    navigatorId: "650c7af5940c3a3d755fc1d9",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "magna ea qui occaecat reprehenderit",
  },
  {
    id: "650c7af5d2fa1ef61a9fff2e",
    beneficiaryId: "650c7af5b1b0c52f5eaeaad5",
    navigatorId: "650c7af511caaec43c21c284",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "labore voluptate ipsum laboris ut",
  },
];

export default function TaskList() {
  return (
    <div>
      <div className="task-list-header">
        <Avatar
          sx={{ color: blue[500], bgcolor: "#fff", marginRight: "1rem" }}
          variant="rounded"
        >
          <AssignmentIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Task List
        </Typography>
      </div>
      <List>
        {tasks.map((item) => (
          <div key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <DescriptionOutlined />
              </ListItemIcon>
              <ListItemText
                primary={` Beneficiary ID: ${item.beneficiaryId}`}
                secondary={
                  <>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Description: {item.description}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Start Time: {item.startTime}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                      sx={{ marginLeft: "2rem" }}
                    >
                      End Time: {item.endTime}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </div>
  );
}
