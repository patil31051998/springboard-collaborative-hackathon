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

export const UploadDocuments = ({ initialDocumentList }: any) => {
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

  return (
    <Card>
      <CardHeader title="Document Upload" />
      <CardContent>
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
              size="medium"
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
              Upload
            </Button>
          </Grid>
        </Grid>
        <span>
          <Divider />
          <Typography variant="h6">Uploaded documents</Typography>
        </span>
        <List>
          {documents.map((document: any, index) => (
            <ListItem key={index}>
              <ListItemText primary={document} />
              <IconButton onClick={() => handleRemoveDocument(index)}>
                <DeleteIcon sx={{ color: red[500] }} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
