// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import "./authorsTableData.css";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useEffect, useState } from "react";
import { BASE_URL } from "layouts/constants";
import MDButton from "components/MDButton";
import Link from "@mui/material/Link";

export default function data() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch(
        `${BASE_URL}/reports/?userId=65a24b834d229a292152355b`
      );
      const data = await response.json();
      if (data) {
        setReportData(data.data);
      }
      console.log(data.data);
      return data;
    };

    fetchReports();
  }, []);

  const createRows = (reportData) => {
    return reportData.map((report) => {
      return {
        report: <Report name={report.reportName} href={report.writtenReportFile}/>,
        analytics_report: <AnalyticsReport title="Download"  />,
        report_date: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {report.createdAt}
          </MDTypography>
        ),
      };
    });
  }
    
  

  const Report = ({ name, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" variant="text" color="info">
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/* <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography> */}
         <MDButton component={Link} variant="text" color="info">
         {name}
 </MDButton>
    </MDBox>
  </a>
  );

//   <MDButton component={Link} to={action.route} variant="text" color="info">
//   {action.label}
// </MDButton>

  const AnalyticsReport = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "report", accessor: "report", width: "45%", align: "left" },

      // { Header: "status", accessor: "status", align: "center" },
      { Header: "date", accessor: "report_date", align: "center" },
      {
        Header: "analytics report",
        accessor: "analytics_report",
        align: "left",
      },
      // { Header: "action", accessor: "action", align: "center" },
    ],

    // rows: [
    //   {
    //     report: <Report name={reportData.reportName} />,
    //     analytics_report: <AnalyticsReport title="Download" />,
    //     report_date: (
    //       <MDTypography
    //         component="a"
    //         href="#"
    //         variant="caption"
    //         color="text"
    //         fontWeight="medium"
    //       >
    //         {reportData.writtenReportFile}
    //       </MDTypography>
    //     ),
    //   },
    // ],
    rows: createRows(reportData),
  };
}

// {
//   author: <Author image={team3} name="Alexa Liras" email="alexa@gmail.com" />,
//   function: <Job title="Programator" description="Developer" />,
//   status: (
//     <MDBox ml={-1}>
//       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//     </MDBox>
//   ),
//   employed: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       11/01/19
//     </MDTypography>
//   ),
//   action: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       Edit
//     </MDTypography>
//   ),
// },
// {
//   author: <Author image={team4} name="Laurent Perrier" email="laurent@gmail.com" />,
//   function: <Job title="Executive" description="Projects" />,
//   status: (
//     <MDBox ml={-1}>
//       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
//     </MDBox>
//   ),
//   employed: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       19/09/17
//     </MDTypography>
//   ),
//   action: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       Edit
//     </MDTypography>
//   ),
// },
// {
//   author: <Author image={team3} name="Michael Levi" email="michael@gmail.com" />,
//   function: <Job title="Programator" description="Developer" />,
//   status: (
//     <MDBox ml={-1}>
//       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
//     </MDBox>
//   ),
//   employed: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       24/12/08
//     </MDTypography>
//   ),
//   action: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       Edit
//     </MDTypography>
//   ),
// },
// {
//   author: <Author image={team3} name="Richard Gran" email="richard@gmail.com" />,
//   function: <Job title="Manager" description="Executive" />,
//   status: (
//     <MDBox ml={-1}>
//       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//     </MDBox>
//   ),
//   employed: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       04/10/21
//     </MDTypography>
//   ),
//   action: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       Edit
//     </MDTypography>
//   ),
// },
// {
//   author: <Author image={team4} name="Miriam Eric" email="miriam@gmail.com" />,
//   function: <Job title="Programator" description="Developer" />,
//   status: (
//     <MDBox ml={-1}>
//       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//     </MDBox>
//   ),
//   employed: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       14/09/20
//     </MDTypography>
//   ),
//   action: (
//     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//       Edit
//     </MDTypography>
//   ),
// },
// ],
