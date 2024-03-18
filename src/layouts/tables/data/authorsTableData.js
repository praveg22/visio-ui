import React, { useEffect, useState } from "react";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { BASE_URL } from "layouts/constants";
import AnalyticsReportModal from "layouts/tables/data/AnalyticsReportModal";
import "./data.css";

export default function Data() {
  const [reportData, setReportData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFileUrl, setSelectedFileUrl] = useState("");
  const [rowReportData, setRowReportData] = useState("");
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      const user_id = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/reports/?userId=${user_id}`);
      const data = await response.json();
      if (data) {
        setReportData(data.data);
        // console.log(data.data)
      }
    };

    fetchReports();
  }, []);

  const openModal = (report) => {
    // console.log("openmodal", report);
    setSelectedReport(report);
    setRowReportData(report);
    setModalOpen(true);
  };
  const openModal1 = (fileUrl) => {
    setSelectedFileUrl(fileUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const createRows = (reportData) => {
    return reportData.map((report, index) => {
      // console.log("index", index);
      return {
        report: (
          <MDButton
            key={index}
            variant="text"
            color="info"
            onClick={() => openModal1(report.writtenReportFile)}
          >
            {report.reportName}
          </MDButton>
        ),
        report_date: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {new Date(report.createdAt).toLocaleDateString()}
          </MDTypography>
        ),
        analytics_report: (
          <>
            <MDBox lineHeight={1} textAlign="left">
              <MDButton
                key={index}
                display="block"
                variant="caption"
                color="text"
                fontWeight="medium"
                // onClick={() =>
                //   window.open("https://drive.google.com/file/d/1KKOLCcWd5k5WSyK3Yeg7ZOK0ciMA0inb/view?usp=sharing")
                // }
                // onClick={() =>
                //   window.open("https://drive.google.com/file/d/1KKOLCcWd5k5WSyK3Yeg7ZOK0ciMA0inb/view?usp=sharing", "_blank")
                // }
                // onClick={() =>
                //   window.open("https://drive.google.com/uc?id=" + report.analyticsReportFile, "_blank")
                // }
                onClick={(e) => {
                  e.preventDefault();
                  openModal(report);
                }}
              >
                View
              </MDButton>
            </MDBox>
            {/* {modalOpen && (
              <AnalyticsReportModal
                key={index}
                title="View"
                fileUrl={report.downloadFile}
                modalOpen={modalOpen}
                closeModal={closeModal}
                data={report}
              />
            )} */}
            {
             modalOpen && (
                <AnalyticsReportModal
                  // id={index}
                  title="View"
                  fileUrl={selectedReport?.downloadFile}
                  modalOpen={modalOpen}
                  closeModal={closeModal}
                  data={selectedReport}
                />
              )
            }
          </>
        ),
      };
    });
  };

  return {
    columns: [
      { Header: "Report", accessor: "report", width: "45%", align: "left" },
      { Header: "Date", accessor: "report_date", align: "center" },
      {
        Header: "analytics report",
        accessor: "analytics_report",
        align: "left",
      },
    ],
    rows: createRows(reportData),
    // modal: modalOpen && (
    //   <AnalyticsReportModal
    //     // id={index}
    //     title="View"
    //     fileUrl={selectedReport?.downloadFile}
    //     modalOpen={modalOpen}
    //     closeModal={closeModal}
    //     data={selectedReport}
    //   />
    // ),
  };
}
