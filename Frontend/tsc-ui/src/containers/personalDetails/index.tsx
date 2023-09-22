import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const PrimaryDetails = ({ initialData, isEditMode }: any) => {
  const [isEditing, setIsEditing] = useState(isEditMode);
  const [data, setData] = useState(initialData);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can add code here to save the edited data
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const disabledInputStyles = {
    backgroundColor: "#f0f0f0", // Background color for disabled inputs
    opacity: "1", // Adjust opacity as needed
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">Personal Information</Typography>
            <TextField
              sx={{ marginTop: "1rem" }}
              label="ID"
              name="id"
              value={data?.id}
              fullWidth
              disabled={true}
              onChange={handleInputChange}
              inputProps={{ style: disabledInputStyles }}
            />
            <TextField
              sx={{ marginTop: "1rem" }}
              label="First Name"
              name="firstName"
              value={data?.firstName}
              fullWidth
              disabled={!isEditing}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ marginTop: "1rem" }}
              label="Last Name"
              name="lastName"
              value={data?.lastName}
              fullWidth
              disabled={!isEditing}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ marginTop: "1rem" }}
              label="Gender"
              name="gender"
              value={data?.gender}
              fullWidth
              disabled={!isEditing}
              onChange={handleInputChange}
            />

            <TextField
              sx={{ marginTop: "1rem" }}
              label="Contact"
              name="contact"
              value={data?.contact}
              fullWidth
              disabled={!isEditing}
              onChange={handleInputChange}
            />

            <TextField
              sx={{ marginTop: "1rem" }}
              label="Age"
              name="age"
              value={data?.age}
              fullWidth
              disabled={!isEditing}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ marginTop: "3rem" }}
              label="Cabin No"
              name="cabinNo"
              value={data?.cabinNo}
              fullWidth
              disabled={!isEditing}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ marginTop: "1rem" }}
              label="MH Provider"
              name="mhProvider"
              value={data?.mhProvider}
              fullWidth
              disabled={true}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ marginTop: "1rem" }}
              label="SUD Provider"
              name="sudProvider"
              value={data?.sudProvider}
              fullWidth
              disabled={true}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ marginTop: "1rem" }}
              label="Case Management"
              name="caseManagement"
              value={data?.caseManagement}
              fullWidth
              disabled={!isEditing}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ marginTop: "1rem" }}
              label="Need"
              name="need"
              value={data?.need?.toString(", ")}
              fullWidth
              disabled={!isEditing}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button
          sx={{ marginTop: "1rem", marginLeft: "90%" }}
          variant="contained"
          color="primary"
          onClick={isEditing ? handleSaveClick : handleEditClick}
        >
          {isEditing ? "Save details" : "Edit details"}
        </Button>
      </CardContent>
    </Card>
  );
};
