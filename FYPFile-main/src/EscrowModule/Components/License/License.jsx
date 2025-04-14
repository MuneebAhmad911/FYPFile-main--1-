import {
  Box,
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  Tooltip,
} from "@mui/material";
import { Colors, Fonts } from "../../Theme/Theme";

// SVG Icons
const SBPSvg = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke={Colors.fontColor}
      strokeWidth="4"
      fill="#007bff"
    />
    <text x="50" y="55" textAnchor="middle" fontSize="14" fill="white">
      SBP
    </text>
  </svg>
);

const SECPSvg = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      stroke={Colors.fontColor}
      strokeWidth="4"
      fill="#28a745"
    />
    <text x="50" y="55" textAnchor="middle" fontSize="14" fill="white">
      SECP
    </text>
  </svg>
);

const FBRSvg = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="50,10 90,80 10,80"
      stroke={Colors.fontColor}
      strokeWidth="4"
      fill="#ffc107"
    />
    <text x="50" y="65" textAnchor="middle" fontSize="14" fill="black">
      FBR
    </text>
  </svg>
);

const License = () => {
  const licenses = [
    {
      id: 1,
      name: "State Bank of Pakistan (SBP)",
      description: "Regulated under SBP for financial transactions.",
      licenseNo: "SBP-123456",
      link: "https://www.sbp.org.pk/f_links/f-links.asp",
      Icon: SBPSvg,
    },
    {
      id: 2,
      name: "Securities & Exchange Commission of Pakistan (SECP)",
      description: "Registered under SECP for business compliance.",
      licenseNo: "SECP-654321",
      link: "https://eservices.secp.gov.pk/eServices/NameSearch.jsp",
      Icon: SECPSvg,
    },
    {
      id: 3,
      name: "Federal Board of Revenue (FBR)",
      description: "Compliant with FBR taxation regulations.",
      licenseNo: "FBR-789012",
      link: "https://iris.fbr.gov.pk/#verifications",
      Icon: FBRSvg,
    },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          mb: "1rem",
          fontFamily: Fonts.primaryFont,
          color: Colors.fontColor,
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        Our Licenses & Certifications
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {licenses.map((license) => (
          <Grid item key={license.id} size={{ xs: 12, sm: 12, md: 4 }}>
            <Tooltip title="Click to verify" followCursor>
              <Card
                sx={{
                  textAlign: "center",
                  padding: "1rem",
                  boxShadow: 1,
                  cursor: "pointer",
                }}
                onClick={() => window.open(license.link, "_blank")}
              >
                <license.Icon />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: Fonts.primaryFont,
                      color: Colors.fontColor,
                      fontWeight: "bold",
                    }}
                  >
                    {license.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {license.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: Fonts.primaryFont,
                      color: Colors.fontColor,
                      fontWeight: "bold",
                      marginTop: "0.5rem",
                    }}
                  >
                    License No: {license.licenseNo}
                  </Typography>
                </CardContent>
              </Card>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default License;
