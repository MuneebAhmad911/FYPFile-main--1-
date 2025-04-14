import { Box, Typography, Grid2 as Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextFieldComponent from "../Containers/TextFieldComponent/TextFieldComponent";
import { Colors } from "../../../../../../Theme/Theme";

function ProfileInformation() {
  // Define fields
  const nameField = {
    label: "Full Name",
    type: "text",
    value: "Ibtisam Khalid",
    subtexts: [
      "Your name must match the name on the bank account you will use to make or receive payments. We do not make or accept third-party payments.",
    ],
  };

  const emailField = {
    label: "Email Address",
    type: "email",
    value: "ibtisam@example.com",
    subtexts: ["Provide a valid email address to receive updates."],
  };

  const phoneField = {
    label: "Phone Number",
    type: "phone",
    value: "+923001234567",
    subtexts: ["Include the country code for a valid phone number."],
  };

  const countryField = {
    label: "Country",
    type: "country",
    value: "Pakistan",
    subtexts: ["Select the country you reside in."],
  };

  const ageField = {
    label: "Age",
    type: "number",
    value: "25",
    subtexts: ["Enter your age. You must be at least 18 years old."],
  };

  const addressField = {
    label: "Address",
    type: "textarea",
    value: "123 Main Street, Bahria Town, Islamabad, Pakistan",
    subtexts: ["Provide your full residential address."],
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs:0,
        sm:600,
        md:900,
        laptop: 1000,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ m: "0 0 0 1rem" }}>
        <Typography
          sx={{
            fontWeight: 550,
            fontFamily: "Roboto, serif",
            fontStyle: "normal",
            fontVariationSettings: "wdth 100",
            fontSize: "25px",
            color: Colors.EscrowDetailsColor,
          }}
        >
          Personal Information
        </Typography>

        <Box sx={{ p: "2rem" }}>
          <Grid container spacing={3}>
            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                md: 8,
                // laptop:12
              }}
            >
              <TextFieldComponent data={nameField} />
            </Grid>

            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                // laptop: 12,
                // laptop2: 4,
              }}
            >
              <TextFieldComponent data={ageField} />
            </Grid>

            <Grid item size= {12}>
              <TextFieldComponent data={emailField} />
            </Grid>

            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                md: 5,
              }}
            >
              <TextFieldComponent data={countryField} />
            </Grid>

            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                md: 7,
              }}
            >
              <TextFieldComponent data={phoneField} />
            </Grid>

            <Grid item size={12}>
              <TextFieldComponent data={addressField} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ProfileInformation;
