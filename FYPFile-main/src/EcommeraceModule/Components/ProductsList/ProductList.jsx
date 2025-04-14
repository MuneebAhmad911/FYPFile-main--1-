import { Box, Grid2 as Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products }) {
  return (
    <Box>
      {products.map((product) => (
        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
          <ProductCard
            image={product.image}
            imageonHover={product.imageonHover}
            heading={product.heading}
            price={product.price}
            subHeading={product.subHeading}
            stars={product.stars}
            width={250}
            height={420}
          />
        </Grid>
      ))}
    </Box>
  );
}

export default ProductList;
