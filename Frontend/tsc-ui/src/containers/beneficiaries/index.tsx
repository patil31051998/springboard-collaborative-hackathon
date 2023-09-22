import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import AddIcon from "@mui/icons-material/Add";
import "./beneficiaries.css";
import { getInitialData } from "../../services";

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
  {
    field: "navigator",
    headerName: "Navigator",
    flex: 1,
  },
];

export default function Beneficiaries() {
  const [rows, setRows] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeButton, setActiveButton] = useState(1);

  const navigator = "Sarah Walton";
  useEffect(() => {
    getInitialData()
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
    if (filterType === "assigned") {
      const filtered = initialRows?.filter(
        (row: any) => row?.navigator === navigator
      );
      setRows(filtered);
      setActiveButton(2);
    } else if (filterType === "unassigned") {
      const filtered = initialRows?.filter((row: any) => row?.navigator === "");
      setRows(filtered);
      setActiveButton(3);
    } else {
      setRows(initialRows);
      setActiveButton(1);
    }
  };

  const handleRowDoubleClick = (params: any) => {
    // Log the row data when double-clicked
    console.log("Double-clicked row:", params.row);
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
      <h1>Beneficiaries</h1>
      <div className="beneficiaries_filter_buttons">
        <div className="filter-button-group">
          <Button
            color="primary"
            variant={activeButton === 1 ? "contained" : "outlined"}
            className={activeButton === 1 ? "active-button" : ""}
            onClick={() => handleFilterClick("all")}
          >
            All
          </Button>
          <Button
            color="primary"
            variant={activeButton === 2 ? "contained" : "outlined"}
            onClick={() => handleFilterClick("assigned")}
          >
            Assigned to me
          </Button>
          <Button
            color="primary"
            variant={activeButton === 3 ? "contained" : "outlined"}
            onClick={() => handleFilterClick("unassigned")}
          >
            Unassigned
          </Button>
        </div>
        <Button variant="contained" endIcon={<AddIcon />}>
          Add Beneficiary
        </Button>
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
