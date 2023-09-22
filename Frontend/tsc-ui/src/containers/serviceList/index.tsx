import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  IconButton,
  Chip,
  Divider,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { blue, red } from "@mui/material/colors";
import CircleIcon from "@mui/icons-material/Circle";

export const ServiceList = ({ initialServices }: any) => {
  const [services, setServices] = useState(initialServices);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (serviceData: any) => {
    // You can send the service data to your API here
    console.log(serviceData);
    setServices([...services, serviceData]);
  };

  return (
    <Card>
      <CardHeader title="Services" />
      <CardContent>
        <Button
          variant="contained"
          onClick={handleOpenPopup}
          sx={{ marginBottom: "1rem" }}
        >
          Create new service
        </Button>
        <Divider />
        <CreateService
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          onSubmit={handleSubmit}
        />
        <span>
          <Typography variant="h6">All Services</Typography>
        </span>
        {services.map((service: any, index: any) => (
          <CommentAccordion key={service?.name + index} service={service} />
        ))}
      </CardContent>
    </Card>
  );
};

const CommentAccordion = ({ service }: any) => {
  const [comment, setComment] = useState("");
  const [activityLog, setActivityLog] = useState(service.activityLog || []);
  const [openDialog, setOpenDialog] = useState(false);
  const [editedService, setEditedService] = useState({
    organizationName: service.organizationName || "",
    status: "pending",
    supportingDocs: "pending",
    goal: "pending",
  });

  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() === "") {
      return; // Don't add empty comments
    }

    const newComment = {
      comment: comment,
      timeStamp: new Date().toLocaleString(), // You can format this date as needed
    };

    setActivityLog([...activityLog, newComment]);
    setComment("");
  };
  const handleEdit = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleEditFieldChange = (event: any) => {
    const { name, value } = event.target;
    setEditedService({
      ...editedService,
      [name]: value,
    });
  };

  const handleEditSubmit = () => {
    // Update the service object with edited data (you can implement the update logic here)
    // For example:
    // updateServiceData(service.id, editedService);

    // Close the dialog
    setOpenDialog(false);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div
          className="service-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography>
            <CircleIcon
              sx={{
                color: "#222",
                marginRight: "10px",
                fontSize: "10px",
              }}
            />{" "}
            Service Required: {service.serviceName}
          </Typography>

          <IconButton
            onClick={handleEdit}
            color="primary"
            sx={{ marginRight: "4rem" }}
          >
            <ModeEditOutlinedIcon />
          </IconButton>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="service-details">
          <ServiceDetailsCard serviceDetails={service} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <TextField
              label="Write a Comment..."
              variant="outlined"
              fullWidth
              value={comment}
              onChange={handleCommentChange}
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitComment}
              size="small"
              sx={{ marginLeft: "10px" }}
            >
              Comment
            </Button>
          </div>
          <div>
            <Typography variant="h6">Previous comments</Typography>

            <List>
              {activityLog?.map((activity: any, index: any) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CommentOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={activity?.comment} />
                  <Typography variant="caption">
                    {activity?.timeStamp?.toLocaleString()}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </AccordionDetails>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Service</DialogTitle>
        <DialogContent sx={{ justifyContent: "space-evenly" }}>
          <TextField
            label="Organization Name"
            name="organizationName"
            fullWidth
            value={editedService.organizationName}
            onChange={handleEditFieldChange}
            sx={{ margin: "10px 0" }}
          />
          <FormControl fullWidth sx={{ margin: "10px 0" }}>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={editedService.status}
              onChange={handleEditFieldChange}
            >
              {["Pending", "In Progress", "Done"].map((option: any) => (
                <MenuItem value="pending">Pending</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ margin: "10px 0" }} fullWidth>
            <InputLabel>Supporting Docs</InputLabel>
            <Select
              name="supportingDocs"
              value={editedService.supportingDocs}
              onChange={handleEditFieldChange}
            >
              {["Pending", "In Progress", "Done"].map((option: any) => (
                <MenuItem value="pending">Pending</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ margin: "10px 0" }} fullWidth>
            <InputLabel>Goal</InputLabel>
            <Select
              name="goal"
              value={editedService.goal}
              onChange={handleEditFieldChange}
            >
              {["Pending", "In Progress", "Done"].map((option: any) => (
                <MenuItem value="pending">Pending</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={handleEditSubmit}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Accordion>
  );
};

export default CommentAccordion;

const ServiceDetailsCard = ({ serviceDetails }: any) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Case Worker ID
            </Typography>
            <Typography>{serviceDetails?.caseWorkerID}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Organization Name
            </Typography>
            <Typography>{serviceDetails?.organizationName}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Status
            </Typography>
            <Typography>{serviceDetails?.status}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Consent
            </Typography>
            <Typography component="div">
              {serviceDetails?.consent?.join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Supporting Docs
            </Typography>
            <Typography component="div">
              {serviceDetails?.supportingDocs?.join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Goal
            </Typography>
            <Chip label="Chip Filled" />
            <Typography>{serviceDetails?.goal}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const CreateService = ({ isOpen, onClose, onSubmit }: any) => {
  const [service, setService] = useState({
    status: "pending",
    supportingDocs: [],
    goal: "pending",
    serviceName: "",
    organizationName: [],
    consent: [],
    serviceId: Math.random().toString(36).substr(2, 9),
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setService({
      ...service,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(service);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Service</DialogTitle>
      <DialogContent>
        <TextField
          label="Service Name"
          name="serviceName"
          fullWidth
          value={service.serviceName}
          onChange={handleChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Organization Name</InputLabel>
          <Select
            name="organizationName"
            value={service.organizationName}
            onChange={handleChange}
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select name="status" value={service.status} onChange={handleChange}>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Supporting Docs</InputLabel>
          <Select
            name="supportingDocs"
            value={service.supportingDocs}
            onChange={handleChange}
            multiple
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Concent</InputLabel>
          <Select
            name="consent"
            value={service.consent}
            onChange={handleChange}
            multiple
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Goal</InputLabel>
          <Select name="goal" value={service.goal} onChange={handleChange}>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
