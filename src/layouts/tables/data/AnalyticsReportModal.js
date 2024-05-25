import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./data.css";

const AnalyticsReportModal = ({
  title,
  fileUrl,
//   id,
  modalOpen,
  closeModal,
  data,
}) => {
    // console.log("key", id)
    // console.log("data", data)
  //   const [modalOpen, setModalOpen] = useState(false);
  //   const [modalOpen, setModalOpen] = useState(false);

  //   const openModal = () => {
  //     setModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setModalOpen(false);
  //   };
// console.log(data)
//   useEffect(() => {
//     // Update the iframe src when fileUrl changes
//     const iframe = document.getElementById("pdfViewer");
//     if (iframe) {
//       iframe.src = fileUrl;
//     }
//   }, [fileUrl]);
//   console.log("fileUrl", fileUrl)

  return (
    <>
      {/* <Button variant="primary" onClick={openModal}>
        {title}
      </Button> */}
      {/* <MDBox lineHeight={1} textAlign="left" onClick={openModal}>
        <MDButton
          display="block"
          variant="caption"
          color="text"
          fontWeight="medium"
        //   onClick={() =>
        //     window.open("https://drive.google.com/uc?id=" + fileUrl, "_blank")
        //   }
        >
          {title}
        </MDButton>
      </MDBox> */}

      <Modal
        show={modalOpen}
        onHide={closeModal}
        // key={key}
        // centered
        // className="analytics-report-modal"
        // size="xl"
        size="lg"
        // width="80%"
        style={{ marginTop: "65px"}}
        // style={{ marginTop: "65px" , marginLeft:"14%", marginRight:"12%"}}
      >
        <Modal.Header closeButton>
          <Modal.Title>View Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Content of the modal, such as the file URL */}
          {/* <p>{"https://drive.google.com/uc?id="+fileUrl}</p> */}
          {/* {
            window.open("https://drive.google.com/file/d/1KKOLCcWd5k5WSyK3Yeg7ZOK0ciMA0inb/view?usp=sharing")
          } */}
          <iframe
            title="PDF Viewer"
            // src={"https://drive.google.com/file/d/1KKOLCcWd5k5WSyK3Yeg7ZOK0ciMA0inb/view?usp=sharing"} 
            // src={"https://drive.google.com/uc?id="+fileUrl+"&authuser=0"} 
            src={fileUrl}
            width="100%"
            height="500px" // Set height as needed
            style={{ border: "none" }} // Hide iframe border
          />
          {/* <embed src="https://app.box.com/s/ttg66y6pvawh22gnrkhu1w2uupody33v" width="100%" height="500px" type="application/pdf" /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AnalyticsReportModal;
