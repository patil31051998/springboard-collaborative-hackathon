import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef,  } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import "./beneficiaries.css";
import { getCaseWorkerBeneficiaries, getInitialData } from "../../services";
import {  useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../services/context/globalContext";
import {
  Typography,
} from "@mui/material";

const columns: GridColDef[] = [
  { field: "cabinNo", headerName: "Cabin No.", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
  },
  {
    field: "mhProvider",
    headerName: "MH Provider",
    flex: 1,
  },
  {
    field: "sudProvider",
    headerName: "SUD Provider",
    flex: 1,
  },
  {
    field: "caseManagement",
    headerName: "Case Management",
    flex: 1,
  },
  {
    field: "need",
    headerName: "Need",
    flex: 1,
  },
  {
    field: "contact",
    headerName: "Contact",
    flex: 1,
  },
];

export default function CaseWorkerBeneficiaries() {
  const { userDetails } = useGlobalContext();
  const [rows, setRows] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeButton, setActiveButton] = useState(1);
  const navigate = useNavigate();

  const navigator = `${userDetails?.firstName} ${userDetails?.lastName}`;
  useEffect(() => {
    getCaseWorkerBeneficiaries()
      .then((response: any) => {
        setRows(response);
        setInitialRows(response);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleFilterClick = (filterType: string) => {
    if (filterType === "active") {
      const filtered = initialRows?.filter(
        (row: any) => !row?.isCompleted
      );
      setRows(filtered);
      setActiveButton(1);
    } else if (filterType === "completed") {
      const filtered = initialRows?.filter((row: any) => !!row?.isCompleted);
      setRows(filtered);
      setActiveButton(2);
    }
  };

  const handleRowDoubleClick = (params: any) => {
    // Log the row data when double-clicked
    navigate(`/tsc/beneficiaryDetails/${params.row.id}`);
  };

  return loading ? (
    <div className="loading">
      {" "}
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  ) : (
    <div className="Beneficiaries">
      <Typography variant="h5" gutterBottom>
        Assigned Beneficiaries
      </Typography>
      <div className="beneficiaries_filter_buttons">
        <div className="filter-button-group">
          <Button
            color="primary"
            variant={activeButton === 1 ? "contained" : "outlined"}
            className={activeButton === 1 ? "active-button" : ""}
            onClick={() => handleFilterClick("active")}
          >
            Active
          </Button>
          <Button
            color="primary"
            variant={activeButton === 2 ? "contained" : "outlined"}
            onClick={() => handleFilterClick("completed")}
          >
            Completed
          </Button>
        </div>
      </div>
      <div className="beneficiaries-grid">
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            onRowDoubleClick={handleRowDoubleClick}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}
