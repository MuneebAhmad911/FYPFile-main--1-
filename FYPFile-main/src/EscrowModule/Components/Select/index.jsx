// components/CustomSelectField.tsx
import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

export const CustomSelectField = ({ label, value, onChange, options = [] }) => {
  return (
    <Box>
      <Typography variant="subtitle2" fontWeight={500} gutterBottom>
        {label}
      </Typography>
      <Select
        value={value}
        onChange={onChange}
        fullWidth
        displayEmpty
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          fontSize: "16px",
        }}
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CustomSelectField;
