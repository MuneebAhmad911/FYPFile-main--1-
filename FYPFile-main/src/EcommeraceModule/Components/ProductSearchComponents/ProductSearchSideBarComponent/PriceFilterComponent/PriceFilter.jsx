import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const PriceFilter = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (e) =>
    setPriceRange({ ...priceRange, [e.target.name]: e.target.value });

  return (
    <Box sx={{ mb: 2 }}>
      {/* Heading */}
      <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
        Filter by Price
      </Typography>

      {/* Stacked Input Fields */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography variant="body1" fontWeight={600} sx={{ mb: 0.5 }}>
            Price From:
          </Typography>
          <TextField
            type="number"
            name="from"
            value={priceRange.from}
            onChange={handlePriceChange}
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& input": { padding: "10px" },
            }}
            inputProps={{ min: 0 }}
          />
        </Box>

        <Box>
          <Typography variant="body1" fontWeight={600} sx={{ mb: 0.5 }}>
            Price To:
          </Typography>
          <TextField
            type="number"
            name="to"
            value={priceRange.to}
            onChange={handlePriceChange}
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& input": { padding: "10px" },
            }}
            inputProps={{ min: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PriceFilter;
