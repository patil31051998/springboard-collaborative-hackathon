import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./beneficiaryDetails.css";
import { useParams } from "react-router-dom";
import { getAllServices, getInitialData } from "../../services";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { PrimaryDetails } from "../personalDetails";
import { UploadDocuments } from "../uploadDocuments";
import { TaskListForBeneficiary } from "../taskListForBeneficiary";
import { ServiceList } from "../serviceList";

const initialDocumentList = ["SSN", "Birth Certificate", "Drivers license"];
const mockServices = ["Bank account", "Eye checkup", "Therapist"];
const scheduledTasks = [
  {
    id: "650c7af5de434511c5622ad9",
    beneficiaryId: "650c7af5ea6ee8d6ddc93460",
    navigatorId: "650c7af5ccabf664089dc4cc",
    startTime: "10:00 am",
    endTime: "02:30 pm",
    description: "Doctor Visit ",
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
];

export default function BeneficiaryDetails() {
  const { id } = useParams();
  const [basicInformation, setBasicInformation] = useState<any>();
  const [services, setServices] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === "newBeneficiary") {
      setBasicInformation({
        id: Date.now(),
      });
      setLoading(false);
    } else {
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

      getAllServices("navid", "beniId")
        .then((response: any) => {
          setServices(response);
        })
        .catch((error: any) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
            <PrimaryDetails
              initialData={basicInformation}
              isEditMode={id === "newBeneficiary"}
            />
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
            <ServiceList initialServices={services} />
          </Grid>
          <Grid
            item
            className="beneficiary-documents"
            style={{ width: "100%" }}
          >
            <TaskListForBeneficiary
              initialTasks={scheduledTasks}
              beneficiaryId={basicInformation?.id}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
