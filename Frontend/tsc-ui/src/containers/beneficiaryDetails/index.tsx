import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./beneficiaryDetails.css";

const mockData = {
  firstName: "Darla",
  lastName: "Prince",
  id: "6509c54e315e671ebe94a8b0",
  cabinNo: 35,
  isActive: true,
  age: 25,
  eyeColor: "blue",
  gender: "female",
  contact: "+1 (854) 580-3085",
  navigator: "Misty Hayes",
  mhProvider: ["qui"],
  sudProvider: ["id"],
  need: ["eiusmod", "excepteur"],
  caseManagement: "manage case",
};
const initialDocumentList = ["SSN", "Birth Certificate", "Drivers license"];
const mockServices = ["Bank account", "Eye checkup", "Therapist"];
const ScheduledTasks = [
  "Bank account appointment at 2 pm",
  "Eye checkup at 10 am",
  "Therapist at 4 pm",
];
export default function BeneficiaryDetails() {
  return (
    <div>
      <header>
        <h2>Beneficiary Details</h2>
      </header>
      <Grid container spacing={2}>
        <Grid item className="beneficiary-details">
          <PrimaryDetails data={mockData} />
        </Grid>
        <Grid item className="beneficiary-documents" style={{ width: "100%" }}>
          <Documents initialDocumentList={initialDocumentList} />
        </Grid>
        <Grid item className="beneficiary-documents" style={{ width: "100%" }}>
          <Services initialServices={mockServices} />
        </Grid>
        <Grid item className="beneficiary-documents" style={{ width: "100%" }}>
          <TaskList initialTasks={ScheduledTasks} />
        </Grid>
      </Grid>
    </div>
  );
}

const PrimaryDetails = ({ data }: any) => {
  const labelDataPairs = Object.entries(data);
  return (
    <div className="primary-details">
      <Card>
        <CardContent>
          <div className="card-header">
            <h3>Primary Details</h3>
          </div>
          <Grid container spacing={2}>
            {labelDataPairs.map(([label, value], index) => (
              <Grid item xs={4} key={index}>
                <Typography variant="body1">
                  <>
                    {label}: {value}
                  </>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const Documents = ({ initialDocumentList }: any) => {
  const [documentList, setDocumentList] = useState(initialDocumentList);

  const handleUpload = () => {
    // You can implement your upload logic here.
    // For simplicity, we'll add a new document with a random name.
    const newDocumentName = `Document ${Math.floor(Math.random() * 1000)}`;
    setDocumentList([...documentList, newDocumentName]);
  };

  return (
    <Card>
      <CardContent>
        <div className="documents-card-header">
          <span>
            <h3>Documents</h3>
          </span>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            style={{ marginLeft: "40%" }}
          >
            Upload
          </Button>
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={6}
            style={{ height: "200px", maxHeight: "200px", overflowY: "scroll" }}
          >
            <ul>
              {documentList.map((document: any, index: any) => (
                <li key={index}>{document}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

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
