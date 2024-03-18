// FileUpload.js
import React, { useState } from "react";
// import { Form, Button } from 'react-bootstrap';
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { uploadDoc } from "../utils";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // console.log(e)
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Replace 'http://localhost:3001/upload' with your backend endpoint
      const response = await axios.post(
        "http://localhost:3001/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <input type="file" onChange={handleFileChange} />

        <MDBox mt={4} mb={1}>
          <MDButton
            variant="gradient"
            color="info"
            fullWidth
            onClick={handleUpload}
          >
            Click to Generate Report
          </MDButton>
        </MDBox>
      </MDBox>
    </>
  );
};

export default FileUpload;
