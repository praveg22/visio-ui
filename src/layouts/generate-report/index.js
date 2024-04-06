import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import FileUpload from "./components/FileUpload";
import MDButton from "components/MDButton";

function GenerateReport() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card> */}
      <MDBox mt={8}>
        {/* <MDBox mt={4} mb={1}>
          <MDButton variant="gradient" color="info">
            Generate Report
          </MDButton>
        </MDBox> */}
        <MDBox
          mx={2}
          mt={-3}
          py={3}
          px={2}
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
        >
          <MDTypography variant="h6" color="white">
            Generate Report
          </MDTypography>
        </MDBox>
        <MDBox
          mx={2}
          mt={-3}
          py={3}
          px={2}
          // variant="gradient"
          // bgColor="info"
          // borderRadius="lg"
          // coloredShadow="info"
        >
          <FileUpload />
        </MDBox>
      </MDBox>
      {/* </Card>
        </Grid>
      </Grid> */}
    </DashboardLayout>
  );
}

export default GenerateReport;
