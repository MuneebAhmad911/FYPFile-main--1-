/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import useTextFieldComponent from "./Hooks/useTextFieldComponent";

function TextFieldComponent({ data }) {
  const {
    countries,
    isFieldDisabled,
    setIsFieldDisabled,
    valuee,
    setValuee,
    selectedCountry,
    error,
    handleSave,
  } = useTextFieldComponent(data);

  return (
    <Box
      sx={{
        display: "block",
        m: "1rem 0",
        p: "0 0 1rem 0",
      }}
    >
      {/* Dynamic Heading */}
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#333",
        }}
      >
        {data.label}
      </Typography>

      {/* Dynamic Input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {/* <Tooltip title={tooltipTitle}> */}
        {/* </Tooltip> */}
        {data.type === "country" && (
          <TextField
            fullWidth
            select
            value={selectedCountry.name}
            // onClick={() => {
            //   setIsFieldDisabled(false);
            //   setTooltipTitle("Save");
            // }}
            // onChange={(e) => {
            //   setIsFieldDisabled(true);
            //   setSelectedCountry(
            //     countries.find((country) => country.name === e.target.value)
            //   );
            // }}
            // disabled={isFieldDisabled}
            disabled
            variant="outlined"
            sx={{
              width: "100%", // Ensures the field takes up the full width within the grid4
              cursor: "pointer",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.name}>
                {country.flag} {country.name}
              </MenuItem>
            ))}
          </TextField>
        )}
        {data.type !== "country" && (
          <TextField
            fullWidth
            multiline={data.type === "textarea"}
            rows={3}
            disabled={isFieldDisabled}
            variant="outlined"
            value={valuee}
            onChange={(e) => setValuee(e.target.value)}
            error={!!error}
            helperText={error}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isFieldDisabled ? (
                    <Typography
                      component="span"
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
                      onClick={() => setIsFieldDisabled(false)}
                    >
                      Edit
                    </Typography>
                  ) : (
                    <Typography
                      component="span"
                      sx={{
                        color: "white",
                        cursor: "pointer",
                        bgcolor: "#007bff",
                        px: "1rem",
                        py: "0.3rem",
                        "&:hover": { bgcolor: "#0056b3" },
                        borderRadius: "4px",
                        fontSize: "0.875rem",
                      }}
                      onClick={handleSave}
                    >
                      Save
                    </Typography>
                  )}
                </InputAdornment>
              ),
            }}
            sx={{
              width: "100%", // Ensures the input takes the full width within the grid
            }}
          />
        )}
      </Box>

      {/* Dynamic Subtext */}
      {data.subtexts.map((text, index) => (
        <Typography
          key={index}
          sx={{
            fontSize: "14px",
            color: "gray",
            mt: index === 0 ? "0.5rem" : "0",
          }}
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
}

export default TextFieldComponent;
