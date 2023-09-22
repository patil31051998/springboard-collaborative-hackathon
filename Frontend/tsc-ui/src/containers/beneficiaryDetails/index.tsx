import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./beneficiaryDetails.css";
import { useParams } from "react-router-dom";
import { getInitialData } from "../../services";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { PrimaryDetails } from "../personalDetails";
import { UploadDocuments } from "../uploadDocuments";

const initialDocumentList = ["SSN", "Birth Certificate", "Drivers license"];
const mockServices = ["Bank account", "Eye checkup", "Therapist"];
const ScheduledTasks = [
  "Bank account appointment at 2 pm",
  "Eye checkup at 10 am",
  "Therapist at 4 pm",
];

export default function BeneficiaryDetails() {
  const { id } = useParams();
  const [basicInformation, setBasicInformation] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInitialData()
      .then((response: any) => {
        const info = response.filter((data: any) => data.id === id);
        setBasicInformation(info[0]);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <header>
        <h2>Beneficiary Details</h2>
      </header>
      {loading ? (
        <div className="loading">
          {" "}
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <Grid container spacing={2}>
          <Grid item className="beneficiary-details">
            <PrimaryDetails initialData={basicInformation} />
          </Grid>

          <Grid
            item
            className="beneficiary-documents"
            style={{ width: "100%" }}
          >
            <UploadDocuments initialDocumentList={initialDocumentList} />
          </Grid>
          <Grid
            item
            className="beneficiary-documents"
            style={{ width: "100%" }}
          >
            <Services initialServices={mockServices} />
          </Grid>
          <Grid
            item
            className="beneficiary-documents"
            style={{ width: "100%" }}
          >
            <TaskList initialTasks={ScheduledTasks} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

const Services = ({ initialServices }: any) => {
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

const TaskList = ({ initialTasks }: any) => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleUpload = () => {
    // You can implement your upload logic here.
    // For simplicity, we'll add a new document with a random name.
    const newTask = `Task ${Math.floor(Math.random() * 1000)}`;
    setTasks([...tasks, newTask]);
  };

  return (
    <Card>
      <CardContent>
        <div className="documents-card-header">
          <span>
            <h3>Scheduled tasks</h3>
          </span>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            style={{ marginLeft: "35%" }}
          >
            Add new task
          </Button>
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={6}
            style={{ height: "200px", maxHeight: "200px", overflowY: "scroll" }}
          >
            <ul>
              {tasks.map((service: any, index: any) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
