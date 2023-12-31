import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import AddIcon from "@mui/icons-material/Add";
import "./beneficiaries.css";
import { assignToBeneficiary, getInitialData } from "../../services";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../services/context/globalContext";
import { Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { blue, red } from "@mui/material/colors";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function NavigatorBeneficiaries() {
  const { userDetails } = useGlobalContext();
  const [rows, setRows] = useState<any[]>([]);
  const [initialRows, setInitialRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");
  const navigate = useNavigate();

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
      valueFormatter: (params) => params.value.join(","),
      flex: 1,
    },
    // {
    //   field: "contact",
    //   headerName: "Contact",
    //   flex: 1,
    // },
    {
      field: "navigator",
      headerName: "Navigator",
      flex: 1,
      renderCell: (params) => {
        const { navigatorID, id } = params.row;
        const handleAssignNavigator = () => {
          assignToBeneficiary(
            id,
            userDetails?.userID,
            userDetails?.firstName + " " + userDetails?.lastName
          ).then(() => {
            fetchData();
          }).catch(console.error);
        };
        return navigatorID ? (
          <div>{navigatorID}</div>
        ) : (
          <Button
            style={{
              backgroundColor: "purple",
              color: "white",
            }}
            size="small"
            onClick={handleAssignNavigator}
          >
            Assign to me
          </Button>
        );
      },
    },
  ];

  const fetchData = () => {
    setLoading(true);
    getInitialData()
      .then((response: any) => {
        setRows(filterRows(response, filter));
        setInitialRows(response);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterRows = (rows: any[], filterType: string) => {
    return rows.filter((row) => {
      if (filterType === "ASSIGNED") {
        return row?.navigatorID === userDetails?.userID;
      }
      if (filterType === "UNASSIGNED") {
        return row?.navigatorID === "";
      }
      return true;
    });
  };

  const handleFilterClick = (filterType: string) => {
    setFilter(filterType);
    setRows(filterRows(initialRows, filterType));
  };

  const handleRowDoubleClick = (params: any) => {
    // Log the row data when double-clicked
    navigate(`/tsc/beneficiaryDetails/${params.row.id}`);
  };

  const handleAddNewBeneficiary = () => {
    navigate("/tsc/beneficiaryDetails/newBeneficiary");
  };

  return (
    <div className="Beneficiaries">
      <Typography variant="h5" gutterBottom>
        <div
          className="beneficiaries-header"
          style={{ display: "flex", alignItems: "center" }}
        >
          Beneficiaries
          <Tooltip
            title="Double click on row to view details"
            placement="bottom"
          >
            <InfoOutlinedIcon sx={{ color: blue[500], marginLeft: "10px" }} />
          </Tooltip>
        </div>
      </Typography>
      <div className="beneficiaries_filter_buttons">
        <div className="filter-button-group">
          <Button
            color="primary"
            variant={filter === "ALL" ? "contained" : "outlined"}
            className={filter === "ALL" ? "active-button" : ""}
            onClick={() => handleFilterClick("ALL")}
          >
            All
          </Button>
          <Button
            color="primary"
            variant={filter === "ASSINGED" ? "contained" : "outlined"}
            onClick={() => handleFilterClick("ASSIGNED")}
          >
            My Beneficiaries
          </Button>
          <Button
            color="primary"
            variant={filter === "UNASSINGED" ? "contained" : "outlined"}
            onClick={() => handleFilterClick("UNASSIGNED")}
          >
            Unassigned
          </Button>
        </div>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={handleAddNewBeneficiary}
        >
          Add new Beneficiary
        </Button>
      </div>
      <div className="beneficiaries-grid">
        <Box sx={{ height: "100%", width: "100%" }}>
          {loading ? (
            <div className="loading">
              {" "}
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          ) : (
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
          )}
        </Box>
      </div>
    </div>
  );
}
