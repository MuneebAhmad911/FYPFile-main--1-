import React from "react";
import { Grid2 as Grid, Box, useMediaQuery } from "@mui/material";
import ProductCard from "../../ProductCard/ProductCard";

const ProductGrid = ({ products }) => {
  // Use media queries to detect screen size
  const is1120 = useMediaQuery("(max-width: 1120px)");
  const is1000 = useMediaQuery("(max-width: 1000px)");
  const is800 = useMediaQuery("(max-width: 800px)");
  const is600 = useMediaQuery("(max-width: 600px)");

  // Determine the number of columns based on screen size
  const getColumns = () => {
    if (is600) return 12; // 1 column at 600px
    if (is800) return 6; // 2 columns at 800px
    if (is1000) return 4; // 3 columns at 1000px
    if (is1120) return 3; // 4 columns at 1100px
    return 2.4; // Default: 6 columns (for screens larger than 1100px)
  };

  return (
    <Grid container spacing={2}>
      {products.length > 0 ? (
        products.map((product) => (
          <Grid item key={product.id} size={{ xs: 12, sm: getColumns(), md: getColumns() }}>
            <ProductCard
              image={product.productCardImage}
              heading={product.heading}
              brand={product.brand}
              stars={product.feedback[0]?.stars || 0}
              price={product.price}
              imageonHover={product.imageonHover}
            />
          </Grid>
        ))
      ) : (
        <Box sx={{ textAlign: "center", width: "100%", mt: 5 }}>
          No products found.
        </Box>
      )}
    </Grid>
  );
};

export default ProductGrid;
