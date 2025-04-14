import React from "react";
import { Box, Chip, Typography } from "@mui/material";

const BrandsFilter = ({ brands, selectedBrands, setSelectedBrands }) => {
  const handleBrandClick = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand) ? prevBrands.filter((b) => b !== brand) : [...prevBrands, brand]
    );
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Filter by Brands
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {brands.map((brand) => (
          <Chip
            key={brand}
            label={brand}
            onClick={() => handleBrandClick(brand)}
            onDelete={selectedBrands.includes(brand) ? () => handleBrandClick(brand) : undefined}
            color={selectedBrands.includes(brand) ? "primary" : "default"}
            variant={selectedBrands.includes(brand) ? "filled" : "outlined"}
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BrandsFilter;
