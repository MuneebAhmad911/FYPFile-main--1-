import React from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import ProductCard from "../../Components/ProductCard/ProductCard";

function RecomendedProductContainer({ spData = [] }) {
  // Extract the correct product list, skipping the first entry if it's just an image
  const products = typeof spData[0] === "string" ? spData.slice(1) : spData;

  return (
    <>
      <Box display={"flex"} sx={{ width: "100%", height: "100%",m : "1rem" }}>
        <Box></Box>
        <Box>
          <Grid container spacing={2}>
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
            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
              {typeof spData[0] === "string" && (
                <img
                  src={spData[0]}
                  alt="Banner"
                  style={{
                    width: "100%",
                    height: "420px",
                    // margin: "0 1rem 0 1rem",
                    borderRadius: "12px",
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default RecomendedProductContainer;
