import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useRef } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { blue, red } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import { Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Tooltip from "@mui/material/Tooltip";

export const UploadDocuments = ({
  initialDocumentList,
  isUserNavigator,
}: any) => {
  const [documents, setDocuments] = useState<string[]>([
    ...initialDocumentList,
  ]);
  const [newDocument, setNewDocument] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleUploadClick = () => {
    if (selectedFile) {
      const name = newDocument || selectedFile?.name;
      setDocuments([...documents, name]);
      setNewDocument("");
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setNewDocument(file.name);
    }
  };

  const handleRemoveDocument = (index: any) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  const handleOpenDocument = (index: any) => {
    console.log("open document");
  };

  return (
    <Card>
      <CardHeader title="Document Upload" />
      <CardContent>
        {isUserNavigator && (
          <>
            <Grid
              container
              spacing={3}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ marginBottom: "10px" }}
            >
              <Grid item xs>
                <TextField
                  label="Document Name"
                  fullWidth
                  value={newDocument}
                  onChange={(e) => setNewDocument(e.target.value)}
                  size="small"
                />
                <input
                  type="file"
                  accept="*/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  id="file-upload-input"
                />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="file-upload-input">
                  <Button
                    variant="outlined"
                    color="primary"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    size="medium"
                  >
                    Upload File
                  </Button>
                </label>
              </Grid>
              <Grid item xs>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUploadClick}
                  sx={{ marginLeft: "60%" }}
                  size="medium"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </>
        )}
        <span>
          <Divider />
          <Typography variant="h6">Uploaded documents</Typography>
        </span>
        <List>
          {documents.map((document: any, index) => (
            <ListItem key={index}>
              <CircleIcon
                sx={{
                  color: "#222",
                  marginRight: "10px",
                  fontSize: "10px",
                }}
              />{" "}
              <ListItemText primary={document} />
              <span>
                <Tooltip title="Click to view document" placement="bottom">
                  <IconButton onClick={() => handleOpenDocument(index)}>
                    <OpenInNewIcon sx={{ color: blue[500] }} />
                  </IconButton>
                </Tooltip>
                {isUserNavigator && (
                  <Tooltip title="Click to delete document" placement="bottom">
                    <IconButton onClick={() => handleRemoveDocument(index)}>
                      <DeleteIcon sx={{ color: red[500] }} />
                    </IconButton>
                  </Tooltip>
                )}
              </span>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
