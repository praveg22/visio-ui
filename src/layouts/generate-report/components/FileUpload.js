import { BASE_URL } from "layouts/constants";
import React, { useRef, useState } from "react";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function Upload() {
  const userId = localStorage.getItem("token");
  const fileInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("Upload File");
  console.log("--------", selectedFile);

  const handleFileChange = (event) => {
    // setSelectedFile({...event.target.files[0], name: userId + event.target.files[0]?.name});
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
    const file = event.target.files[0];
    if (file) {
      const newFile = new File([file], `${userId}_${file.name}`, {
        type: file.type,
      });

      setSelectedFile(newFile);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // const response = await fetch('/v1/upload', {
      const response = await fetch(`${BASE_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
        // Handle success
      } else {
        // Handle error
        alert("Error uploading file.");
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error);
      alert("Network error. Please try again later.");
    }

    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <DashboardNavbar absolute isMini />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col s12 m6 l4 offset-m3 offset-l4">
            <div>
              <h4>
                <br />
              </h4>
            </div>
            <div className="file-field input-field">
              {/* <div className="btn blue" >
                <span style={{ display: 'block', width: '100%', backgroundColor: 'yellow' }}>File</span>
                  <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleFileChange}
                  required
                  aria-required="true"
                />
              </div>  */}
              <MDBox>
                {/* <MDButton
                    variant="gradient"
                    color="info"
                    
                  > */}
                <label>
                  <label
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#0d47a1",
                      color: "#fff",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "20px",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1565c0")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#0d47a1")
                    }
                  >
                    <span>File</span>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={handleFileChange}
                      required
                      aria-required="true"
                      style={{ display: "none" }}
                      // style={{ color: 'inherit', backgroundColor: 'inherit' }}
                      ref={fileInputRef}
                    />
                  </label>

                  {/* </MDButton> */}
                  {fileName && (
                    <span
                      style={{
                        display: "inline-block",
                        lineHeight: "36px",
                        textDecoration: "underline",
                        color: "#0d47a1",
                        verticalAlign: "bottom",
                      }}
                    >
                      {fileName}
                    </span>
                  )}
                </label>
              </MDBox>
              {/* <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Upload file" required aria-required="true" />
                        </div> */}
            </div>
          </div>
        </div>
        {/* <div className="row">
                <div className="col s12 m6 l4 offset-m3 offset-l4">
                    <button className="waves-effect btn blue" type="submit" id="uploadButton">Upload</button>
                </div>
            </div> */}
        <MDBox mt={4} mb={1}>
          <MDButton
            variant="gradient"
            color="info"
            fullWidth
            onClick={handleSubmit}
            disabled={!selectedFile}
          >
            Click to Generate Report
          </MDButton>
        </MDBox>
      </form>
    </>
  );
}

export default Upload;

// // FileUpload.js
// import React, { useState } from "react";
// // import { Form, Button } from 'react-bootstrap';
// import axios from "axios";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";

// // Material Dashboard 2 React examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { uploadDoc } from "../utils";

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     // console.log(e)
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       // Replace 'http://localhost:3001/upload' with your backend endpoint
//       const response = await axios.post(
//         "http://localhost:3001/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("File uploaded successfully:", response.data);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <>
//       <DashboardNavbar absolute isMini />
//       <MDBox mt={8}>
//         <input type="file" onChange={handleFileChange} />

//         <MDBox mt={4} mb={1}>
//           <MDButton
//             variant="gradient"
//             color="info"
//             fullWidth
//             onClick={handleUpload}
//           >
//             Click to Generate Report
//           </MDButton>
//         </MDBox>
//       </MDBox>
//     </>
//   );
// };

// export default FileUpload;
