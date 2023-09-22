import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const ServiceList = ({ initialServices }: any) => {
  const [services, setServices] = useState(initialServices);

  const handleUpload = () => {
    // You can implement your upload logic here.
    // For simplicity, we'll add a new document with a random name.
    const newService = `Service ${Math.floor(Math.random() * 1000)}`;
    setServices([...services, newService]);
  };

  return (
    <Card>
      <CardContent>
        <div className="documents-card-header">
          <span>
            <h3>Services</h3>
          </span>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            style={{ marginLeft: "35%" }}
          >
            Add new service
          </Button>
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={6}
            style={{ height: "200px", maxHeight: "200px", overflowY: "scroll" }}
          >
            <ul>
              {services.map((service: any, index: any) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
