import {
  Box,
  Typography,
  Grid2 as Grid,
  TextField,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Colors } from "../../../../../../Theme/Theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
function BillingAddress() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: "",
      city: "",
      state: "",
      postalCode: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Billing Address Submitted:", data);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ m: "0 0 0 1rem" }}>
      <Typography
        sx={{
          fontWeight: 550,
          fontFamily: "Roboto, serif",
          fontStyle: "normal",
          fontSize: "25px",
          // color: "#333",
                      color: Colors.EscrowDetailsColor,
          
        }}
      >
        Billing Address
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontFamily: "Roboto, serif",
          fontStyle: "italic",
          fontSize: "14px",
          color: "#666",
          mt: 1,
        }}
      >
        Please enter your accurate billing information to ensure smooth
        transactions.
      </Typography>
      <Box sx={{ p: "2rem" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid size={{
                xs: 12,
                sm: 6,
                md: 7,
                // laptop:12
              }}>
              <Controller
                name="Name"
                control={control}
                rules={{ required: "Name is required." }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Full Name"
                    error={!!errors.city}
                    helperText={errors.city?.message || "Enter your Full Name."}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid size={{
                xs: 12,
                sm: 6,
                md: 5,
                // laptop:12
              }}>
              <Controller
                name="Country"
                control={control}
                rules={{ required: "Country is required." }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Country"
                    error={!!errors.city}
                    helperText={errors.city?.message || "Enter your Country."}
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            {/* Address */}
            <Grid size={12}>
              <Controller
                name="address"
                control={control}
                rules={{ required: "Address is required." }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Address"
                    multiline
                    rows={3}
                    error={!!errors.address}
                    helperText={
                      errors.address?.message ||
                      "Enter your full street address."
                    }
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            {/* City */}
            <Grid size={{
                xs: 12,
                sm: 6,
                md: 5,
                // laptop:12
              }}>
              <Controller
                name="city"
                control={control}
                rules={{ required: "City is required." }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="City"
                    error={!!errors.city}
                    helperText={
                      errors.city?.message || "Enter the city where you reside."
                    }
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            {/* State */}
            <Grid size={{
                xs: 12,
                sm: 6,
                md: 7,
                // laptop:12
              }}>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required." }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="State/Province"
                    error={!!errors.state}
                    helperText={
                      errors.state?.message || "Enter your state or province."
                    }
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            {/* Postal Code */}
            <Grid size={{xs:12 , sm:6}}>
              <Controller
                name="postalCode"
                control={control}
                rules={{
                  required: "Postal code is required.",
                  pattern: {
                    value: /^[0-9]{5}(-[0-9]{4})?$/,
                    message: "Invalid postal code format.",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Postal Code"
                    error={!!errors.postalCode}
                    helperText={
                      errors.postalCode?.message ||
                      "Enter a valid postal code (e.g., 12345)."
                    }
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                        cursor: "pointer",
                        bgcolor: "gray",
                        px: "1rem",
                        py: "0.3rem",
                        "&:hover": { bgcolor: "black" },
                        borderRadius: "4px",
                        fontSize: "0.875rem",
              }}
            >
              Save Address
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default BillingAddress;
