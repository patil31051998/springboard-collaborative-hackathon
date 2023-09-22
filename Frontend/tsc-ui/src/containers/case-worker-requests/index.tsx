import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getCaseWorkerBeneficiaries,
  getInitialData,
  getRequestsForCaseWorker,
  updateApprovalStatus,
} from "../../services";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../services/context/globalContext";
import { ButtonGroup, Typography } from "@mui/material";

export default function CaseWorkerRequests() {
  const { userDetails } = useGlobalContext();
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("PENDING");
  const navigate = useNavigate();

  const updateUserApprovalStatus = (userId: string, approvalStatus: string) => {
    updateApprovalStatus(userId, approvalStatus);
    fetchData();
  };

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
      field: "need",
      headerName: "Need",
      flex: 1,
    },
    {
      field: "remark",
      headerName: "Remarks",
      flex: 1,
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
    },
    {
      field: "t",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              color="success"
              onClick={() =>
                updateUserApprovalStatus(params.row.id, "APPROVED")
              }
            >
              Approve
            </Button>
            <Button
              color="error"
              onClick={() =>
                updateUserApprovalStatus(params.row.id, "REJECTED")
              }
            >
              Reject
            </Button>
          </ButtonGroup>
        );
      },
    },
  ];

  const fetchData = () => {
    setLoading(true);
    getRequestsForCaseWorker()
      .then((response: any[]) => {
        const filteredRows = response.filter(
          (row) =>
            (filter === "PENDING" && row.approvalStatus === "PENDING") ||
            (filter === "REJECTED" && row.approvalStatus === "REJECTED")
        );
        setRows(filteredRows);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const handleFilterClick = (filterType: string) => {
    setFilter(filterType);
  };

  const handleRowDoubleClick = (params: any) => {
    // Log the row data when double-clicked
    navigate(`/tsc/beneficiaryDetails/${params.row.id}`);
  };

  const columnVisibility = React.useMemo(
    () => ({ t: filter === "PENDING" }),
    [filter]
  );

  return (
    <div className="Beneficiaries">
      <Typography variant="h5" gutterBottom>
        Requests
      </Typography>
      <div className="beneficiaries_filter_buttons">
        <div className="filter-button-group">
          <Button
            color="primary"
            variant={filter === "PENDING" ? "contained" : "outlined"}
            className={filter === "PENDING" ? "active-button" : ""}
            onClick={() => handleFilterClick("PENDING")}
          >
            Pending
          </Button>
          <Button
            color="primary"
            variant={filter === "REJECTED" ? "contained" : "outlined"}
            onClick={() => handleFilterClick("REJECTED")}
          >
            Rejected
          </Button>
        </div>
      </div>
      <div className="beneficiaries-grid">
        <Box sx={{ height: "100%", width: "100%" }}>
          {loading ? (
            <div className="loading">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          ) : (
            <DataGrid
              rows={rows}
              columns={columns}
              columnVisibilityModel={columnVisibility}
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
